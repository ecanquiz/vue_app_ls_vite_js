import { createStore } from 'vuex'
import apiClient from '@/api-client'

const state = {
  loading: false,
  items: []
}

export default createStore({
  state: state,
  mutations: {
   loadingItems(state) {
      state.loading = true
      state.items = []
    },
    loadedItems(state, items) {
      state.items = items
      state.loading = false
    },
    selectItem(state, params) {
      const { id, selected } = params
      const item = state.items.find(o => o.id === id)
      if (item) {
        item.selected = selected
      }
    }
  },
  actions: {
    loadItems({ commit }) {
      commit('loadingItems')      
      setTimeout(() => {
        apiClient
          .items
          .fetchItems().then((data) => {
            commit('loadedItems', data)
          })        
      }, 1000)
    },
    selectItem({ commit }, params) {
      commit('selectItem', params)
    }
  },
  modules: {
  }
})
