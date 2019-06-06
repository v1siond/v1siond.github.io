import { MutationTree } from 'vuex'
import { AppState } from './types'

const mutations: MutationTree<AppState> = {
  setLogin (state, value: boolean) {
    state.loggedIn = value
  },
  setTitle (state, value: string) {
    state.title = value
  },
  setBack (state, value: boolean) {
    state.back = value
  }
}

export default mutations
