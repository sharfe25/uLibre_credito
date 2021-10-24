<template>
    <nav>
        <v-app-bar color="black" app>
            <v-app-bar-nav-icon 
                @click.stop="drawer = 
                !drawer" 
                color="white" 
            >
            </v-app-bar-nav-icon>
            <v-toolbar-title class="white--text">
                UNILIBRE
            </v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer 
            color="primary"
            v-model="drawer"
            app
            width="200px"
            class="pt-6 menu"
        >
            <v-avatar size="120" class="mx-auto d-flex">
                <v-img contain src="../../assets/image/user.png" ></v-img>
            </v-avatar>
            <v-card-title class="justify-center white--text pb-0 mb-0">
                Admin
            </v-card-title>
            <v-list
                flat
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    class="blackText--text"
                    
                >
                    <v-list-item v-for="(item, i) in menu" :key="i" class="mt-5 pl-5" @click="goTo(item.id)"> 
                        <v-list-item-icon class="white--text">
                        <v-icon color="white">{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>


export default {
    name: 'NavBar',
    data: () => ({
        menu: [
            {
                id: 1,
                icon: 'fas fa-home',
                title: 'Inicio'
            },
            {
                id: 2,
                icon: 'fas fa-plus-circle',
                title: 'Nuevo Credito'
            },
            {
                id: 3,
                icon: 'fas fa-file-alt',
                title: 'Archivos'
            },
            {
                id: 4,
                icon: 'fa-sign-out-alt',
                title: 'Cerrar sesión'
            },
        ],
        drawer: true,
        group: null,
        names: '',
        surnames: '',
        role: '',
    }),
    methods: {
        goTo(i) {
            if(i == 1) {
                this.$router.push('/HomeDashboard')
            }else if(i === 2) {
                this.$router.push('/NewCredit')
            }else if(i === 3) {
                this.$router.push('/Files')
            }else if(i === 4) {
                this.$router.push('/')
            }
        },
    },
    created() {
    },
    mounted() {
        this.$router.push('/HomeDashboard')
    },
}
</script>

<style>
.menu::-webkit-scrollbar {
    -webkit-appearance: none;
}

.menu::-webkit-scrollbar:vertical {
    width:10px;
}

.menu::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
    display: none;
} 

.menu::-webkit-scrollbar:horizontal {
    height: 10px;
}

.menu::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
}

.menu::-webkit-scrollbar-track {
    border-radius: 10px;  
}
</style>