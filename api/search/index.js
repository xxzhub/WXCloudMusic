const ajax = require('../../utils/request.js') 

  
  
  module.exports = {
    //获取热搜列表【详细】
    getSearchHot(){
      return ajax.request({
        url:"/search/hot/detail",
        method:"get"
      })
    },
    //搜索建议
    getSearchSuggest({ keywords, type ="mobile"} = {}){
      return ajax.request({
        url:"/search/suggest",
        method:"post",
        data:{
          keywords,
          type
        }
      })
    }
  }