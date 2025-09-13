#!/bin/bash

# GitHub Pages 部署脚本

# 检查命令行参数
if [ "$#" -ne 2 ]; then
    echo "用法: $0 <GitHub用户名> <仓库名>"
    exit 1
fi

USERNAME=$1
REPONAME=$2

# 检查Git是否安装
git --version > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "错误: 未安装Git，请先安装Git。"
    exit 1
fi

# 初始化Git仓库（如果尚未初始化）
if [ ! -d ".git" ]; then
    echo "初始化Git仓库..."
    git init
fi

# 添加所有文件
echo "添加文件到暂存区..."
git add .

# 提交更改
echo "提交更改..."
git commit -m "Deploy to GitHub Pages $(date '+%Y-%m-%d %H:%M:%S')"

# 检查是否已关联远程仓库
REMOTE_URL=$(git config --get remote.origin.url)
if [ -z "$REMOTE_URL" ]; then
    echo "关联远程GitHub仓库..."
    git remote add origin https://github.com/$USERNAME/$REPONAME.git
else
    echo "更新远程仓库URL..."
    git remote set-url origin https://github.com/$USERNAME/$REPONAME.git
fi

# 推送代码到GitHub
echo "推送代码到GitHub..."
git push -u origin master --force

# 提示用户在GitHub上启用Pages
echo "\n部署完成！接下来请在GitHub仓库设置中启用GitHub Pages："
echo "1. 访问 https://github.com/$USERNAME/$REPONAME/settings/pages"
echo "2. 在Source部分选择分支（通常是master或main）和根目录"
echo "3. 点击Save按钮"
echo "4. 等待几分钟，您的网站将可以通过 https://$USERNAME.github.io/$REPONAME/ 访问"

exit 0