<template>
    <v-dialog
      v-model="dialog"
      width="600"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn class="black" icon>
                <v-icon small color="error" v-bind="attrs" v-on="on">
                    fa-file
                </v-icon>
            </v-btn>
        </template>
        <v-card class="pa-4">
            <v-card-title>
                Documentos
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="items"
                hide-default-footer
            >
                <template v-slot:[`item.status`]>
                    <v-switch></v-switch>
                </template>
                <template v-slot:[`item.download`]>
                    <v-icon>
                        fa-download
                    </v-icon>
                </template>
            </v-data-table>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'ViewCredit',
    data: () => ({
        headers: [
            {
                text: 'Nombre',
                value: 'name',
                align: 'center'
            },
            {
                text: 'Estado',
                value: 'status',
                align: 'center'
            },
            {
                text: 'Descargar',
                value: 'download',
                align: 'center'
            },
        ],
        items: [
            {
                name: 'Formulario de crédito',
            },
            {
                name: 'Pagaré',
            }
        ]
    })
}
</script>

<style>

</style>