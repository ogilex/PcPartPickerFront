<template>
  <div id="app">

    <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-brand to="/">PcPartPicker</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item to="/builds">Builds</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item to="/mybuilds">My Builds</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!token" to="/register">Register</b-nav-item>
            <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
            <b-nav-item v-else @click="logout()">Log Out</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view class="stranica" />
  </div>
</template>

<script>

  import { mapActions, mapState, mapMutations } from 'vuex';

  export default {
    name: 'App',

    data() {
      return {
        searchQuery: ''
      }
    },

    computed: {
      ...mapState([
        'token'
      ])
    },

    mounted() {
      
      if (localStorage.token) {
        this.setToken(localStorage.token);
        var base64Url = localStorage.token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        var data = JSON.parse(jsonPayload);
        localStorage.setItem('userID', data["userID"]);
      }
    },

    methods: {
      ...mapMutations([
        'removeToken',
        'setToken'
      ]),
      logout() {
        this.removeToken();
        localStorage.removeItem('userID');
      }
    },

    sockets: {
      error(err) {
        alert(err);
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 10px;
  }

  .stranica {
    width: 80%;
    margin-left: 10%;
  }
</style>
