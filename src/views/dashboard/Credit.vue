<template>
    <v-card class="fill-height pa-4">
        <v-card-title class="d-flex justify-center">
            Roles
        </v-card-title>
        <v-text-field
            label="Buscar Usuario"
            append-icon="fa-search"
            v-model="search"
            single-line
            hide-details
            class="mb-3"
        ></v-text-field>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
        >
            <template v-slot:[`item.documents`]>
               <ViewCredit/>
            </template>
            <template v-slot:[`item.status`]>
               <v-switch></v-switch>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import ViewCredit from '@/components/dashboard/ViewCredit'
export default {
    name: 'Credit',
    data: () => ({
        headers: [
            {
                text: 'Nombre',
                value: 'name',
                align: 'center'
            },
            {
                text: 'Semestre',
                value: 'semester',
                align: 'center'
            },
            {
                text: 'Programa',
                value: 'program',
                align: 'center'
            },
            {
                text: 'Año',
                value: 'year',
                align: 'center'
            },
            {
                text: 'Crédito Actual',
                value: 'actualCredit',
                align: 'center'
            },
            {
                text: 'Documentos',
                value: 'documents',
                align: 'center'
            },
            {
                text: 'Estado',
                value: 'status',
                align: 'center'
            },
        ],
        items: [
            {
                name: 'Laura Serra',
                semester: '6',
                program: 'Sistemas',
                year: '2021-2',
                actualCredit: 'No',
            },
            {
                name: 'Juana Piñeros',
                semester: '6',
                program: 'Sistemas',
                year: '2021-2',
                actualCredit: 'No',
            },
            {
                name: 'Valeria Ramos',
                semester: '6',
                program: 'Sistemas',
                year: '2021-2',
                actualCredit: 'No',
            },
            {
                name: 'Johan Ramírez',
                semester: '6',
                program: 'Sistemas',
                year: '2021-2',
                actualCredit: 'No',
            },
        ],
        search: '',
    }),
    methods: {
        getUser() {
            if(localStorage.getItem("role") != 2) {
                this.$router.push("HomeDashboard")
            }
        }
    },
    components: {
        ViewCredit
    },
    created() {
        this.getUser()
    },

}
</script>

<style>

</style>