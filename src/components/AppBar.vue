<template>
    <div>
        <v-app-bar
            color="black"
            width="100%"
        >
            <div style="width:100%" class="d-flex">
                <v-btn text class="nav-item" href="/" color="black">
                    <v-toolbar-title>
                        <v-card-text class="text-center white--text">
                            <v-img
                                src="@/assets/image/logov.png"
                                width="150px"
                                height="100%"
                            >    
                            </v-img>
                        </v-card-text>
                    </v-toolbar-title> 
                </v-btn> 
                <v-spacer></v-spacer>
                <v-app-bar-nav-icon v-if="height" color="white" class="d-block d-md-none d-lg-none d-sm-block" @click="drawer = true"></v-app-bar-nav-icon>
                <div class="nav-item my-0" v-if="!height">
                    <v-btn text v-for="(item, i) in links" :key="i" @click="goTo(item)">
                        <v-toolbar-title>
                            <v-card-text class="text-center white--text text-capitalize">
                                {{ item }}
                            </v-card-text>
                        </v-toolbar-title> 
                    </v-btn>
                </div> 
            </div>     
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            color="primary"
        >
            <v-list
                nav
                dense
            >
                <v-btn text class="nav-item mb-6 mt-2" href="/" color="black">
                    <v-toolbar-title>
                        <v-card-text class="text-center white--text">
                            <v-img
                                src="@/assets/image/logov.png"
                                width="150px"
                                height="100%"
                            >    
                            </v-img>
                        </v-card-text>
                    </v-toolbar-title> 
                </v-btn> 
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                <v-list-item v-for="(item, i) in links" :key="i" @click="goTo(item)">
                    <v-list-item-title class="white--text">
                        {{item}}
                    </v-list-item-title>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
    
</template>

<script>

export default {
    name: 'AppBar',
    data: () => ({
        drawer: false,
        links: [
            'Inicio',
            'Iniciar Sesion',
            'Registro',
        ],
        group: null,
        userLogin: false,
        fullName: ''
    }),
    methods: {
        goTo(i) {
            if(i == 'Inicio') {
                this.$router.push('/Inicio')
            }else if(i == 'Iniciar Sesion') {
                this.$router.push('/Login')
            }else if(i == 'Registro') {
                this.$router.push('/Register')
            }
        },
    },
    computed: {
        height () {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return true
            case 'sm': return true
            case 'md': return false
            case 'lg': return false
            case 'xl': return false
            }
        },
    },
    created() {
        
    }
}
</script>

<style>
.v-toolbar__content {
    width: 100%;
}
.location {
    font-size: 14px;
}
@media only screen and (max-width: 1131px) {
    .login {
        display: none;
    }
}
.fixed-bar {
  position: fixed;
  width: 100%; 
  z-index: 2000;
}
</style>