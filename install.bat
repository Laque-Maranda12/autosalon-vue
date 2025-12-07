@echo off
echo Установка зависимостей...
call npm install
if %errorlevel% == 0 (
    echo.
    echo Установка завершена успешно!
    echo Теперь вы можете запустить проект командой: npm run dev
) else (
    echo.
    echo Произошла ошибка при установке.
    pause
)




