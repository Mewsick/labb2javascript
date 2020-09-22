<template>
    <div >
        <h1>
            Corona-statistik
        </h1>
        <select v-model="showGlobal">
            <option :value="true">Globalt</option>
            <option :value="false">Sverige</option>
        </select>
        <ul>

            <div v-if="showGlobal">
                <h2>Globalt</h2>
                <li> Antal Nya Fall: {{ apiData.Global.NewConfirmed }} </li>
                <li> Totalt Antal Fall: {{ apiData.Global.TotalConfirmed }} </li>
                <li> Antal Nya Döda: {{ apiData.Global.NewDeaths }} </li>
                <li> Totalt AntalDeaths: {{ apiData.Global.TotalDeaths }} </li>
                <li> Antal Nya Tillfrisknade: {{ apiData.Global.NewRecovered }} </li>
                <li> Totalt Antal Tillfrisknade: {{ apiData.Global.TotalRecovered }} </li>
            </div>
            
            <div v-if="!showGlobal">
                <h2>Sverige</h2>
                <li> Antal Nya Fall: {{ apiData.Countries[163].NewConfirmed }} </li>
                <li> Totalt Antal Smittade: {{ apiData.Countries[163].TotalConfirmed }} </li>
                <li> Antal Nya Döda: {{ apiData.Countries[163].NewDeaths }} </li>
                <li> Totalt Antal Döda: {{ apiData.Countries[163].TotalDeaths }} </li>
            </div>

        </ul>
        <br><button @click="getData">Uppdatera</button>
    </div>
</template>

<script>
export default {
    name: 'Presentation',
    data: () =>{
        return {
            apiData: null,
        }
    },
    computed: {
        showGlobal: {
            get() {
                return this.$store.state.showGlobal
            },
            set(newShowGlobal) {
                this.$store.commit('setNewShowGlobal', newShowGlobal)
            }
        }
    },
    methods: {
        getData(){
            fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(result => {
                this.apiData = result
            })    
        },
    },
    created()
    {
        this.getData()
    }
}
</script>