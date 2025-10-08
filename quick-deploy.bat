@echo off
echo ========================================
echo   Referus.co - Quick Deployment Setup
echo ========================================
echo.
echo Your website is ready for deployment!
echo.
echo RECOMMENDED STEPS:
echo 1. Go to https://vercel.com
echo 2. Sign up/Login with GitHub
echo 3. Click "New Project"
echo 4. Upload your project files
echo 5. Configure settings:
echo    - Framework: Create React App
echo    - Root Directory: client
echo    - Build Command: npm run build
echo    - Output Directory: build
echo 6. Add environment variables
echo 7. Deploy!
echo 8. Add custom domain: referus.co
echo.
echo SSL will be automatically configured!
echo.
echo Your site will be live at: https://referus.co
echo.
echo Press any key to open Vercel...
pause > nul
start https://vercel.com
