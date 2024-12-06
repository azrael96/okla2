<template>
  <base-layout 
    page-title="Edición de Información del Usuario" 
    page-default-back-link="/Login"
  >
    <user-info-edit-form>
    </user-info-edit-form>
  </base-layout>
</template>

<script>
  import UserInfoEditForm from './components/UserInfoEditForm.vue';

  export default {
    components:{
      UserInfoEditForm,
    },
  }
</script>

<style scoped>

</style>
