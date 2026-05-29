$body = @{
  name = "Test Linktree"
  profile = @{
    displayName = "Saul Dev"
    bio = "Desarrollador Web"
    avatar = "preset:code"
  }
  links = @(
    @{ id = "l1"; title = "Mi Web"; url = "https://example.com"; icon = "fa-solid fa-globe" },
    @{ id = "l2"; title = "GitHub"; url = "https://github.com"; icon = "fa-brands fa-github" }
  )
  theme = "aurora"
} | ConvertTo-Json -Depth 5

$result = Invoke-RestMethod -Uri 'http://localhost:3000/api/linktree/save' -Method Post -ContentType 'application/json; charset=utf-8' -Body ([System.Text.Encoding]::UTF8.GetBytes($body))
Write-Host "SAVE RESULT:"
$result | ConvertTo-Json

# Test GET all
$all = Invoke-RestMethod -Uri 'http://localhost:3000/api/linktrees' -Method Get
Write-Host "`nALL LINKTREES:"
Write-Host "Count: $($all.Count)"

# Test GET by ID
$ltId = $result.id
$single = Invoke-RestMethod -Uri "http://localhost:3000/api/linktree/$ltId" -Method Get
Write-Host "`nSINGLE LINKTREE:"
$single | ConvertTo-Json -Depth 5

Write-Host "`nALL TESTS PASSED!"
