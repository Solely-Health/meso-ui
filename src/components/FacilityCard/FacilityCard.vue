<template>
    <container>
        <layout align-center justify-center>
            <!-- <row> -->
                <v-card class="ma-5">
                    <v-img 
                        src="https://media.istockphoto.com/vectors/abstract-city-map-illustration-vector-id978532440?k=6&m=978532440&s=612x612&w=0&h=1cgxKx9pht03k-Jb5s-dFDGyfEASzYEc3Nt0jkZjoIc=" 
                        height="180px"
                    >
                    </v-img>
                    <v-card-title v-model="facility">West Hills Hospital</v-card-title>
                        <v-card-subtitle width="200" v-model="facilityInfo">
                            7300 Medical Center Dr, West Hills, CA 91307
                            (818) 888-888
                        </v-card-subtitle>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn outlined right> Contact </v-btn>
                    </v-card-actions>
                </v-card>


                <v-card class="ma-5">
                    <v-img 
                        src="https://media.istockphoto.com/vectors/abstract-city-map-illustration-vector-id978532440?k=6&m=978532440&s=612x612&w=0&h=1cgxKx9pht03k-Jb5s-dFDGyfEASzYEc3Nt0jkZjoIc=" 
                        height="180px"
                    >
                    </v-img>
                    <v-card-title>West Hills Hospital</v-card-title>
                        <v-card-subtitle width="200">
                            7300 Medical Center Dr, West Hills, CA 91307 
                            (818) 888-888
                        </v-card-subtitle>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn outlined right> Contact </v-btn>
                    </v-card-actions>
                </v-card>

            <!-- </row> -->
        </layout>
    </container>
</template>


