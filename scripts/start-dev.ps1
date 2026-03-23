$projectRoot = Split-Path -Parent $PSScriptRoot
$env:Path += ";C:\Program Files\nodejs"

Set-Location $projectRoot
npm run dev:local
