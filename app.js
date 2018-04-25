// app.json配置小程序的组成页面，窗口，以及窗口的背景，导航，文字样式
// 微信小程序是由数据驱动的

//app.js
App({
  //当程序 初始化 的时候执行onLaunch中的代码（初始化的时候触发）
  onLaunch: function () { // 初始化
    // 展示本地存储能力
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // 调用登录接口
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function(){
    console.log('生命周期函数----监听小程序显示的时候触发');
  },
  onHide:function(){
    console.log('生命周期函数----监听小程序隐藏的时候触发');
  },
  // 定义全局属性
  globalData: {
    userInfo: null,
    testUser: "刘鑫琦",
    pass: "1234567"
  }
})