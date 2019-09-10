import { set, toggle } from '@/utils/vuex'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: undefined,
  drawer: null
}

const types = {
  SET_TITLE: 'SET_TITLE'
}

const mutations = {
  [types.SET_TITLE]: (state, { title }) => {
    state.title = title
  },
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer')
}

const actions = {
  setTitle: ({ commit }, payload) => {
    commit(types.SET_TITLE, payload)
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
