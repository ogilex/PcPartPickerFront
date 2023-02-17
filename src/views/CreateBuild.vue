<template>

    <div id ="app">
        <div class="container">
                
            
                <div class="selected-comp-all">
                    <b-form-select v-model="selectedCard">
                        <option :value="null" disabled>-- Select a graphics card --</option>
                        <option v-for="card in videoCards" :value="card">
                        {{ card.name }}
                        </option>
                    </b-form-select>
                    <div class="selected-comp" v-if="selectedCard.name !== null">
                        <div class="mt-3">Brand: <strong> {{ selectedCard.brand }}</strong></div>
                        <div class="mt-3">Name: <strong> {{ selectedCard.name }}</strong></div>
                        <div class="mt-3">Chipset: <strong> {{ selectedCard.chipset }}</strong></div>
                        <div class="mt-3">Memory: <strong> {{ selectedCard.memory }}</strong>GB</div>
                        <div class="mt-3">Core Clock: <strong> {{ selectedCard.core_clock }}</strong>Mhz</div>
                        <div class="mt-3">Boost Clock: <strong> {{ selectedCard.boost_clock }}</strong>Mhz</div>
                        <div class="mt-3">Voltage: <strong> {{ selectedCard.voltage }}</strong></div>
                        <div class="mt-3">Price: <strong> {{ selectedCard.price }}</strong>$</div>
                    </div>

                    <b-form-select v-model="selectedCpu">
                        <option :value="null" disabled>-- Select a CPU --</option>
                        <option v-for="cpu in cpus" :value="cpu">
                        {{ cpu.name }}
                        </option>
                    </b-form-select>
                    <div class="selected-comp" v-if="selectedCpu.name !== null">
                        <div class="mt-3">Brand: <strong> {{ selectedCpu.brand }}</strong></div>
                        <div class="mt-3">Name: <strong> {{ selectedCpu.name }}</strong></div>
                        <div class="mt-3">Number of cores: <strong> {{ selectedCpu.core_count }}</strong></div>
                        <div class="mt-3">Core Clock: <strong> {{ selectedCpu.core_clock }}</strong>Ghz</div>
                        <div class="mt-3">Number of Threads: <strong> {{ selectedCpu.threads }}</strong></div>
                        <div class="mt-3">Voltage: <strong> {{ selectedCpu.tdp }}</strong></div>
                        <div class="mt-3">Integrated Graphics: <strong> {{ selectedCpu.integrated_graphics }}</strong></div>
                        <div class="mt-3">Price: <strong> {{ selectedCpu.price }}</strong>$</div>
                    </div>

                    <b-form-select v-model="selectedBoard">
                        <option :value="null" disabled>-- Select a Motherboard --</option>
                        <option v-for="board in boards" :value="board">
                        {{ board.name }}
                        </option>
                    </b-form-select>
                    <div class="selected-comp" v-if="selectedBoard.name !== null">
                        <div class="mt-3">Brand: <strong> {{ selectedBoard.brand }}</strong></div>
                        <div class="mt-3">Name: <strong> {{ selectedBoard.name }}</strong></div>
                        <div class="mt-3">Socket: <strong> {{ selectedBoard.socket }}</strong></div>
                        <div class="mt-3">Maximum Memory: <strong> {{ selectedBoard.memory_max }}</strong></div>
                        <div class="mt-3">Number of Memory Slots: <strong> {{ selectedBoard.memory_slots }}</strong></div>
                        <div class="mt-3">Price: <strong> {{ selectedBoard.price }}</strong>$</div>
                    </div>

                    <b-form-select v-model="selectedCooler">
                        <option :value="null" disabled>-- Select a cooler --</option>
                        <option v-for="cooler in coolers" :value="cooler">
                        {{ cooler.name }}
                        </option>
                    </b-form-select>
                    <div class="selected-comp" v-if="selectedCooler.name !== null">
                        <div class="mt-3">Brand: <strong> {{ selectedCooler.brand }}</strong></div>
                        <div class="mt-3">Name: <strong> {{ selectedCooler.name }}</strong></div>
                        <div class="mt-3">Fan RPM: <strong> {{ selectedCooler.fan_rpm }}</strong>RPM</div>
                        <div class="mt-3">Noise level: <strong> {{ selectedCooler.noise_level }}</strong>db</div>
                        <div class="mt-3">Voltage: <strong> {{ selectedCooler.voltage }}</strong></div>
                        <div class="mt-3">Radiator Size: <strong> {{ selectedCooler.radiator_size }}</strong>mm</div>
                        <div class="mt-3">Price: <strong> {{ selectedCooler.price }}</strong>$</div>
                    </div>

                    <b-form-select v-model="selectedRam">
                        <option :value="null" disabled>-- Select Ram --</option>
                        <option v-for="ram in rams" :value="ram">
                        {{ ram.name }}
                        </option>
                    </b-form-select>
                    <div class="selected-comp" v-if="selectedRam.name !== null">
                        <div class="mt-3">Brand: <strong> {{ selectedRam.brand }}</strong></div>
                        <div class="mt-3">Name: <strong> {{ selectedRam.name }}</strong></div>
                        <div class="mt-3">Speed: <strong> {{ selectedRam.speed }}</strong>Mhz</div>
                        <div class="mt-3">Size: <strong> {{ selectedRam.size }}</strong>GB</div>
                        <div class="mt-3">Cas latency: <strong> {{ selectedRam.cas_latency }}</strong></div>
                        <div class="mt-3">Price: <strong> {{ selectedRam.price }}</strong>$</div>
                    </div>

                    <b-form-select v-model="selectedStorage">
                        <option :value="null" disabled>-- Select a Storage --</option>
                        <option v-for="storage in storages" :value="storage">
                        {{ storage.name }}
                        </option>
                    </b-form-select>
                    <div class="selected-comp" v-if="selectedStorage.name !== null">
                        <div class="mt-3">Brand: <strong> {{ selectedStorage.brand }}</strong></div>
                        <div class="mt-3">Name: <strong> {{ selectedStorage.name }}</strong></div>
                        <div class="mt-3">Capacity: <strong> {{ selectedStorage.capacity }}</strong>GB</div>
                        <div class="mt-3">Storage type: <strong> {{ selectedStorage.storage_type }}</strong></div>
                        <div class="mt-3">Writing speed: <strong> {{ selectedStorage.writing_speed }}</strong></div>
                        <div class="mt-3">Reading speed: <strong> {{ selectedStorage.reading_speed }}</strong></div>
                        <div class="mt-3">Price: <strong> {{ selectedStorage.price }}</strong>$</div>
                    </div>

                    <b-form-select v-model="selectedCase">
                        <option :value="null" disabled>-- Select a Case --</option>
                        <option v-for="pccase in cases" :value="pccase">
                        {{ pccase.name }}
                        </option>
                    </b-form-select>
                    <div class="selected-comp" v-if="selectedCase.name !== null">
                        <div class="mt-3">Brand: <strong> {{ selectedCase.brand }}</strong></div>
                        <div class="mt-3">Name: <strong> {{ selectedCase.name }}</strong></div>
                        <div class="mt-3">Color: <strong> {{ selectedCase.color }}</strong></div>
                        <div class="mt-3">Case type: <strong> {{ selectedCase.case_type }}</strong></div>
                        <div class="mt-3">Price: <strong> {{ selectedCase.price }}</strong>$</div>
                    </div>

                    <b-form-select v-model="selectedPsu">
                        <option :value="null" disabled>-- Select a Power Supply --</option>
                        <option v-for="psu in psus" :value="psu">
                        {{ psu.name }}
                        </option>
                    </b-form-select>
                    <div class="selected-comp" v-if="selectedPsu.name !== null">
                        <div class="mt-3">Brand: <strong> {{ selectedPsu.brand }}</strong></div>
                        <div class="mt-3">Name: <strong> {{ selectedPsu.name }}</strong></div>
                        <div class="mt-3">Form factor: <strong> {{ selectedPsu.form_factor }}</strong></div>
                        <div class="mt-3">Voltage: <strong> {{ selectedPsu.voltage }}</strong></div>
                        <div class="mt-3">Price: <strong> {{ selectedPsu.price }}</strong>$</div>
                    </div>

                    <input class="input-field" v-model="name" placeholder="Build name"/>
                    <b-button type="submit" variant="primary" @click="addBuild()">Add Build</b-button>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex';

  export default {

    computed: {
        ...mapState([
            'videoCards',
            'cases',
            'rams',
            'boards',
            'psus',
            'cpus',
            'storages',
            'coolers',
        ])
    },
    methods: {
      ...mapActions([
        'fetchCards',
        'fetchCases',
        'fetchRams',        
        'fetchBoards',        
        'fetchPsus',        
        'fetchCpus',        
        'fetchStorages',        
        'fetchCoolers',
        'addBuildtoDb'                

      ]),
      addBuild(){
        let buildData = 
        { name: this.name,
          videoCardID: this.selectedCard.id,
          storageID: this.selectedStorage.id,
          processorID: this.selectedCpu.id,
          processorCoolerID: this.selectedCooler.id,
          powerSupplyID: this.selectedPsu.id,
          pcCaseID: this.selectedCase.id,
          motherboardID: this.selectedBoard.id,
          memoryID: this.selectedRam.id  
        };
        this.addBuildtoDb(buildData);
        this.$router.push({ name: 'Builds' });
      }
    },
    created(){
        this.fetchCards();
        this.fetchCases();
        this.fetchRams();
        this.fetchBoards();
        this.fetchPsus();
        this.fetchCpus();
        this.fetchStorages();
        this.fetchCoolers();
    },
    data() {
      return {
        selected: null,
        name:'',
        selectedCard: {
            id: '',
            brand: '',
            name: '',
            chipset: '',
            memory: '',
            core_clock: '',
            boost_clock: '',
            voltage: '',
            price: ''
        },
        selectedCpu:{
            id:'',
            brand:'',
            name:'',
            core_count:'',
            core_clock:'',
            threads:'',
            tdp:'',
            integrated_graphics:'',
            price:''
        },
        selectedBoard:{
            id:'',
            brand:'',
            name:'',
            socket:'',
            memory_max:'',
            memory_slots:'',
            price:''
        },
        selectedCooler:{
            id:'',
            brand:'',
            name:'',
            fan_rpm:'',
            noise_level:'',
            voltage:'',
            radiator_size:'',
            price:''
        },
        selectedRam:{
            id:'',
            brand:'',
            name:'',
            speed:'',
            size:'',
            cas_latency:'',
            price:''
        },
        selectedStorage:{
            id:'',
            brand:'',
            name:'',
            capacity:'',
            storage_type:'',
            writing_speed:'',
            reading_speed:'',
            price:''
        },
        selectedCase:{
            id:'',
            brand:'',
            name:'',
            color:'',
            case_type:'',
            price:''
        },
        selectedPsu:{
            id:'',
            brand:'',
            name:'',
            form_factor:'',
            voltage:'',
            price:''
        }
    }
    }
  }

</script>

<style>

.input-field {
    margin-top: 10pt;
}

.selected-comp {
    margin-bottom: 20pt;

}

.selected-comp-all {
    margin-top: 20pt;

}
</style>