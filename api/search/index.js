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
        method:"get",
        data:{
          keywords,
          type
        }
      })
    },
    /**
     * 搜索结果
     * @param [String] keywords 搜索关键字
     * @param [Number] limit 返回条数
     * @param [Number] type 返回类型 1单曲 
     */
    getSearch(data){
      return ajax.request({
        url:"/search",
        method:"get",
        data
      })
    }
  }