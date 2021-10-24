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
            <template v-slot:[`item.role`] = "{item}">
                <v-autocomplete
                    label="Rol"
                    v-model="item.role"
                    :items="roleItems"
                ></v-autocomplete>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    name: 'Roles',
    data: () => ({
        headers: [
            {
                text: 'Id',
                value: 'id',
                align: 'center'
            },
            {
                text: 'Nombre',
                value: 'nombre',
                align: 'center'
            },
            {
                text: 'Email',
                value: 'email',
                align: 'center'
            },
            {
                text: 'Rol',
                value: 'role',
                align: 'center'
            },
        ],
        items: [
            {
                id: 1,
                nombre: 'Keiddy García',
                email: 'keiddygarcia@gmail.com',
                role: 'Administrador'
            },
            {
                id: 2,
                nombre: 'Sharon Rueda',
                email: 'sharonrueda@gmail.com',
                role: 'Administrador'
            },
            {
                id: 3,
                nombre: 'Fernan Lambragño',
                email: 'fernanlambragno@gmail.com',
                role: 'Validador'
            },
            {
                id: 4,
                nombre: 'David Theran',
                email: 'davidtheran@gmail.com',
                role: 'Usuario'
            },
        ],
        roleItems: [
            'Administrador',
            'Usuario',
            'Validador'
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