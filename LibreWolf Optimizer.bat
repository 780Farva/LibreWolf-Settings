title LibreWolf Optimizer
mode con:cols=60 lines=10
cls
@echo off
@echo Title: LibreWolf Optimizer
@echo Description: Optimize LibreWolf (portable verison) by deleting unnecessary files with the ability to restore them.
@echo Version: 0.01
@echo Data: 11.08.2024
@echo ---------------------------------------------------------
@echo Developer: Enobraed (https://t.me/Enobraed)
@echo ---------------------------------------------------------
taskkill /f /im "librewolf.exe" >nul 2>&1
timeout /t "3" >nul 2>&1

::Creating backup folders (necessary for mkdir to work as well)
mkdir ".backup" >nul 2>&1
mkdir ".backup\browser" >nul 2>&1
mkdir ".backup\browser\features" >nul 2>&1
mkdir ".backup\browser\VisualElements" >nul 2>&1
mkdir ".backup\gmp-clearkey" >nul 2>&1
mkdir ".backup\gmp-clearkey\0.1" >nul 2>&1
mkdir ".backup\uninstall" >nul 2>&1

::Notifications from websites to the desktop
move "%~dp0\notificationserver.dll" "%~dp0\.backup" >nul 2>&1

::Tab Containers
move "%~dp0\plugin-container.exe" "%~dp0\.backup" >nul 2>&1

::The file to delete LibreWolf (It's portable =D)
move "%~dp0\uninstall\helper.exe" "%~dp0\.backup\uninstall" >nul 2>&1

::Libraries for the operation of the application
move "%~dp0\msvcp140.dll" "%~dp0\.backup" >nul 2>&1
move "%~dp0\vcruntime140.dll" "%~dp0\.backup" >nul 2>&1
move "%~dp0\vcruntime140_1.dll" "%~dp0\.backup" >nul 2>&1

::Various junk files
move "%~dp0\AccessibleMarshal.dll" "%~dp0\.backup" >nul 2>&1
move "%~dp0\browser\features\formautofill@mozilla.org.xpi" "%~dp0\.backup\browser\features" >nul 2>&1
move "%~dp0\browser\features\pictureinpicture@mozilla.org.xpi" "%~dp0\.backup\browser\features" >nul 2>&1
move "%~dp0\browser\features\screenshots@mozilla.org.xpi" "%~dp0\.backup\browser\features" >nul 2>&1
move "%~dp0\browser\features\webcompat@mozilla.org.xpi" "%~dp0\.backup\browser\features" >nul 2>&1
move "%~dp0\browser\VisualElements\PrivateBrowsing_70.png" "%~dp0\.backup\browser\VisualElements" >nul 2>&1
move "%~dp0\browser\VisualElements\PrivateBrowsing_150.png" "%~dp0\.backup\browser\VisualElements" >nul 2>&1
move "%~dp0\browser\VisualElements\VisualElements_70.png" "%~dp0\.backup\browser\VisualElements" >nul 2>&1
move "%~dp0\browser\VisualElements\VisualElements_150.png" "%~dp0\.backup\browser\VisualElements" >nul 2>&1
move "%~dp0\firefox.VisualElementsManifest.xml" "%~dp0\.backup" >nul 2>&1
move "%~dp0\gmp-clearkey\0.1\clearkey.dll" "%~dp0\.backup\gmp-clearkey\0.1" >nul 2>&1
move "%~dp0\gmp-clearkey\0.1\manifest.json" "%~dp0\.backup\gmp-clearkey\0.1" >nul 2>&1
move "%~dp0\libEGL.dll" "%~dp0\.backup" >nul 2>&1
move "%~dp0\libGLESv2.dll" "%~dp0\.backup" >nul 2>&1
move "%~dp0\nmhproxy.exe" "%~dp0\.backup" >nul 2>&1
move "%~dp0\pingsender.exe" "%~dp0\.backup" >nul 2>&1
move "%~dp0\precomplete" "%~dp0\.backup" >nul 2>&1
move "%~dp0\private_browsing.exe" "%~dp0\.backup" >nul 2>&1
move "%~dp0\private_browsing.VisualElementsManifest.xml" "%~dp0\.backup" >nul 2>&1
move "%~dp0\removed-files" "%~dp0\.backup" >nul 2>&1

::Deleting empty folders
for /f "usebackq delims=" %%d in (`"dir /ad/b/s | sort /R"`) do rd "%%d" >nul 2>&1

pause
exit