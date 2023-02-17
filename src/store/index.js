import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    builds: [],
    videoCards: [],
    cases: [],
    rams: [],
    boards: [],
    psus: [],
    cpus: [],
    coolers: [],
    storages: [],
    users: [],
    token: ''

  },

  mutations: {
    addBuilds(state, build) {
      //state.builds = [];
      //state.builds.push(build);
      state.builds = build;
    },

    addToBuilds(state, build){
      state.builds.push(build);
    },

    addVideoCards(state, videoCard){
      //state.videoCards.push(videoCard);
      state.videoCards = videoCard;
    },

    addCases(state, cases){
      //state.cases.push(cases);
      state.cases = cases;
    },

    addBoards(state, boards){
      //state.boards.push(boards);
      state.boards = boards;
    },

    addPsus(state, psus){
      //state.psus.push(psus);
      state.psus = psus;
    },

    addCpus(state, cpus){
      //state.cpus.push(cpus);
      state.cpus = cpus;
    },

    addCoolers(state, coolers){
      //state.coolers.push(coolers);
      state.coolers = coolers;
    },

    addRams(state, rams){
      //state.rams.push(rams);
      state.rams = rams;
    },

    addStorages(state, storages){
      //state.storages.push(storages);
      state.storages = storages;
    },

    addUsers(state, users){
      state.users = users
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

    getBuild({ commit, state }, id) {
      return new Promise( (resolve, reject) => {
        const build = state.builds.filter( build => build.id == id )[0];
        
        if (build) {
          resolve(build);
        } else {
          fetch('http://localhost:8080/admin/singlebuild/' + id , {
            headers: { 
              'Authorization': 'Bearer '+  localStorage.getItem('token'),
              'Content-Type': 'application/json',
              'Accept': 'application/json' }             
          })
            .then( obj => obj.json())
            .then( res => commit('addBuilds', res ));
        }
      });
    },

    addBuildtoDb( {commit}, data){
      fetch('http://localhost:8080/admin/builds/' , {
        method: 'POST',
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' },
        body: JSON.stringify(data) 
      })
        .then( obj => obj.json())
        .then( res => commit('addToBuilds', res));      
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

    fetchSingleBuildById({commit}, id){
      fetch('http://localhost:8080/admin/singlebuild/' + id , {
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => {
        localStorage.setItem('videoCardID', res.videoCardID);
        localStorage.setItem('userCreatedID', res.userID);
        localStorage.setItem('storageID', res.storageID);
        localStorage.setItem('processorID', res.processorID);
        localStorage.setItem('processorCoolerID', res.processorCoolerID);
        localStorage.setItem('powerSupplyID', res.powerSupplyID);
        localStorage.setItem('pcCaseID', res.pcCaseID);
        localStorage.setItem('motherboardID', res.motherboardID);
        localStorage.setItem('memoryID', res.memoryID);
        commit('addBuilds', res);
        
      });
    },

    fetchVideoCardById({commit}, id){
      fetch('http://localhost:8080/admin/cards/' + id , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addVideoCards', res) );
    },

    fetchCards({commit}){
      fetch('http://localhost:8080/admin/cards/' , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addVideoCards', res) );      
    },

    fetchCaseById({commit}, id){
      fetch('http://localhost:8080/admin/cases/' + id , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addCases', res) );
    },

    fetchCases({commit}){
      fetch('http://localhost:8080/admin/cases/' , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addCases', res) );      
    },
    
    fetchRamById({commit}, id){
      fetch('http://localhost:8080/admin/rams/' + id , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addRams', res) );
    },

    fetchRams({commit}){
      fetch('http://localhost:8080/admin/rams/' , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addRams', res) );      
    },

    fetchBoardById({commit}, id){
      fetch('http://localhost:8080/admin/boards/' + id , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addBoards', res) );
    },

    fetchBoards({commit}){
      fetch('http://localhost:8080/admin/boards/' , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addBoards', res) );      
    },

    fetchPsuById({commit}, id){
      fetch('http://localhost:8080/admin/psus/' + id , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addPsus', res) );
    },

    fetchPsus({commit}){
      fetch('http://localhost:8080/admin/psus/' , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addPsus', res) );      
    },

    fetchCpuById({commit}, id){
      fetch('http://localhost:8080/admin/cpus/' + id , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addCpus', res) );
    },

    fetchCpus({commit}){
      fetch('http://localhost:8080/admin/cpus/' , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addCpus', res) );      
    },

    fetchCoolerById({commit}, id){
      fetch('http://localhost:8080/admin/coolers/' + id , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addCoolers', res) );
    },

    fetchCoolers({commit}){
      fetch('http://localhost:8080/admin/coolers/' , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addCoolers', res) );      
    },

    fetchStorageById({commit}, id){
      fetch('http://localhost:8080/admin/storages/' + id , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addStorages', res) );
    },

    fetchStorages({commit}){
      fetch('http://localhost:8080/admin/storages/' , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addStorages', res) );      
    },

    fetchUserById({commit}, id){
      fetch('http://localhost:8080/admin/users/' + id , {
        headers: { 
        'Authorization': 'Bearer '+  localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json' } 
      })
      .then( obj => obj.json() )
      .then( res => commit('addUsers', res) );
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
