import axios from 'axios'
const instance = axios.create()  // 创建axios实例
import qs from 'qs'
import { showLoadingToast, closeToast } from 'vant'
import 'vant/es/toast/style';

interface Response{
    code: number;
    msg: string;
    data?: any;
}

/** 设置请求拦截器，每次请求弹出等待框 */
instance.interceptors.request.use((config)=>{
    console.log('loading...')
    // 每次发请求，都会执行该请求拦截器
    showLoadingToast({
        duration:0,            // 持续时长设置为0，永不自动消失
        message: '加载中...',   // 弹窗文案
        forbidClick: true      // 是否禁用背景点击
    })
    return config;
})
/** 在响应拦截器中，关闭弹窗 */
instance.interceptors.response.use((config)=>{
    closeToast()
    return config;
})



const myaxios = {
    /** 用于发送get请求 
     *  url: 请求资源路径  
     *  params: 请求参数（Object形式）
     */
    get(url:string, params?:object):Promise<Response>{
        return instance({
            url, 
            method: 'get',
            params
        })
    },

    /**
     * 用于发送post请求
     * @param {String} url   请求资源路径
     * @param {Object} params   请求参数（对象类型）
     * @returns Promise<Response>
     */
    post(url:string, params?:object):Promise<Response>{
        return instance({
            url,
            method: 'post',
            data: qs.stringify(params)
        })
    }
}

export default myaxios