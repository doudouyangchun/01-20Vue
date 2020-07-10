

var Home={
    template:` <div id="shou">
                <div class="d1"><h2>文章列表</h2></div>
                <div class="d2"><h2>视频列表</h2></div>
              </div>
            `
}
var New={
    template:`
             <div>
             <div class="dd1"><ul><li><h2>新闻条目1</h2></li></ul></div>
            <div class="dd1"><ul><li><h2>新闻条目2</h2></li></ul></div>
            <div class="dd1"><ul><li><h2>新闻条目</h2></li></ul></div>
               </div>  
            `
}
var Video={
    template:`
    <div>
        <div class="ddd1"><h2>广告栏</h2></div>
        <div class="ddd2"><h2>视频内容</h2></div>
    </div>
            `
}
var routes=[
    {
        path:"/",component:Home
    },
    {
        path:"/new",
        component:New
    },
    {
        path:"/video",
        component:Video
    }
]
var router=new VueRouter({
    routes:routes
})
var vm=new Vue({
    el:"#app",
    router
})