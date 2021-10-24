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
            <template v-slot:[`item.remove`]>
               <v-icon color="error">
                   fa-trash
               </v-icon>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    name: 'Users',
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
                text: 'Eliminar',
                value: 'remove',
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
            if(localStorage.getItem("role") != 1) {
                this.$router.push("HomeDashboard")
            }
        }
    },
    created() {
        this.getUser()
    },
}
</script>

<style>

</style>