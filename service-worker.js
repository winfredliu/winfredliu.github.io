if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const f=e=>a(e,r),l={module:{uri:r},exports:b,require:f};i[r]=Promise.all(d.map((e=>l[e]||f(e)))).then((e=>(c(...e),b)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/01/18/git学习/index.html",revision:"f330ebe91b03a94cbc05534282db1d4d"},{url:"2022/01/18/markdown学习/index.html",revision:"9c6eee7463bd9617df311df34c4e3daf"},{url:"2022/01/19/blog搭建/index.html",revision:"254e35ae4d0b4226d341952b095c3c3a"},{url:"2022/01/25/butterfly主题的额外美化/index.html",revision:"d20e0173bed0498c988b9171e86617b6"},{url:"404.html",revision:"513c2dc4d2282ead5f8a8d2be97f58ad"},{url:"about/index.html",revision:"46bc210ca61f05b0d995ce4821d81011"},{url:"archives/2022/01/index.html",revision:"589c1594d5c66cc39a0fe8761211b221"},{url:"archives/2022/index.html",revision:"707156f4fd6ff7519e44f16a49d34abe"},{url:"archives/index.html",revision:"cd5e97f48c2fdc3ba9cb0807cd8a7692"},{url:"artitalk/index.html",revision:"03ea3f14b01dd63978a6fbcf6a3f2d49"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"books/index.html",revision:"befca6527efc0cae0a2567617a82e191"},{url:"categories/index.html",revision:"9eb1d5b6b5d2d832349c5ebc07fe1b1b"},{url:"categories/教程/index.html",revision:"fd0a6e88554c40db1ab5eae064d0b6b1"},{url:"comments/index.html",revision:"6ad410a91d38fdedcb79c3db02f1edc3"},{url:"css/index.css",revision:"6e5b8886c8f96fdf9f95125edaa53883"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/girl/index.html",revision:"33cfc6b448ac7d0f498155fccf0aeadb"},{url:"gallery/scenery/index.html",revision:"48d6a1c3d6a47c840d935a163cf3ddb9"},{url:"games/index.html",revision:"38861fa9cdbdf8cf7faf0780b36ef7ad"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/a.jpg",revision:"f6a95334e8003541e9cc023ab3113ef7"},{url:"img/alipay.jpg",revision:"55730052bc84fb1bdd1186b42d92fb34"},{url:"img/avatar.jpg",revision:"44aac2c9639753ca06f7a1f6ffe90007"},{url:"img/cover1.jpg",revision:"12601c3dd4fb2e4ec75b3ef05e8f8876"},{url:"img/cover2.jpg",revision:"48e641ca0755c60084c52be912fe2b90"},{url:"img/cover3.jpg",revision:"c1ce40c8224aa1ba3c7541cdf3807e3c"},{url:"img/cover4.jpg",revision:"185f66f64df19a10b6aaf3ab743c1ff3"},{url:"img/cover5.jpg",revision:"d6f9cba87d6bf29ee40ab08bb7279f36"},{url:"img/example_page1.png",revision:"762b4af12fc1c48350d73c21221fb4b1"},{url:"img/example_post1.png",revision:"999c5f2544d52875941b2dba8f3ed7ab"},{url:"img/example1.png",revision:"1e1a3c37f0630bc22ce91787e7801a0e"},{url:"img/example2.png",revision:"dad94655fc8a05a551beda9238c3e496"},{url:"img/example3.png",revision:"1e506e89056df74a04224b5ee8eeb2c6"},{url:"img/example4.png",revision:"f3c0e02dcf8027d0afd779fb89bbe2fa"},{url:"img/example5.png",revision:"ba1b3433f36a0f7b448899d5fd37e3ba"},{url:"img/example6.png",revision:"fa09f939603e123239421e68871dd5ee"},{url:"img/example7.png",revision:"4b677b5743d6b1275c612263f5bee34c"},{url:"img/example8.png",revision:"d403b6e3a211d22f819b1eac7be3f226"},{url:"img/favicon.png",revision:"ce62d5c1d5a5e73631bb9dd804441133"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"65a502ac27cfa2d08b3ce9a173d7bbcc"},{url:"img/top_img/top_img.jpg",revision:"50d905f62f0e2e63e3bc2967d8f2cb9c"},{url:"img/top_img/top_img1.jpg",revision:"9b84bed4ac82b3b4b2e58591141b219c"},{url:"img/top_img/top_img3.png",revision:"30d2df114bce4ece698023de21e52095"},{url:"img/top_img/top_img7.png",revision:"b2c794d1536ffcfe66035c376c93d961"},{url:"img/wechat.png",revision:"eefdb3fe6bbfcacda68e805f272ca8e8"},{url:"index.html",revision:"0e0b6c92302f0b7609fcb7b4e56124d2"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"e497c80133dd23e61f52a75602a1dacd"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"movies/index.html",revision:"af2d8e86ffa119b8e5fae87fbdac07b4"},{url:"music/index.html",revision:"48736db2fd6619f4328b0463a4944631"},{url:"photo/index.html",revision:"4c1d69aae64718e2ce420365fc66808c"},{url:"public/service-worker.js",revision:"285dbca93074eb7d6aaf293e172a48d8"},{url:"public/workbox-07747850.js",revision:"f376d365fa46571497f8071accfa69ff"},{url:"tags/blog/index.html",revision:"46d1bd376f28c7d3b20befc27c128028"},{url:"tags/butterfly/index.html",revision:"5884d0b8d4a15c78f08ac7a8264c3158"},{url:"tags/git/index.html",revision:"9be6ba8f9edab577eb9b257271061c47"},{url:"tags/hexo/index.html",revision:"66b132adfbda7b429d2ee1a6c0510b64"},{url:"tags/index.html",revision:"cf8a44fa5e02bb5bcefb65467f4c809b"},{url:"tags/Markdown/index.html",revision:"96ae67a14c2ec649f8f37ab4ff8ad31a"},{url:"tags/教程/index.html",revision:"d8a3c861b54da7b52b248834cd885274"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
