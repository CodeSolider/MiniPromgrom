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
    logoText:"刷哥证书"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
