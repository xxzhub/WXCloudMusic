const ajax = require('../../utils/request.js') 

/**
 * 获取轮播图数据
 */
function getBanner({type}){
  return ajax.request({
    url:"/banner",
    method:"get",
    data:{
      type
    }
  })
}

export  {getBanner}