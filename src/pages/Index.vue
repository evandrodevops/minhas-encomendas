<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  mounted () {
    console.log('- Firebase inicializado')
    console.log('-- Autenticação')
    console.log(this.$auth)
    console.log('-- Banco de dados')
    console.log(this.$db)
  }
}
</script>
