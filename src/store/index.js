import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    builds: [],
    token: ''

  },

  mutations: {
    addBuilds(state, build) {
      state.builds.push(build);
    },

    setBuilds(state, builds){
      state.builds = builds;
    },

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    }
  },

  actions: {
    fetchBuilds({ commit }) {
      fetch('http://localhost:8080/admin/builds', {
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
      })
        .then( obj => obj.json() )
          .then( res => commit('addBuilds', res) );
    },

    fetchBuildsbyID({ commit }){
      fetch('http://localhost:8080/admin/builds/' + localStorage.getItem('userID') , {
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addBuilds', res) );
    },

    register({ commit }, obj) {
      fetch('http://localhost:9000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => commit('setToken', tkn.token) );
    },

    login({ commit }, obj) {
      fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
        }
      });
    },
  }
})
