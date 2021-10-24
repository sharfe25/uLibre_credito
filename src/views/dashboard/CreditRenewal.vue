<template>
  <div>
    <v-row no-gutters  align="center" justify="center">
      <v-col cols="11">
        <v-card
        class="my-3 py-5 px-5 cardLogin"
        tile
        style="border-radius: 10px !important;"
        >
            <div class="text-center text-h4 font-weight-medium mb-5">Renovación de Credito</div>
            <v-alert type="error" v-model="error" style="text-align: left">
                {{error_message}}
            </v-alert>
            <v-form
                ref="credit_form"
                lazy-validation
                class="px-10"
            >
                <p class="text-subtitle-2 mb-0">Información del credito: </p>
                <v-divider color="black"></v-divider>
                <v-autocomplete
                class="mt-5"
                v-model="credit.program"
                :items="programs"
                :rules="required_rules"
                dense
                filled
                label="Programas"
                ></v-autocomplete>
                <v-row no-gutters  align="center" justify="space-between">
                    <v-col cols="12" md="6">
                        <v-autocomplete
                        class="mr-md-1"
                        v-model="credit.year"
                        :items="years"
                        :rules="required_rules"
                        dense
                        filled
                        label="Año"
                        @change="settingValue"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-autocomplete
                        class="ml-md-1"
                        v-model="credit.period"
                        :items="period"
                        :rules="required_rules"
                        dense
                        filled
                        @change="settingValue"
                        label="Periodo"
                        ></v-autocomplete>
                    </v-col>
                </v-row>  

                <v-text-field
                v-model="credit.value"
                label="Valor"
                :rules="required_rules"
                prefix="$"
                disabled
                ></v-text-field>

                <v-autocomplete
                v-model="credit.quota"
                :items="quota"
                :rules="required_rules"
                dense
                filled
                @change="changeQuotas"
                label="Cuotas"
                ></v-autocomplete>

                <v-text-field
                v-model="credit.initialFee"
                label="Cuota inicial"
                prefix="$"
                disabled
                ></v-text-field>

                <v-text-field
                v-model="credit.deadline"
                :rules="required_rules"
                label="Fecha limite cuota inicial"
                disabled
                ></v-text-field>

                <div class="pt-1">
                    <v-btn
                    color="primary"
                    class="mr-4"
                    large
                    width="100%"
                    min-height="50px"
                    @click="newCredit"
                    :loading="loading"
                    dark
                    >
                        Guardar
                    </v-btn>
                </div>
            </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
 

  export default {
    name: 'CreditRenewal',

    components: {
     
    },
    data: () => ({
        recordar:false,
        selectedItem: 1,
        show:false,
        modal:false,
        dialog:false,
        credit:{
            year:'',
            program:'',
            period:'',
            value:0,
            quota:0,
            dateQuota:'',
            name:'',
            id:'',
            address:'',
            phone:'',
            initialFee:0,
            deadline:''
        },
        quota:[1,2,3],
        error_message:'',
        error:false,
        programs:['Medicina','Ingenieria de Sistemas','Ingenieria Industrial'],
        years:['2021','2020','2019','2018','2017'],
        period:['I','II'],
        email_rules: [
            v => /.+@.+\..+/.test(v) || "El Email debe ser valido",
            v => !!v || "Este campo es requerido",
        ],
        required_rules: [
            v => !!v || "Este campo es requerido",
        ],
    }),
    methods: {
        newCredit(){
            if (this.$refs['credit_form'].validate()) {
                this.dialog=true
                this.$refs['credit_form'].reset()
            }else{
                this.error=true;
                this.error_message='Debe completar el formulario'
            }
        },
        settingValue(){
            if(this.credit.year!='' && this.credit.period!=''){
                this.credit.value='1212121'
            }
        },
        changeQuotas(){
            this.credit.initialFee=1111
            this.credit.deadline='10/02/2022'
            
        },
    }
  }
</script>
