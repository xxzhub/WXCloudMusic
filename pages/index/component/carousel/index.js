import { getBanner } from "../../../../api/home/index.js"
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持 
  },
  /**
   * 组件属性列表，用于组件自定义属性
   */
  properties: {

  },
  data: {
    indicatorDots: true,// 是否显示小点点
    autoplay: true,//是否自动播放
    interval: 2000,//自动播放时间间隔
    duration: 500,//滑动动画时间
    bannerList: [],//轮播图列表
  },
  //组件的生命周期
  lifetimes: {
    //组件创建过程中
    created() {
      wx.authorize({
        scope: 'scope.userInfo',
        success() {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
         
        }
      })
    },
    //组件实列进入页面节点执行
    attached() {
      this.handleGetBanner()
    },
    //在组件在视图层布局完成后执行
    ready() {

    }
  },
  /**
   * 方法集合
   */
  methods: {
    handleGetBanner() {
      getBanner({ type: 1 }).then(res => {
        if (res.data.banners.length > 0) {
          this.setData({
            bannerList: res.data.banners
          })
          console.log(this.data.bannerList)
        }

      })
    },
    /**
     * 跳转到播放界面
     */
    handleGoPlay(e){
      const song = e.currentTarget.dataset.song

      wx.navigateTo({
        url: `/pages/play/index?id=${song.id}`
      })
    }
  }
})