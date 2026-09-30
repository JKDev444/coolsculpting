$ErrorActionPreference = "Continue"
Set-Location "C:\JK\PROJECTS\coolsculpting"
$host.UI.RawUI.WindowTitle = "COOLSCULPTING - FAST VISUAL FIDELITY REPAIR"
Clear-Host
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  COOLSCULPTING - FAST VISUAL FIDELITY REPAIR" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "TARGET: approved mockup - repair, do not redesign" -ForegroundColor Yellow
Write-Host "STATUS: RUNNING" -ForegroundColor Yellow
'{"project":"coolsculpting","status":"RUNNING","phase":"fast-visual-fidelity-repair"}' | Set-Content ".\status.json"
Get-Content -Raw ".\FAST_VISUAL_REPAIR.md" | codex exec -C "C:\JK\PROJECTS\coolsculpting" --dangerously-bypass-approvals-and-sandbox -i ".\reference\approved-mockup.png" -i ".\reference\sections\01-hero.png" -i ".\reference\sections\03-reviews.png" -i ".\reference\sections\04-results.png" -i ".\reference\sections\05-science.png" -i ".\reference\sections\06-final-cta-footer.png" - 2>&1 | Tee-Object -FilePath ".\fast-visual-repair.log"
$exitCode=$LASTEXITCODE
Write-Host ""
Write-Host "CODEX EXIT: $exitCode" -ForegroundColor Cyan
Write-Host "Review status.json and artifacts\fidelity before owner review." -ForegroundColor Cyan
