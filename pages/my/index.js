
const user = require("../../api/login/index.js")
// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:"", //用户信息
    isLogin:false //是否登录
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userInfo = wx.getStorageSync("wxUserInfo")
    if(userInfo){
      this.setData({
        userInfo:userInfo
      })
      this.setData({
        isLogin: true
      })
    }else{
      this.handleGetAuthorize()
    }
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
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
    
  },
  /**
   * 用户授权
   */
  handleGetAuthorize(){
    const _that = this
    wx.getSetting({
      success(res){
        if (!res.authSetting['scope.userInfo']){
          wx.authorize({
            scope: 'scope.userInfo',
            success(){
              wx.showToast({
                title: '成功',
                icon:"success",
                duration:1000
              })
              _that.handleGetUserInfo()
              this.setData({
                isLogin: false
              })
            },
            fail(){
              wx.showModal({
               title: '警告',
                content:"您点击了拒绝授权,点击确定重新获取授权。",
               success(res){
                 if (res.confirm){
                   wx.openSetting({
                     success(res){
                       this.setData({
                         isLogin: false
                       })
                     }
                   })
                 }
               }
             })
            }
          })
        }else {
          _that.handleGetUserInfo()
        }
      }
    })
  },
  /**
   * 获取用户信息
   */
  handleGetUserInfo(){
    const _that = this
    this.setData({
      isLogin:true
    })
    wx.getUserInfo({
      lang:"zh-CN",
      success(res){
        _that.setData({
          userInfo:res.userInfo
        })
        wx.setStorageSync("wxUserInfo", res.userInfo)
      }
    })
  }
})