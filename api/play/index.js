const ajax = require("../../utils/request.js")

module.exports = {
  //获取歌曲播放地址
  getSongUrl(id){
    return ajax.request({
      url:"/song/url",
      method:"get",
      data:{
        id
      }
    })
  },
  //获取歌曲详情
  getSongDetail(ids){
    return ajax.request({
      url:"/song/detail",
      method:"get",
      data:{
        ids
      }
    })
  },
  //获取歌词
  getMusicLyric(id){
    return ajax.request({
      url:"/lyric",
      method:'get',
      data:{
        id
      }
    })
  }
}