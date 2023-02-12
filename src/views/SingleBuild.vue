<template>
    <div id="app">
      <Header subtitle="All Builds"/>
        
     

    </div>
  </template>

<script>

import Header from '@/components/Header.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'SingleBuild',
  
  components: {
    Header
  },

  data() {
      return {
        name: '',
        userID: '',
        videoCardID: '',
        storageID: '',
        processorID: '',
        processorCoolerID: '',
        powerSupplyID: '',
        pcCaseID: '',
        motherboardID: '',
        memoryID: ''
      }
    },

  mounted(){
      this.fetchSingleBuildById();
      //this.fetchGraphicCardByID();
  },

  methods: {
     fetchSingleBuildById(){
        try{
             fetch('http://localhost:8080/admin/singlebuild/' +this.$route.params.id, {
                    method: 'GET',
                    headers: { 
                        'Authorization': 'Bearer '+  localStorage.getItem('token'),
                        'Content-Type': 'application/json',
                        'Accept': 'application/json' 
                    },
                })
                    .then( res => res.json() )
                    .then( data => {
                        this.name = data.name;
                        this.videoCardID = data.videoCardID;
                        console.log(this.name);
                    });

        }catch (err){
            this.getResult = err.message;
        }
    },
    fetchGraphicCardByID(){
        console.log(this.videoCardID + 'asd');
        fetch('http://localhost:8080/admin/cards/' +1, {
                    method: 'GET',
                    headers: { 
                        'Authorization': 'Bearer '+  localStorage.getItem('token'),
                        'Content-Type': 'application/json',
                        'Accept': 'application/json' 
                    },
                })
                    .then( res => res.json() )
                    .then( data => {
                        console.log(data.name);
                        
                    });
    }
  }
}
</script>