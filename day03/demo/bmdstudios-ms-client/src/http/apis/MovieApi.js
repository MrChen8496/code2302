import myaxios from "../MyAxios"
import BASE from '@/http/BaseUrl'
const BMDURL = BASE.BMDURL

const movieApi = {

  /** 修改电影业务 */ 
  update(params){
    let url = BMDURL + "/movie-info/update"
    return myaxios.post(url, params)
  },

  /**
   * 通过ID查询电影详情
   * @param {Object} params 
   */
  queryById(params){
    let url = BMDURL + "/movie-info/query"
    return myaxios.get(url, params)
  },

  /**
   * 新增电影
   * @param {Object} params 
   */
  save(params){
    let url = BMDURL + "/movie-info/add"
    return myaxios.post(url, params)
  },

  /** 查询所有电影类型 */
  queryTypes(){
    let url = BMDURL + "/movie-types"
    return myaxios.get(url)
  },

  /**
   * 删除电影
   * @param {Object} params  {id:1}
   */
  delete(params){
    let url = BMDURL + "/movie-info/del"
    return myaxios.post(url, params)
  },

  /**
   * 查询电影列表
   * @param {object} params {page:1, pagesize:3}
   */
  queryMovies(params){
    let url = BMDURL + "/movie-infos"
    return myaxios.get(url, params)
  },

  /**
   * 模糊查询电影列表
   * @param {object} params {page:1, pagesize:3, name:关键字}
   */
  queryMoviesByName(params){
    let url = BMDURL + "/movie-infos/name"
    return myaxios.post(url, params)
  }
}

export default movieApi