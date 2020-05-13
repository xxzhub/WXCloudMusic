Component({
  data: {
    selected: 0, //首页
    color: "#8D8D8D",
    selectedColor: "#C62F2F",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/images/music.png",
      selectedIconPath: "/images/selected-music.png",
      text: "乐库"
    }, {
      pagePath: "/pages/collection/index",
      iconPath: "/images/selected-playing.png",
      selectedIconPath: "/images/playing.png",
      text: "正在播放"
    },
    {
      pagePath: "/pages/my/index",
      iconPath: "/images/me.png",
      selectedIconPath: "/images/selected-me.png",
      text: "我的"
    }]
  },

  methods: {
    switchTab(e){
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected:data.index
      })
    }
  }
})