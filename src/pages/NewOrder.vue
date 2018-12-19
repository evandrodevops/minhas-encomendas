<template>
  <q-page padding>
    <div class="q-ma-md">
      <q-input float-label="Cliente"
               v-model="currentOrder.client.name" />
    </div>
    <div class="q-ma-md">
      <q-input float-label="Contato"
               v-model="currentOrder.client.contact" />
    </div>
    <div class="q-ma-md">
      <q-list>
        <q-collapsible v-for="item in currentOrder.items"
                       v-bind:key="item"
                       icon="explore"
                       v-bind:label="item.description">
          <div class="q-ma-sm">
            <q-input float-label="Descrição"
                     v-model="item.description" />
          </div>
          <div class="q-ma-sm">
            <q-input type="number"
                     float-label="Preço unitário"
                     prefix="R$"
                     v-model="item.unitPrice" />
          </div>
          <div class="q-ma-sm">
            <q-input float-label="Medida"
                     v-model="item.unitMeasure" />
          </div>
          <div class="q-ma-sm">
            <q-input float-label="Quantidade"
                     v-model="item.quantity" />
          </div>
           <div class="q-ma-sm">
            <q-input float-label="Preço final"
                     v-model="item.finalPrice" />
          </div>
        </q-collapsible>
      </q-list>
      <div class="q-mt-md text-right">
        <q-btn color="secondary"
               icon="add"
               label="Adicionar item" />
      </div>
    </div>
    <div class="q-ma-md">
      <q-btn class="full-width"
             color="primary"
             label="SALVAR" />
    </div>
  </q-page>
</template>

<script>
import { QBtn, QCollapsible, QInput } from 'quasar'
export default {
  name: 'NewOrderPage',
  components: { QBtn, QCollapsible, QInput },
  data () {
    return {
      currentOrder: {
        client: {
          name: '',
          contact: ''
        },
        items: [
          {
            description: 'Item 1',
            unitPrice: 5.00,
            unitMeasure: 'un',
            quantity: 0.00,
            finalPrice: 0.00
          },
          {
            description: 'Item 2',
            unitPrice: 10.00,
            unitMeasure: 'un',
            quantity: 0.00,
            finalPrice: 0.00
          }
        ],
        statuses: {
          entryDate: new Date(),
          delivered: false,
          deliveryDate: new Date(),
          paid: false,
          paymentDate: new Date()
        }
      }
    }
  }
}
</script>

<style>
</style>
