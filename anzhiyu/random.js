var posts=["2025/02/08/IDM下载神奇终极指南/","2025/02/01/零成本搭建个人博客：Hexo-GitHub-Cloudflare/","2025/02/01/hexo部署出现错误Spawn failed解决方法/","2025/02/01/IObit Uninstaller PRO 14卸载软件工具/","2025/01/22/电脑已连接WiFi但无法上网/","2025/01/20/Git连接Github超时的解决方法/","2025/01/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };