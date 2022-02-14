// app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    this.login();
  },
  login:function() {
    var that = this;
      wx.login({
        success: function(res){
          console.log(res);
          wx.getUserInfo({
            success: function(res){
              console.log('app.json的回调参数'+res);
              // wx.setStorageSync('userInfo',{
              //   'loginName':res.rawData
              // });
            }
          })
        }
      })
  },
  
})
