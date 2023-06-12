import actorApi from './apis/ActorApi'
import directorApi from './apis/DirectorApi'
import movieApi from './apis/MovieApi'
import cinemaApi from './apis/CinemaApi'
import adminApi from './apis/AdminApi'
import cinemaRoomApi from './apis/CinemaRoomApi'
import showingonPlanApi from './apis/ShowingonPlanApi'

/** 通过httpApi对象访问actorApi子模块 */
const httpApi = {
  actorApi,
  directorApi,
  movieApi,
  cinemaApi,
  adminApi,
  cinemaRoomApi,
  showingonPlanApi
}

export default httpApi