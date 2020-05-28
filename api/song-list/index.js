const ajax = require('../../utils/request.js') 

/**
 * 获取推荐歌单
 */
function gethighquality(data){
  return ajax.request({
    url:"/personalized",
    method:'get',
    data
  })
}
/**
 * 获取推荐歌曲
 */
function getPersonalizedNewsong(){
  return ajax.request({
    url:"/personalized/newsong",
    method:'get'
  })
}

export { gethighquality, getPersonalizedNewsong}