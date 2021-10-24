<template>
    <v-img contain src="../assets/image/login.png" >
        <v-row no-gutters  align="center" justify="center" style="height:100%;">
            <v-col cols="10" lg="6">
                <v-card
                class="my-3 py-5 px-5 cardLogin"
                tile
                style="border-radius: 10px !important;"
                >
                    <div class="text-center text-h4 font-weight-medium">Sistema de Credito</div>
                    <v-alert type="error" v-model="error" style="text-align: left">
                        {{error_message}}
                    </v-alert>
                    <v-form
                        ref="login_form"
                        lazy-validation
                        class="px-10"
                    >
                        <v-text-field
                        v-model="user.email"
                        label="Email"
                        :rules="email_rules"
                        required
                        ></v-text-field>
                            
                        <v-text-field
                        
                        v-model="user.password"
                        :rules="required_rules"
                        label="Contraseña"
                        required
                        :type="show ? 'text' : 'password'"
                        @click:append="show = !show"
                        :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
                        ></v-text-field>
                        <v-checkbox
                        v-model="recordar"
                        label="Recordar"
                        color="red"
                        hide-details
                        class="my-1"
                        ></v-checkbox>
                        <p class="sign_up">Olvidaste tu contraseña? <ResetPassword/></p>
                        <div class="pt-1">
                            <v-btn
                            color="primary"
                            class="mr-4"
                            large
                            width="100%"
                            min-height="50px"
                            @click="login"
                            :loading="loading"
                            dark
                            >
                                Acceder
                            </v-btn>
                            
                        </div>
                        <div class="d-flex justify-center">
                            <v-btn color="secondary" class="text-capitalize text-subtitle-1 font-weight-medium pa-0" text>¿Aun no tienes una cuenta?</v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-img>
</template>

<script>
import ResetPassword from '@/components/ResetPassword'

  export default {
    name: 'Login',

    components: {
        ResetPassword
    },
    data: () => ({
        recordar:false,
        selectedItem: 1,
        show:false,
        user:{
            email:'',
            password:''
        },
        error_message:'',
        error:false,
        email_rules: [
            v => /.+@.+\..+/.test(v) || "El Email debe ser valido",
            v => !!v || "Este campo es requerido",
        ],
        required_rules: [
            v => !!v || "Este campo es requerido",
        ],
        loading: false
    }),
    methods: {
        login(){
            if (this.$refs['login_form'].validate()) {
                if (this.user.email=='admin@gmail.com' && this.user.password=='PASSWORD') {
                    this.$router.push({
                        name:'HomeDashboard'
                    })
                    localStorage.setItem('role',1)
                }else if (this.user.email=='user@gmail.com' && this.user.password=='PASSWORD'){
                    this.$router.push({
                        name:'HomeDashboard'
                    })
                    localStorage.setItem('role',2)
                }else if (this.user.email=='revisador@gmail.com' && this.user.password=='PASSWORD'){
                    this.$router.push({
                        name:'HomeDashboard'
                    })
                    localStorage.setItem('role',3)
                }else{
                    this.error=true;
                    this.error_message='Usuario o contraseña incorrecta'
                }
                
            }else{
                this.error=true;
                this.error_message='Debe completar el formulario para acceder'
            }
        }
    }
  }
</script>
<style>
.cardLogin{
    background-color: rgba(217, 182, 182, 0.746) !important;
}
</style>