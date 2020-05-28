// pages/index/component/personalized-music/index.js
import { getPersonalizedNewsong } from "../../../../api/song-list/index.js"
import { randomNum } from '../../../../utils/auth.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  //组件生命周期
  lifetimes:{
    created(){
      this.handlegetPersonalizedNewsong()
    },
    //组件实列进入页面节点执行
    attached() {
    },
    //在组件在视图层布局完成后执行
    ready() {

    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    musicList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlegetPersonalizedNewsong(){
      getPersonalizedNewsong().then(res => {
        this.setData({
          musicList:res.data.result.slice(0,6)
        })
      })
    },
    /**
     * 跳转到播放界面
     */
    handleGoPlay(e){
      const songId = e.currentTarget.dataset.songid
      wx.navigateTo({
        url: `/pages/play/index?id=${songId}`,
      })
    },
    /**
     * 播放全部[随机播放一首]
     */
    handlePlayallMusic(){
      let random = randomNum(0, this.data.musicList.length)
      if(random === -1){
        random++
      }
      if (random === 6) {
        random--
      }
      const songId = this.data.musicList[random].song.id
      wx.navigateTo({
        url: `/pages/play/index?id=${songId}`,
      })
    }
  }
})
