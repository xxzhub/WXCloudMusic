import { getplaylistdetail} from '../../api/song-list/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:"",//
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const songId = options.id

    this.handlegetSongDetail(songId)
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
  handlegetSongDetail(id){
    getplaylistdetail({id}).then(res => {
      if (res.data.playlist.playCount > 10000) {
        res.data.playlist.playCount = `${Number.parseInt(res.data.playlist.playCount / 10000)}万`
      }
      this.setData({
        detailData:res.data.playlist
      })
      console.log(res.data.playlist)
    })
  },
  /**
   * 跳转到播放界面
   */
  handleGoPlay(e){
    wx.navigateTo({
      url: `/pages/play/index?id=${e.currentTarget.dataset.id}`
    })
  },
  /**
   * 返回上一级
   */
  back(){
    wx.navigateBack({
      
    })
  }
})