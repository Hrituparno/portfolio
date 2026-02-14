@echo off
echo.
echo ========================================
echo   IMAGE VERIFICATION SCRIPT
echo ========================================
echo.

cd /d "%~dp0"

echo Checking for images in public folder...
echo.

if exist "public\profile.jpg" (
    echo [OK] profile.jpg found!
    for %%A in ("public\profile.jpg") do echo     Size: %%~zA bytes
) else (
    echo [MISSING] profile.jpg NOT found!
    echo     Please add your photo as: public\profile.jpg
)

echo.

if exist "public\naruto-guide.png" (
    echo [OK] naruto-guide.png found!
    for %%A in ("public\naruto-guide.png") do (
        if %%~zA LSS 500 (
            echo     [WARNING] File is very small (%%~zA bytes^)
            echo     This might be a placeholder text file, not an actual image
        ) else (
            echo     Size: %%~zA bytes
        )
    )
) else (
    echo [MISSING] naruto-guide.png NOT found!
    echo     Emoji fallback will be used
)

echo.
echo ========================================
echo   NEXT STEPS
echo ========================================
echo.

if not exist "public\profile.jpg" (
    echo 1. Add your profile photo as: public\profile.jpg
)

if not exist "public\naruto-guide.png" (
    echo 2. Add Naruto image as: public\naruto-guide.png
) else (
    for %%A in ("public\naruto-guide.png") do (
        if %%~zA LSS 500 (
            echo 2. Replace naruto-guide.png with actual image
        )
    )
)

echo.
echo After adding images, run:
echo   git add public/profile.jpg public/naruto-guide.png
echo   git commit -m "Add images"
echo   git push origin main
echo.

pause
