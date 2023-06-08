import actorApi from './apis/ActorApi'
import directorApi from './apis/DirectorApi'
import movieApi from './apis/MovieApi'

/** 通过httpApi对象访问actorApi子模块 */
const httpApi = {
  actorApi,
  directorApi,
  movieApi,
}

export default httpApi