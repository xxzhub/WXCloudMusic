
const user = require("../../api/login/index.js")
// pages/my/index.js
Component({
 
  /**
   * 页面的初始数据
   */
  data: {
    loginLoading:false,
    buttonType:"warn",
    phone:"",
    password:"",
    isPassword:true
  },
  methods:{
    //登录
    handleLogin(){
      let data = {
        phone:this.data.phone,
        password: this.data.password
      }
      user.login(data).then(response =>{
        console.log(response)
      })
    },
    //设置手机号码
    handleSetPhone(e){
      this.setData({
        phone:e.detail.value
      })
    },
    //设置登录密码
    handleSetPwd(e){
      this.setData({
        password:e.detail.value
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   *
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

  }
})