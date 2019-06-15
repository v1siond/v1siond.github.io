import { GetterTree } from 'vuex'
import { AppState, RootState } from './types'

const getters: GetterTree<AppState, RootState> = {
  getLogin (state): boolean {
    const { loggedIn } = state
    return loggedIn
  },
  getTitle (state): string {
    const { title } = state
    return title
  },
  getBack (state): boolean {
    const { back } = state
    return back
  },
  getLevelNumber (state): string {
    const { levelNumber } = state
    return levelNumber
  },
  getLevelName (state): string {
    const { levelName } = state
    return levelName
  },
  getTime (state): number {
    const { time } = state
    return time
  }
}

export default getters
