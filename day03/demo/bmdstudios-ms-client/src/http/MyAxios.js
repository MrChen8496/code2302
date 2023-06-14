import axios from 'axios'
import qs from 'qs'
import { Notification } from 'element-ui';

let instance = axios.create()  // 创建axios实例


// 针对instance处理统一的业务异常   基于响应拦截器
instance.interceptors.response.use((response)=>{
  // 统一异常处理 400业务状态码
  if(response.data.code==400){
    let errmsg = response.data.msg.details[0].message
    console.warn('请求参数有误，请检查:', errmsg)
    Notification.error({
      title:'注意', 
      message:'系统开小差了，等会试试吧！'
    })
  }
  return response;
})


const myaxios = {
  /**
   * 发送get请求
   * @param {string} url 请求资源路径
   * @param {object} params  请求参数对象
   */
  get(url, params){
    return instance({ url, method:'GET', params })
  },

  /**
   * 发送post请求
   * @param {string} url  请求资源路径
   * @param {object} params  请求参数对象 {k:v, k2:v2}
   * @returns Promise
   */
  post(url, params){
    return instance({
      url,
      method: 'POST',
      data: qs.stringify(params)
    })
  }
}

export default myaxios