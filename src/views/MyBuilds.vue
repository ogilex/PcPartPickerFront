 <template>
    <div id="app">
      <Header subtitle="My Builds"/>

        <div class="containet">
          <div class="row">
            <div class="col col-lg-3 mb-5" v-for="build in builds">
              <div class = "card" style="width: 18rem;">
                <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{build.name}}</h5>
                  <a :href="'/build/' + build.id" class="btn btn-primary">More details</a>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  </template> 

  <script>

  import Header from '@/components/Header.vue';
  import { mapActions, mapState, mapMutations } from 'vuex';

  export default {
    name: 'Builds',
    
    components: {
      Header
    },

    computed: {
        ...mapState([
            'builds'
        ])
    },

    mounted(){
        this.fetchBuildsbyID();
    },

    methods: {
      ...mapActions([
        'fetchBuildsbyID'
      ]),
      getBuildsbyUserIDasd(){

    }
      }
    
  }
</script>  