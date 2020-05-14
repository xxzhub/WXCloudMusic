const API_BASE_URL = "http://192.168.43.12:3000"

const request = (options)=>{
  //url
  let baseUrl = API_BASE_URL;
  if (options.url.indexOf('http') !== 0) {
    options.url = baseUrl + options.url;
  }

  //method

  if(options.method === undefined || options.method === null){
    options.method = "post"
  }

  //header
  if(options.header === undefined || options.header === null){
    options.header = {}
  }
  options.header['Content-Type'] = "application/x-www-form-urlencoded; charset=UTF-8"

  
  if (options.fail && typeof (options.fail) === 'function') {
    options.fail = function(error){
      reject(error)
    }
  }

    return new Promise((resolve,reject)=>{
      wx.request({
        url: options.url,
        data:options.data,
        method:options.method,
        success:function(res){
          const code = res.statusCode;
          switch(code){
            case 200:
          }
          if (res.statusCode === 200) {
            try {
              resolve(res)
            } catch (e) {
              console.error(`出错了${e}后台数据:${res.data}`)
            }
          } else if (res.statusCode === 404) {
             console.log('404');
          } else if (res.statusCode === 500) {
            console.error(`500错误`)
          }
        }
      })
    })
 
}

module.exports = {request}