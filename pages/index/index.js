// index.js
Page({
  //tabBar 数据
  data:{
   currentTab:0,
   tabbarList:[
   {
     "iconPath":"/pages/Static/image/index2.png",
     "selectedIconPath":"/pages/Static/image/index1.png",
     "text":"首页"
   },
   {
    "iconPath":"/pages/Static/image/mine2.png",
    "selectedIconPath":"/pages/Static/image/mine1.png",
    "text":"我的"
   } 
   ]
  },
  //切换tabBar
  switchNav:function(e){
   let that=this;
   if(this.data.currentTab==e.target.dataset.current){
      return false;
   }
   that.setData({
    currentTab: e.target.dataset.current
  })
  }
})
