
setlocal enabledelayedexpansion
set "max=0"
for /d %%G in (Public\V*) do (
    set "folder=%%~nxG"
    set "ver=!folder:V=!"
    if !ver! gtr !max! set "max=!ver!"
)
set /a NEXT_VERSION=max+1
echo Next version is !NEXT_VERSION!
endlocal & set "NEXT_VERSION=%NEXT_VERSION%"

mkdir Public\V%NEXT_VERSION%