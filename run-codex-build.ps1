$ErrorActionPreference = "Continue"
Set-Location "C:\JK\PROJECTS\coolsculpting"
$host.UI.RawUI.WindowTitle = "COOLSCULPTING - CODEX BUILD"
Clear-Host
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  COOLSCULPTING LANDING PAGE - CODEX BUILD" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
$prompt = Get-Content -Raw ".\CODEX_BUILD_PROMPT.md"
$status = @{project="coolsculpting";status="RUNNING";phase="codex-build";updatedAt=(Get-Date -Format o)} | ConvertTo-Json -Compress
$status | Set-Content ".\status.json"
Write-Host "STATUS: RUNNING" -ForegroundColor Yellow
Write-Host "Reference: C:\JK\PROJECTS\coolsculpting\mockup.png"
Write-Host "Prompt:    C:\JK\PROJECTS\coolsculpting\CODEX_BUILD_PROMPT.md"
Write-Host ""
try { Start-Transcript -Path ".\codex-build.log" -Force | Out-Null } catch {}
& codex --dangerously-bypass-approvals-and-sandbox --no-daemon -i ".\mockup.png" $prompt
$exitCode = $LASTEXITCODE
try { Stop-Transcript | Out-Null } catch {}
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "CODEX PROCESS EXITED: $exitCode" -ForegroundColor Cyan
Write-Host "Check status.json and codex-build.log for final gate status." -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
