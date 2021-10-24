<template>
  <div class="secondary">
    <v-row no-gutters  align="center" justify="center">
      <v-col cols="10" lg="6">
        <v-card
          class="my-3 pb-3 px-5"
          tile
          style="border-radius: 10px !important;"
        >
          <v-card-text class="pb-0">
            <div class="text-center text-subtitle-2">Estos créditos van dirigidos a Estudiantes</div>
            <p class="error--text text-center text-subtitle-2">
              Matriculados en el período 2021-2
            </p>
          </v-card-text>
          <div v-for="(item, i) in items" :key="i" class="d-flex my-3">
            <v-icon color="secondary" style="height: fit-content;" small left>fas fa-book</v-icon>
            <p class="text-body-2 mb-0">{{item.text}}</p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="10" lg="8" class="d-flex align-center flex-column">
        <v-chip
          color="primary"
          class="ma-2 justify-center text-overline"
          style="width:50%"
        >
          Requisitos
        </v-chip>
        <v-card
          class="my-3 pb-3"
          tile
          style="border-radius: 10px !important;"
        >
          <div
          v-for="(item, i) in requisitos" :key="i">
            <v-card-text class="pb-0 text-subtitle-2">
              {{item.title}}
              <div v-for="(item, i) in item.requisitos" :key="i" class="d-flex my-2">
                <v-icon color="primary" small left>fas fa-chevron-right</v-icon>
                <p class="text-body-2 mb-0">{{item}}</p>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
 

  export default {
    name: 'Home',

    components: {
     
    },
    data: () => ({
      selectedItem: 1,
      items: [
        { text: 'Debes pagar como mínimo el 30% del valor de la matrícula.' },
        { text: 'El 70% restante o menos, se financiará hasta 4 cuotas, siempre y cuando la solicitud sea presentada antes del 30 de julio de 2021. A solicitudes presentadas con posterioridad a la fecha antes señalada la financiación sera de 3 cuotas'},
        { text: 'Las renovaciones de créditos, se podrán financiar hasta el 80% de la matricula.'},
        { text: 'Todos los créditos vigentes deben estar liquidados y pagados antes del 30 de Noviembre de 2021 o al cierre académico del período.'},
        { text: 'El tomador de un crédito directo con la Universidad, entiende y acepta que este hace parte integral del proceso de la matrícula, por lo que se entiende que de llegar a constituirse en mora en el pago de una o varias cuotas de dicho crédito, no podrá avanzar al siguiente período o grado académico y no se le expedirá volante de pago alguno, hasta tanto ponga al día su obligación ; por lo que la Universidad, se exime de toda responsabilidad por la no expedición del siguiente volante de matrícula o la emisión del paz y salvo para el proceso de grado y/o para el proceso de promoción de semestre y/o grado.'},
      ],
      requisitos: [
        {title:'Estudiante:', requisitos:['Volante de Matrícula 2021-2.','Copia documento de identidad.']},
        {title:'Si el codeudor o deudor solitario es empleado:', requisitos:['Carta Laboral.',' Tres últimos extractos de nómina.','Copia de Cédula.']},
        {title:'Si el deudor solidario es independiente:', requisitos:[' Certificación de Ingresos emitida por contador competente.','Copia de Tarjeta profesional del Contador.','Copia documento de identidad del Contador.','Copia cédula codeudor.', 'Últimos tres extractos bancarios que evidencie los ingresos certificados.']},
      ]
    }),
  }
</script>
