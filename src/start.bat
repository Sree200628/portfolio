@echo off
cd /d "%~dp0"
start "" cmd /c "npm run preview"
timeout /t 5 /nobreak >nul
start "" "http://localhost:4173/"