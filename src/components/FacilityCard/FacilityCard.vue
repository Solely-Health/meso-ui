<template>
    <v-container>
        <v-layout align-center justify-center>
            <v-card @click="facilityPage" class="ma-5">
                <v-img 
                    src="https://media.istockphoto.com/vectors/abstract-city-map-illustration-vector-id978532440?k=6&m=978532440&s=612x612&w=0&h=1cgxKx9pht03k-Jb5s-dFDGyfEASzYEc3Nt0jkZjoIc=" 
                    height="180px"
                >
                </v-img>
                <v-card-title v-model="facility">West Hills Hospital</v-card-title>
                    <v-card-subtitle width="200" v-model="facilityInfo">
                         7300 Medical Center Dr, West Hills, CA 91307
                        
                    </v-card-subtitle>
                    <v-card-subtitle v-model="facilityNum">
                        (919)123-1231
                    </v-card-subtitle>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn outlined right> Contact </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        data(){
            return {
                facility: '',
                facilityInfo: '',
                facilityNum: '',
            }
        },

        methods: {
            facilityPage: function() {
                //goes to facility page
            }
        }
        
    })
</script>