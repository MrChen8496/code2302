import myaxios from "../MyAxios"
import BASE from '@/http/BaseUrl'
const BMDURL = BASE.BMDURL

const movieApi = {
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