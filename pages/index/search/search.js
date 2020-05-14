const search = require("../../../api/search/index.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    hotListData: [],//热搜列表
    inputValue: "",//输入框的值
    searchKey: "",//搜索的值
    isShowHotList: true, //热搜列表显示
    isSearchSuggest: false,//搜索建议显示
    isSearchResult:false,//搜索结果是否显示
    searchSuggestList: [],//搜索建议数据
    searchResultList:[],//搜索结果数据

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    this.handleGetSearchHot()
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
  //获取热门搜索
  handleGetSearchHot() {
    search.getSearchHot().then(res => {
      wx.hideLoading()
      this.setData({
        hotListData: res.data.data
      })
    })
  },
  //实时获取输入框值
  getsearchKey(e) {
    let searchVal = e.detail.value
    //实时获取输入值
    this.setData({
      searchKey: searchVal
    })
    if (searchVal !== "") {
      this.handleGetSearchSuggest()
    }
  },
  /**
   * 搜索建议
   * @param [String] keywords 关键字
   * @param [String] type "mobile" 返回移动端数据
   */
  handleGetSearchSuggest() {
    search.getSearchSuggest({ keywords: this.data.searchKey, type: "mobile" }).then(res => {
      if (res.data.result.allMatch.length > 0) {
        this.setData({
          searchSuggestList: res.data.result.allMatch,
          isShowHotList: false,
          isSearchSuggest: true,
        })
      }
    })
  },
  //点击搜索或者搜索建议
  handleFillValue(e){
    const searchValue = e.currentTarget.dataset.value
    this.setData({
      searchKey:searchValue,
      inputValue:searchValue,
      isSearchResult:true,
      isSearchSuggest:false,
      isShowHotList:false,
    })
    wx.showLoading({
      title: '加载中',
    })
    this.handleGetSearch()
  },
  /**
    * 搜索结果
    * @param [String] keywords 搜索关键字
    * @param [Number] limit 返回条数
    * @param [Number] type 返回类型 1单曲 
    */
  handleGetSearch() {
    search.getSearch({ keywords: this.data.searchKey, type: 1, limit: 50, offset: 2 }).then(res => {
      wx.hideLoading()
       const data = res.data.result.songs
       if(data && data.length > 0){
         this.setData({
           searchResultList:data
         })
       }
    })
  },
  //取消搜索回到首页
  handleCancelSearch() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  //消除搜索值
  handleRemoveInputVal() {
    this.setData({
      inputValue: "",
      isSearchResult: false,
      isSearchSuggest: false,
      isShowHotList: true,
    })
  }
})