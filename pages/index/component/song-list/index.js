// pages/index/component/song-list/index.js

import { gethighquality} from '../../../../api/song-list/index.js'
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持 
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {
    //组件创建过程中
    created() {

    },
    //组件实列进入页面节点执行
    attached() {
      this.handlegethighquality()
    },
    //在组件在视图层布局完成后执行
    ready() {

    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    songlist:[],//歌单数据
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 获取精选歌单
     */
    handlegethighquality({ limit = 6} = {}){
      let data = {
        limit
      }
      gethighquality(data).then(res=>{
        res.data.result = res.data.result.map(item => {
         if (item.playCount>10000){ 
           item.playCount = `${Number.parseInt(item.playCount / 10000)}万`
           return item
         }
       })
        this.setData({
          songlist: res.data.result
        })
      })
    }
  }
})
