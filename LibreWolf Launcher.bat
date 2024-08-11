@echo off
taskkill /f /im "librewolf.exe" >nul 2>&1
del "%~dp0\Profiles\Default\cert_override.txt" >nul 2>&1
del "%~dp0\Profiles\Default\cookies.sqlite-wal" >nul 2>&1
del "%~dp0\Profiles\Default\extensions.json.pbak" >nul 2>&1
del "%~dp0\Profiles\Default\favicons.sqlite-wal" >nul 2>&1
del "%~dp0\Profiles\Default\notificationstore.json" >nul 2>&1
del "%~dp0\Profiles\Default\parent.lock" >nul 2>&1
del "%~dp0\Profiles\Default\pkcs11.txt.pbak" >nul 2>&1
del "%~dp0\Profiles\Default\places.sqlite-wal" >nul 2>&1
del "%~dp0\Profiles\Default\prefs.js.pbak" >nul 2>&1
del "%~dp0\Profiles\Default\webappsstore.sqlite-wal" >nul 2>&1
rd /s /q "%~dp0\Profiles\Default\bookmarkbackups" >nul 2>&1
rd /s /q "%~dp0\Profiles\Default\cache2" >nul 2>&1
rd /s /q "%~dp0\Profiles\Default\datareporting" >nul 2>&1
rd /s /q "%~dp0\Profiles\Default\security_state" >nul 2>&1
rd /s /q "%~dp0\Profiles\Default\settings" >nul 2>&1
rd /s /q "%~dp0\Profiles\Default\shader-cache" >nul 2>&1
rd /s /q "%~dp0\Profiles\Default\startupCache" >nul 2>&1
rd /s /q "%~dp0\Profiles\Default\thumbnails" >nul 2>&1
for /f "usebackq delims=" %%d in (`"dir /ad/b/s | sort /R"`) do rd "%%d" >nul 2>&1
start .\"LibreWolf-Portable.exe" -no-deelevate -purgecaches
exit