//  http/apis/ActorApi.js
import myaxios from "../MyAxios"
import BASE from '@/http/BaseUrl'
const BMDURL = BASE.BMDURL

const actorApi = {

  /**
   * 
   * @param {object} params  {id:1}
   */
  delete(params){
    let url = 'http://localhost:3010/movie-actor/del'
    return myaxios.post(url, params)
  },

  /**
   * 新增演员
   * @param {object} params  {actorName:'', actorAvatar:''}
   */
  save(params){
    let url = 'http://localhost:3010/movie-actor/add'
    return myaxios.post(url, params)
  },

  /**
   * 通过关键字模糊查询演员列表
   * @param {object} params  {name:'关键字'}
   */
  queryActorsByName(params){
    let url = "http://localhost:3010/movie-actors/name"
    return myaxios.post(url, params)
  },

  /** 查询首页演员列表 */
  queryActors(){
    let url = BMDURL + "/movie-actors"
    let params = {page:1, pagesize:100}
    return myaxios.get(url, params)
  }

}

export default actorApi