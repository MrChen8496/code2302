import myaxios from "./MyAxios"

const httpApi = {

  /** 查询首页演员列表 */
  queryActors(){
    let url = "http://localhost:3010/movie-actors"
    let params = {page:1, pagesize:100}
    return myaxios.get(url, params)
  }

}

export default httpApi