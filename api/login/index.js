const ajax = require('../../utils/request.js') 

module.exports = {
  //用户手机登录
  login(data){
    return ajax.request({
      url:"/login/cellphone",
      method:"post",
      data
    })
  },
}