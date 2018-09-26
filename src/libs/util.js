import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

let util = {

}
//axios.defaults.headers.common['token'] = 'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1Mjg1MjYxNjMsIlVTRVJfSUQiOjI1LCJQSE9ORSI6IjE3ODAxMjMzNTE3In0.vLHpcbKbo2JoXWphw_Dfn-SyJ3Knw55ClxzHyvMjHG_5k4DjXRJm5AJ1hIU2xz97PL8xYUf1XtX7Z2Hbch2SEQ';
const ajaxUrl = process.env.NODE_ENV === 'development'
  //测试环境
  ?'http://p2p-test.cf57eaa4fd3624fc39ab5ed0955c6048a.cn-beijing.alicontainer.com'
  // 生产
  //   ?'https://api.kreditnesia.com'
  //
  //? 'https://api.kartuserba.com/appserver/v1'
  : process.env.NODE_ENV === 'production'
    //测试环境
    ?'http://p2p-test.cf57eaa4fd3624fc39ab5ed0955c6048a.cn-beijing.alicontainer.com'
    :'http://p2p-test.cf57eaa4fd3624fc39ab5ed0955c6048a.cn-beijing.alicontainer.com';

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000//请求时长
})
export default util
