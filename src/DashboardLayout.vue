<template>
  <v-app>
    <NavBar/>
    <v-main class="dashbboard">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/dashboard/NavBar'

export default {
  name: 'DashboardLayout',
  components: {
      NavBar
  },
  data: () => ({
    //
  }),
};
</script>
<style scoped>
    .dashbboard {
        margin: 2.5rem;
    }
</style>