<template>
    <v-img contain src="../assets/image/login.png" >
        <v-row no-gutters  align="center" justify="center" style="height:100%;">
            <v-col cols="10" lg="6">
                <v-card
                class="my-3 py-5 px-5 cardLogin"
                tile
                style="border-radius: 10px !important;"
                >
                    <div class="text-center text-h4 font-weight-medium">Registro</div>
                    <v-alert type="error" v-model="error" style="text-align: left" class="mt-2">
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
                            
                        <v-row
                            align="center"
                            justify="center"
                            class="lg-pa-10"
                            
                            >
                                <v-col
                                    class="text-center container ml-0 mr-0 py-0"
                                    cols="xs-8 col-sm-12 col-md-12 col-lg-6"
                                >
                                    <v-text-field
                                    v-model="user.password"
                                    :rules="required_rules"
                                    label="Password"
                                    required
                                    :type="show ? 'text' : 'password'"
                                    prepend-icon="fa fa-lock"
                                    @click:append="show = !show"
                                    :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    class="text-center container ml-0 mr-0 py-0"
                                    cols="xs-8 col-sm-12 col-md-12 col-lg-6"
                                >
                                    <v-text-field
                                    v-model="confirm_password"
                                    :rules="rules_password"
                                    label="Confirm password"
                                    required
                                    :type="show_confirm ? 'text' : 'password'"
                                    prepend-icon="fa fa-lock"
                                    @click:append="show_confirm = !show_confirm"
                                    :append-icon="show_confirm ? 'fas fa-eye' : 'fas fa-eye-slash'"
                                    ></v-text-field>
                                </v-col>
                                
                            </v-row>
                        <div class="pt-5">
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
                                Registrar
                            </v-btn>
                            
                        </div>
                        <div class="d-flex justify-center">
                            <v-btn color="secondary" class="text-capitalize text-subtitle-1 font-weight-medium pa-0" text>¿Ya tienes una cuenta?</v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-img>
</template>

<script>
 

  export default {
    name: 'Login',

    components: {
     
    },
    data: () => ({
        recordar:false,
        selectedItem: 1,
        show:false,
        user:{
            email:'',
            password:''
        },
        confirm_password:'',
        error_message:'',
        error:false,
        email_rules: [
            v => /.+@.+\..+/.test(v) || "El Email debe ser valido",
            v => !!v || "Este campo es requerido",
        ],
        required_rules: [
            v => !!v || "Este campo es requerido",
        ],
        show_confirm:false,
    }),
    methods: {
        login(){
            if (this.$refs['login_form'].validate()) {
               this.$router.push('Login');   
            }else{

                this.error=true;
                this.error_message='Debe completar el formulario para registrarse'
            }
        }
    },
    computed:{
        rules_password () {
        const rules = []
        if (this.user.password) {
          const no_match =
            v => (!!v && v) === this.user.password ||'Las contraseñas no coinciden'

          rules.push(no_match)
        }
        const required= v => !!v || "Este campo es requerido"
        rules.push(required)
        return rules
      },
    }
  }
</script>
<style>
.cardLogin{
    background-color: rgba(217, 182, 182, 0.746) !important;
}
</style>