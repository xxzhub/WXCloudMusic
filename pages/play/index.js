// pages/play/index.js
const play = require("../../api/play/index.js")
const app = getApp()
import { randomNum} from '../../utils/auth.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    song: [],//歌曲信息
    isPlay: true,//是否播放
    musicUrl: "",//歌曲Url
    musicId:"",//歌曲id
    endTime:'4:36',//歌曲总时间
    startTime:"0:00",//歌曲开始时间
    isShowLyric:false,//是否显示歌词
    lyricData:"",//歌词
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const musicId = options.id
    this.setData({
      musicId: musicId
    })
    this.handleGetMusicUrl(musicId) //获取歌曲url
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
  /**
   * 获取歌曲信息
   */
  handleGetMusicInfo(ids) {
    play.getSongDetail(ids).then(res => {
      console.log(res)
      this.setData({
        song: res.data.songs[0]
      })
    })
  },
  //获取歌曲url
  handleGetMusicUrl(id) {
    play.getSongUrl(id).then(res => {
      const musicUrl = res.data.data[0].url
      //获取歌曲信息
      const ids = id
      this.handleGetMusicInfo(ids) 
      //获取歌词
      this.handleGetMusicLyric(id)
      if (musicUrl === null) {
        wx.showModal({
          content: '服务器开了点小差~~',
          cancelColor: '#DE655C',
          confirmColor: '#DE655C',
          showCancel: false,
          confirmText: '返回',
          complete() {
            wx.switchTab({
              url: '/pages/index/index'
            })
          }
        })
      }else{
        this.setData({
          musicUrl: musicUrl
        })
        //播放音乐
        this.handlePlayMusic(musicUrl)
      }
    })
  },
  /**
   * 暂停播放音乐
   */
  handlePausePlay() {
    const { isPlay } = this.data
    let bgAudioManage = app.globalData.bgAudioManage
    if(isPlay){
      bgAudioManage.pause()
    }else{
      bgAudioManage.play()
    }
    this.setData({
      isPlay: !isPlay
    })
   
  },
  /**
   * 播放歌曲
   */
  handlePlayMusic(url) {
    let backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.src = url
    backgroundAudioManager.title = "title"
    backgroundAudioManager.onEnded(()=>{
      this.handlePlayNextMusic()
    })
    app.globalData.bgAudioManage = backgroundAudioManager
  },
  /**
   * 播放下一首
   */
  handlePlayNextMusic(){
    let searchMusicList = wx.getStorageSync('searchMusicList')
    let random = randomNum(0,searchMusicList.length) - 1
    //随机播放搜索列表中一首
    this.handleGetMusicUrl(searchMusicList[random].id) //获取歌曲url
  },
  /**
   * 切换歌词
   */
  handleSwitchLyric(){
    this.setData({
      isShowLyric: !this.data.isShowLyric
    })
  },
  /**
   * 获取歌词
   */
  handleGetMusicLyric(id){
    play.getMusicLyric(id).then(res => {
     /*  let partten = /[00:00.000]/-g
      let partten = /[\d{0~9}:00.000]/ - g
      let lyric =  */
      this.setData({
        lyricData:res.data.lrc.lyric
      })
     
    })
  },
  /**
  * 返回上一级
  */
  back() {
    wx.navigateBack({

    })
  }
})