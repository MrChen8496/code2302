// utils/Storage.js
// 在该文件中，管理数据的存储与加载  （使用SessionStorage）
const storage = {
  // 定义一些常见的KEY，后续如果需要保存与加载时可以直接使用
  KEY_USER: 'user',  
  KEY_TOKEN: 'token',
  KEY_CITY: 'city',

  /** 保存[key, value]到sessionStorage */
  set(key, value){
    sessionStorage.setItem(key, JSON.stringify(value))
  },

  /** 通过key获取对应的value */
  get(key){
    let str = sessionStorage.getItem(key)
    if(str){
      return JSON.parse(str)
    }
    return null
  },

  remove(key){
    sessionStorage.removeItem(key)
  }
}

export default storage;