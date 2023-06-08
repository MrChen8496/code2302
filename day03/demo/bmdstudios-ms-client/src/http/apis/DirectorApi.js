//  http/apis/DirectorApi.js
import myaxios from "../MyAxios"

const directorApi = {

  /**
   * 
   * @param {object} params  {id:1}
   */
  delete(params){
    let url = 'http://localhost:3010/movie-director/del'
    return myaxios.post(url, params)
  },

  /**
   * 新增导演
   * @param {object} params  {directorName:'', directorAvatar:''}
   */
  save(params){
    let url = 'http://localhost:3010/movie-director/add'
    return myaxios.post(url, params)
  },

  /**
   * 通过关键字模糊查询导演列表
   * @param {object} params  {name:'关键字'}
   */
  queryDirectorsByName(params){
    let url = "http://localhost:3010/movie-directors/name"
    return myaxios.post(url, params)
  },

  /** 查询首页导演列表 */
  queryDirectors(){
    let url = "http://localhost:3010/movie-directors"
    let params = {page:1, pagesize:100}
    return myaxios.get(url, params)
  }

}

export default directorApi