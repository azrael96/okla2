<template>
    <base-layout 
      page-title="Información del Usuario" 
      page-default-back-link="/Dashboard"  
    >
        <user-info-form>
        </user-info-form>
    </base-layout>
</template>

<script>
  import UserInfoForm from './components/UserInfoForm.vue';

export default{
  components:{
    UserInfoForm,

  },
}
</script>

<style scoped>

</style>
