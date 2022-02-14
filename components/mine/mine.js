// pages/component/mine/mine.js
Component({
    /* 开启全局样式设置 */
    options: {
      addGlobalClass: true,
    },

  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: 'Mine'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    avatarImg:"/pages/Static/image/defaultAvatar.jpg",
    logoText:"刷哥证书", 
    loginInfo:{
      title:'微信授权',
      content:'获得您的公开信息(昵称、头像、地区、性别等)',
      loginName:'Gayhub',
      logoImg:'/pages/Static/image/logoimg.jpg'      
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShowDialog(e){ 
      let userInfo = wx.getStorageSync('userInfo'); 
      let dialogComponent = this.selectComponent('.component_dialog');
      console.log("获取用户信息"+userInfo);
      if(!userInfo){
        dialogComponent && dialogComponent.show();
      }else{
        this.setData({
          userInfo: userInfo
        })
        dialogComponent && dialogComponent.hide();
      }
    },
    onConfirm(e){ //点击允许
      console.log('请求同意了....');
      let dialogComponent = this.selectComponent('.component_dialog');
      dialogComponent && dialogComponent.hide();      
      let userInfo = JSON.parse(e.detail.detail.rawData);
      console.log(e);
      if (!userInfo) {
        return;
      }
      this.setData({
        userInfo: userInfo
      })
      wx.setStorageSync('userInfo', userInfo);     
    },
    onCancel(){
      let dialogComponent = this.selectComponent('.component_dialog');
      dialogComponent && dialogComponent.hide();
    }
  }
})
