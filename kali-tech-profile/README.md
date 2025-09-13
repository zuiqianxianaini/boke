# KALI Linux 风格个人技术展示网页

一个基于KALI Linux风格的个人技术展示网页，具有暗色主题、绿色高亮元素和代码滚动背景效果。

## 技术栈

- HTML5
- CSS3
- JavaScript
- Font Awesome 图标

## 功能特点

- **KALI Linux风格**：采用暗色主题和绿色高亮元素
- **代码滚动背景**：动态展示KALI Linux命令和代码片段
- **终端模拟**：交互式终端界面，具有打字效果
- **响应式设计**：适配各种屏幕尺寸
- **动画效果**：卡片悬停、技能进度条、平滑滚动等

## 部署到GitHub Pages

### 前提条件

- 已安装Git
- 已拥有GitHub账号

### 部署步骤

1. **创建GitHub仓库**
   - 登录GitHub，点击右上角的"+"按钮，选择"New repository"
   - 填写仓库名称（如"kali-tech-profile"），选择公开或私有，点击"Create repository"

2. **初始化本地仓库并关联GitHub**
   ```bash
   # 在项目根目录打开终端
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/kali-tech-profile.git
   git push -u origin master
   ```

3. **启用GitHub Pages**
   - 进入GitHub仓库页面，点击"Settings"
   - 在左侧菜单中选择"Pages"
   - 在"Source"部分，选择分支（通常是main或master）和根目录（/ (root)）
   - 点击"Save"按钮
   - 等待几分钟，GitHub会生成访问链接

4. **更新和维护**
   ```bash
   # 每次修改后更新GitHub Pages
   git add .
   git commit -m "Update content"
   git push origin master
   ```

## 本地开发

```bash
# 使用Python简单HTTP服务器预览
python -m http.server 8000

# 或使用Node.js的http-server
# 首先安装：npm install -g http-server
http-server -p 8000
```

然后在浏览器中访问 http://localhost:8000

## 自定义配置

- 可以修改`index.html`中的个人信息和项目内容
- 可以在`style.css`中调整颜色和样式
- 可以在`script.js`中修改代码背景和动画效果

## 作者

安全专家 | KALI Linux & 全栈开发者

## 许可证

MIT