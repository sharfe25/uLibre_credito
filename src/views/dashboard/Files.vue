<template>
  <div>
    <v-card>
        <div class="d-flex justify-center align-center flex-column">
            <v-card-title class="text-h4 font-weight-medium">Mis Archivos y Estados</v-card-title>
            <v-card-text class="d-flex justify-center align-center flex-row">
                Estado actual del credito:
                <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                >
                Aprobado
                </v-chip>
            </v-card-text>
        </div>
        <v-data-table
        dense
        :headers="headers"
        :items="docs"
        item-key="name"
        class="elevation-1 mx-16"
        >
            <template v-slot:[`item.download`]>
                <v-btn icon>
                    <v-icon>fas fa-download</v-icon>
                </v-btn>
            </template>
            <template v-slot:[`item.delivered`]="{ item }">
                <v-checkbox
                class="ml-16"
                v-model="item.delivered"
                color="red"
                ></v-checkbox>
            </template>
        </v-data-table>
    </v-card>
  </div>
</template>

<script>
 

  export default {
    name: 'HomeDashboard',

    components: {
     
    },
    data: () => ({
        headers:[
            { text: 'Descargar', value:'download', align: 'center' },
            { text: 'Nombre', value:'name', align: 'center' },
            { text: 'Programa', value:'program', align: 'center' },
            { text: 'Entregado',  value:'delivered', align: 'center' },
        ],
        docs:[
            { 
                name:'doc 1',
                program:'program 1',
                delivered:true
            },
            { 
                name:'doc 2',
                program:'program 2',
                delivered:true
            }
        ]
    }),
    methods: {
        getUser() {
            if(localStorage.getItem("role") != 3) {
                this.$router.push("HomeDashboard")
            }
        }
    },
    created() {
        this.getUser()
    },
  }
</script>
