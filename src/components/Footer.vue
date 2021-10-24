<template>
    <v-footer
        color="primary"

        tile
    >
        <v-row
        justify="center"
        no-gutters
        >
        <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
        >
            {{ link }}
        </v-btn>
        <v-col
            class="py-4 text-center white--text"
            cols="12"
        >
            Copyright © 2020 Unilibre. Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.
        </v-col>
        </v-row>
    </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Inicio',
        'Iniciar Sesion',
        'Registro',
      ],
    }),
    computed: {
    },
  }
</script>