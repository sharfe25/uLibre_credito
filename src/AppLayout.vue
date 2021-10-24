<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
export default {
  name: 'AppLayout',
  components: {
    AppBar,Footer  
  },
  data: () => ({
    //
  }),
};
</script>
