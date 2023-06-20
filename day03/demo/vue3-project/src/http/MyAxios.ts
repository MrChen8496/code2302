import axios from 'axios'
import qs from 'qs'

let instance = axios.create()  // 创建axios实例

const myaxios = {
  /**
   * 发送get请求
   * @param {string} url 请求资源路径
   * @param {object} params  请求参数对象
   */
  get(url:string, params:object){
    return instance({ url, method:'GET', params })
  },

  /**
   * 发送post请求
   * @param {string} url  请求资源路径
   * @param {object} params  请求参数对象 {k:v, k2:v2}
   * @returns Promise
   */
  post(url:string, params:object){
    return instance({
      url,
      method: 'POST',
      data: qs.stringify(params)
    })
  }
}

export default myaxios