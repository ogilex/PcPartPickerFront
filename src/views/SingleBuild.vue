<template>
    <div id="app">
      <Header :subtitle=" builds.name"/>
      <h5>Created by: {{ users.name }}</h5>
      <div class="container">
        <div class = 'accordion' role = 'tabilist'>
          <b-card no-body class="mb=1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info">Graphics Card</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Brand: {{ videoCards.brand }}</b-card-text>
                <b-card-text>Name: {{ videoCards.name }}</b-card-text>
                <b-card-text>Chipset: {{ videoCards.chipset }}</b-card-text>
                <b-card-text>Memory: {{ videoCards.memory }}GB</b-card-text>
                <b-card-text>Core Clock: {{ videoCards.core_clock }}Mhz</b-card-text>
                <b-card-text>Boost Clock: {{ videoCards.boost_clock }}Mhz</b-card-text>
                <b-card-text>Voltage: {{ videoCards.voltage }}</b-card-text>
                <b-card-text>Price: {{ videoCards.price }}$</b-card-text>
              </b-card-body>
            </b-collapse>                        
          </b-card>

          <b-card no-body class="mb=1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="info">Case</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Brand: {{ cases.brand }}</b-card-text>
                <b-card-text>Name: {{ cases.name }}</b-card-text>
                <b-card-text>Color: {{ cases.color }}</b-card-text>
                <b-card-text>Case type: {{ cases.case_type }}</b-card-text>
                <b-card-text>Price: {{ cases.price }}$</b-card-text>
              </b-card-body>
            </b-collapse>                        
          </b-card>

          <b-card no-body class="mb=1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="info">Ram</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Brand: {{ rams.brand }}</b-card-text>
                <b-card-text>Name: {{ rams.name }}</b-card-text>
                <b-card-text>Speed: {{ rams.speed }}</b-card-text>
                <b-card-text>Size: {{ rams.size }}GB</b-card-text>
                <b-card-text>Cas latency: {{ rams.cas_latency }}</b-card-text>
                <b-card-text>Price: {{ rams.price }}$</b-card-text>
              </b-card-body>
            </b-collapse>                        
          </b-card>

          <b-card no-body class="mb=1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-4 variant="info">Processor</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Brand: {{ cpus.brand }}</b-card-text>
                <b-card-text>Name: {{ cpus.name }}</b-card-text>
                <b-card-text>Number of cores: {{ cpus.core_count }}</b-card-text>
                <b-card-text>Core clock: {{ cpus.core_clock }}Ghz</b-card-text>
                <b-card-text>Number of Threads: {{ cpus.threads }}</b-card-text>
                <b-card-text>Voltage: {{ cpus.tdp }}</b-card-text>
                <b-card-text>Integrated graphics: {{ cpus.integrated_graphics }}</b-card-text>
                <b-card-text>Price: {{ cpus.price }}$</b-card-text>
              </b-card-body>
            </b-collapse>                        
          </b-card>

          <b-card no-body class="mb=1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-5 variant="info">Motherboard</b-button>
            </b-card-header>
            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Brand: {{ boards.brand }}</b-card-text>
                <b-card-text>Name: {{ boards.name }}</b-card-text>
                <b-card-text>Socket type: {{ boards.socket }}</b-card-text>
                <b-card-text>Maximum memory: {{ boards.memory_max }}GB</b-card-text>
                <b-card-text>Number of memory slots: {{ boards.memory_slots }}</b-card-text>
                <b-card-text>Price: {{ boards.price }}$</b-card-text>
              </b-card-body>
            </b-collapse>                        
          </b-card>

          <b-card no-body class="mb=1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-6 variant="info">Cooler</b-button>
            </b-card-header>
            <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Brand: {{ coolers.brand }}</b-card-text>
                <b-card-text>Name: {{ coolers.name }}</b-card-text>
                <b-card-text>Fan RPM: {{ coolers.fan_rpm }}</b-card-text>
                <b-card-text>Noise level: {{ coolers.noise_level }}db</b-card-text>
                <b-card-text>Voltage: {{ coolers.voltage }}</b-card-text>
                <b-card-text>Radiator size: {{ coolers.radiator_size }}mm</b-card-text>
                <b-card-text>Price: {{ coolers.price }}$</b-card-text>
              </b-card-body>
            </b-collapse>                        
          </b-card>

          <b-card no-body class="mb=1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-7 variant="info">Storage</b-button>
            </b-card-header>
            <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Brand: {{ storages.brand }}</b-card-text>
                <b-card-text>Name: {{ storages.name }}</b-card-text>
                <b-card-text>Capacity: {{ storages.capacity }}</b-card-text>
                <b-card-text>Storage type: {{ storages.storage_type }}</b-card-text>
                <b-card-text>Writing speed: {{ storages.writing_speed }}MB/s</b-card-text>
                <b-card-text>Reading speed: {{ storages.reading_speed }}MB/s</b-card-text>
                <b-card-text>Price: {{ storages.price }}$</b-card-text>
              </b-card-body>
            </b-collapse>                        
          </b-card>

          <b-card no-body class="mb=1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-7 variant="info">Power Supply</b-button>
            </b-card-header>
            <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Brand: {{ psus.brand }}</b-card-text>
                <b-card-text>Name: {{ psus.name }}</b-card-text>
                <b-card-text>Form Factor: {{ psus.form_factor }}</b-card-text>
                <b-card-text>Voltage: {{ psus.voltage }}</b-card-text>
                <b-card-text>Price: {{ psus.price }}$</b-card-text>
              </b-card-body>
            </b-collapse>                        
          </b-card>

        </div>

      </div>
    </div>
  </template>

<script>

import Header from '@/components/Header.vue';
import BuildItem from '@/components/BuildItem.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'SingleBuild',
  components: {
    Header,
    BuildItem
  },

  props: {

  },

  computed: {
        ...mapState([
            'builds',
            'videoCards',
            'cases',
            'rams',
            'boards',
            'psus',
            'cpus',
            'storages',
            'coolers',
            'users'
        ])
    },

  created(){
    this.fetchSingleBuildById(this.$route.params.id);
    //this.fetchVideoCardById(this.builds.videoCardID);
    this.fetchVideoCardById(localStorage.getItem('videoCardID'));
    this.fetchCaseById(localStorage.getItem('pcCaseID'));
    this.fetchRamById(localStorage.getItem('memoryID'));
    this.fetchCpuById(localStorage.getItem('processorID'));
    this.fetchCoolerById(localStorage.getItem('processorCoolerID'));
    this.fetchPsuById(localStorage.getItem('powerSupplyID'));
    this.fetchBoardById(localStorage.getItem('motherboardID'));
    this.fetchUserById(localStorage.getItem('userCreatedID'));
    this.fetchStorageById(localStorage.getItem('storageID'));   
    console.log(this.builds);

  },

  mounted(){
    console.log(this.builds);
  },

  methods: {
    ...mapActions([
        'fetchSingleBuildById',
        'fetchVideoCardById',
        'fetchCaseById',
        'fetchRamById',
        'fetchBoardById',
        'fetchPsuById',
        'fetchCpuById',
        'fetchStorageById',
        'fetchCoolerById',
        'fetchUserById'
      ]),


      
    
  }
}
</script>