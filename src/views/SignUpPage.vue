<template>
  <unlogged-layout 
    page-title="Formulario de Registro" 
    page-default-back-link="/"
  >
    <sign-up-form>
    </sign-up-form>
  </unlogged-layout>

</template>

<script>
  import SignUpForm from './components/SignUpForm.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components:{
      SignUpForm,
    },
  })
</script>

<style scoped>

</style>
