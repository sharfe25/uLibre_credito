<template>
    <v-dialog
        max-width="600px"
        v-model="dialog"
    >
        <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="secondary"
        @click="dialog = true"
        text
        v-bind="attrs"
        v-on="on"
        class="text-capitalize text-subtitle-1 font-weight-medium pa-0"
        >
            haz click aquí
        </v-btn>
        </template>
        <v-toolbar
            dark
            color="secondary"
            class="text-capitalize text-subtitle-1 font-weight-medium pa-0"
        >
            <v-btn
            icon
            dark
            @click="cancel"
            >
            <v-icon>fas fa-times</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card class="pa-3" outlined>
        <h3 class="d-flex justify-center text-center">
            Reset your password
        </h3>
        <v-card-text>
            <v-container>
                <v-alert
                dense
                type="info"
                v-model="success"
                >
                    Your password has been updated.
                </v-alert>
                <v-form
                    ref="upd_pwd_form"
                    lazy-validation
                    v-if="!success"
                >
                    <v-text-field   
                        v-model="email"
                        label="Email"
                        :rules="email_rules"
                        required
                    ></v-text-field>
                    
                </v-form>
            </v-container>
            <v-alert
            dense
            type="error"
            v-model="error"
            class="mt-2"
            >
            {{error_message}}
            </v-alert>
            
        </v-card-text>
        <v-card-actions v-if="!success">
            <v-spacer></v-spacer>
            <v-btn
            color="secondary"
            @click="send"
            text
            >
            Enviar
            </v-btn>
            <v-btn
            color="primary"
            @click="cancel"
            text
            >
            Cancelar
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'ResetPassword',
    data: () => ({
        required_rules: [
            v => !!v || "This field is required",
        ],
        success: false,
        error: false,
        email:'',
        confirm_password:'',
        dialog: false,
        error_message:'',
        current_show:'',
        show: false,
        show_confirm:false,
        error: false,
        error_message:'',
    }),
    methods: {
      ...mapActions(['upd_credential']),
      async send() {
        if (this.$refs['upd_pwd_form'].validate()) {
            try {
                let res= await this.upd_credential({email:window.$cookies.get('user'), upd_mode:'password', upd_value:this.password});
                if (res.status.code!='0') {
                    this.error_message=res.user.message;
                    this.error=true;
                }
                if (res.status.code=='0') {
                    this.error=false;
                    this.$refs['upd_pwd_form'].reset()
                    this.success = true;
                }
            } catch (error) {
                console.log(error)
            }
        }else{
            this.error=true;
            this.error_message='Complete the form to update your password'
        }
      },
      cancel(){
        this.dialog = false;
        this.error = false;
        this.success = false;
        this.$refs['upd_pwd_form'].reset()
      }
      
    },
    computed: {
      rules_password () {
        const rules = []
        if (this.password.new_password) {
          const no_match =
            v => (!!v && v) === this.password.new_password ||'Values do not match'

          rules.push(no_match)
        }
        const required= v => !!v || "This field is required"
        rules.push(required)
        return rules
      },
    },
}
</script>

<style>

</style>