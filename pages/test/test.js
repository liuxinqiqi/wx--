// 1.获取应用的实例

var app = getApp();

// 引入common.js
var common = require("../../common/common.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'lxq',
    pass: null,
    id: 8,
    bol: true,
    bol1: false
  },
  show: function(){
    // var bol = this.data.bol;
    this.setData({
      bol: !this.data.bol
    });
  },
  say: function () {
    console.log(this.data.name);
    common.sayHello(this.data.name);
  },

  toIndex: function(){
    console.log("不可以跳转到tabBar的路径")
    wx.navigateTo({
      url: '../navi/navi',
      success: function(){
        console.log("跳转到navi页面成功！！！")
      }
    });
    // wx.redirectTo({
    //   url: '../navi/navi',
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化options为页面跳转所带来的参数
    // setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）。
    this.setData({
      pass: app.globalData.pass
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('这是测试页里面的onshow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})