<template>
    <v-container>
        <v-layout align-center justify-center>
            <v-card class="ma-5">
                <v-img 
                    src="https://staticmapmaker.com/img/google@2x.png" 
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
        data() {
            return {
                facility: '',
                facilityInfo: '',
                facilityNum: '',
            };
        },
        methods: {
            facilityPage() {
                // goes to facility page
            },
        },
    });
</script>