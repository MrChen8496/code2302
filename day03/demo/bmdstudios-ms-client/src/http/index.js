import actorApi from './apis/ActorApi'
import directorApi from './apis/DirectorApi'

/** 通过httpApi对象访问actorApi子模块 */
const httpApi = {
  actorApi,
  directorApi,
}

export default httpApi