var posts=["2025/01/13/这是另一篇新的博文/","2025/01/12/这是一篇新的文章/","2025/01/12/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };