@echo off
echo ========================================
echo   Deploy Plasticos GT - GitHub Pages
echo ========================================
echo.

REM Verificar se Git esta instalado
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Git nao esta instalado!
    echo Por favor, instale o Git: https://git-scm.com/
    pause
    exit /b 1
)

echo [1/5] Adicionando arquivos...
git add .

echo.
echo [2/5] Fazendo commit...
set /p commit_msg="Digite a mensagem do commit: "
if "%commit_msg%"=="" set commit_msg=Update website

git commit -m "%commit_msg%"

echo.
echo [3/5] Verificando repositorio remoto...
git remote -v | findstr origin >nul
if errorlevel 1 (
    echo.
    echo [AVISO] Nenhum repositorio remoto configurado!
    echo.
    set /p repo_url="Cole a URL do seu repositorio GitHub: "
    git remote add origin !repo_url!
    echo Repositorio adicionado!
)

echo.
echo [4/5] Enviando para o GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo [AVISO] Falha ao fazer push. Tentando com 'master'...
    git push -u origin master
)

echo.
echo [5/5] Deploy concluido!
echo.
echo ========================================
echo   Seu site sera publicado em breve!
echo ========================================
echo.
echo Acesse: https://github.com/SEU-USUARIO/GARRAFAS-GT/actions
echo para acompanhar o progresso do deploy.
echo.
echo Aguarde 2-5 minutos e acesse:
echo https://SEU-USUARIO.github.io/GARRAFAS-GT/
echo.
pause
