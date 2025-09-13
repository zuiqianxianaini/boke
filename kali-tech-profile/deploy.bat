@echo off

REM GitHub Pages 部署脚本（Windows版）

REM 检查命令行参数
if "%~2"=="" (
    echo 用法: %0 ^<GitHub用户名^> ^<仓库名^>
    pause
    exit /b 1
)

set USERNAME=%1
set REPONAME=%2

REM 检查Git是否安装
git --version > nul 2>&1
if %errorlevel% neq 0 (
    echo 错误: 未安装Git，请先安装Git。
    pause
    exit /b 1
)

REM 初始化Git仓库（如果尚未初始化）
if not exist ".git" (
    echo 初始化Git仓库...
    git init
)

REM 添加所有文件
echo 添加文件到暂存区...
git add .

REM 提交更改
echo 提交更改...
git commit -m "Deploy to GitHub Pages %date% %time%"

REM 检查是否已关联远程仓库
for /f "delims=" %%i in ('git config --get remote.origin.url 2^>nul') do set REMOTE_URL=%%i
if "%REMOTE_URL%"=="" (
    echo 关联远程GitHub仓库...
    git remote add origin https://github.com/%USERNAME%/%REPONAME%.git
) else (
    echo 更新远程仓库URL...
    git remote set-url origin https://github.com/%USERNAME%/%REPONAME%.git
)

REM 推送代码到GitHub
echo 推送代码到GitHub...
git push -u origin master --force

REM 提示用户在GitHub上启用Pages
echo.
echo 部署完成！接下来请在GitHub仓库设置中启用GitHub Pages：
echo 1. 访问 https://github.com/%USERNAME%/%REPONAME%/settings/pages
echo 2. 在Source部分选择分支（通常是master或main）和根目录
echo 3. 点击Save按钮
echo 4. 等待几分钟，您的网站将可以通过 https://%USERNAME%.github.io/%REPONAME%/ 访问

pause

exit /b 0