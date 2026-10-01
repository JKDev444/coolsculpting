$ErrorActionPreference = "Continue"
$project = "C:\JK\PROJECTS\coolsculpting"
Set-Location $project
$Host.UI.RawUI.WindowTitle = "COOLSCULPTING OVERNIGHT VISUAL REBUILD"

git fetch origin
git checkout visual-fidelity-repair
git pull --ff-only origin visual-fidelity-repair

'{"project":"coolsculpting","status":"RUNNING","phase":"overnight-visual-rebuild"}' | Set-Content ".\status.json"

Write-Host "PASS 1 - REBUILD TO APPROVED MOCKUP" -ForegroundColor Cyan
Get-Content -Raw ".\OVERNIGHT_CODEX_PROMPT.md" | codex exec -C $project --dangerously-bypass-approvals-and-sandbox -i ".\mockup.png" -i ".\reference\approved-mockup.png" - 2>&1 | Tee-Object -FilePath ".\overnight-pass1.log"

if (Test-Path ".\artifacts\fidelity\final-1440.png") {
  Write-Host "PASS 2 - INDEPENDENT VISUAL REVIEW + REPAIR" -ForegroundColor Cyan
  Get-Content -Raw ".\OVERNIGHT_VISUAL_REVIEW.md" | codex exec -C $project --dangerously-bypass-approvals-and-sandbox -i ".\mockup.png" -i ".\artifacts\fidelity\final-1440.png" - 2>&1 | Tee-Object -FilePath ".\overnight-pass2.log"
}

Write-Host "FINAL VALIDATION" -ForegroundColor Cyan
npm test 2>&1 | Tee-Object -FilePath ".\overnight-tests.log"
$testExit = $LASTEXITCODE
npm run build 2>&1 | Tee-Object -FilePath ".\overnight-build.log"
$buildExit = $LASTEXITCODE
npm run test:e2e 2>&1 | Tee-Object -FilePath ".\overnight-e2e.log"
$e2eExit = $LASTEXITCODE

if (($testExit -ne 0) -or ($buildExit -ne 0) -or ($e2eExit -ne 0)) {
  Write-Host "PASS 3 - FIX VALIDATION FAILURES" -ForegroundColor Yellow
  $repair = "Read VISUAL_CONTRACT.md first. Read overnight-tests.log, overnight-build.log, and overnight-e2e.log. Fix only actual failures without reverting the visual rebuild. Rerun npm test, npm run build, and npm run test:e2e. Recapture final-1440.png and final-390.png if rendering changes. Do not commit or push."
  $repair | codex exec -C $project --dangerously-bypass-approvals-and-sandbox -i ".\mockup.png" - 2>&1 | Tee-Object -FilePath ".\overnight-pass3.log"
  npm test 2>&1 | Tee-Object -FilePath ".\overnight-tests-final.log"
  $testExit = $LASTEXITCODE
  npm run build 2>&1 | Tee-Object -FilePath ".\overnight-build-final.log"
  $buildExit = $LASTEXITCODE
  npm run test:e2e 2>&1 | Tee-Object -FilePath ".\overnight-e2e-final.log"
  $e2eExit = $LASTEXITCODE
}

@{test=$testExit;build=$buildExit;e2e=$e2eExit} | ConvertTo-Json | Set-Content ".\overnight-validation.json"

Write-Host "SAVE TO GITHUB" -ForegroundColor Cyan
git add .
git commit -m "Rebuild landing page to approved mockup"
git push origin visual-fidelity-repair

if (($testExit -eq 0) -and ($buildExit -eq 0) -and ($e2eExit -eq 0)) {
  Write-Host "DEPLOY TO VERCEL" -ForegroundColor Cyan
  vercel --prod --yes 2>&1 | Tee-Object -FilePath ".\overnight-vercel.log"
  Write-Host "DONE - REVIEW https://coolsculpting.vercel.app" -ForegroundColor Green
} else {
  Write-Host "SAVED TO GITHUB, BUT VALIDATION STILL HAS FAILURES" -ForegroundColor Red
}

Write-Host "Leave this PowerShell window open for final status." -ForegroundColor Cyan