<template>
  <unlogged-layout 
    page-title="Iniciar Sesion" 
    page-default-back-link="/"
  >
      <div id="container">

        <login-form></login-form>
        
        <ion-button shape="round" href="/SignUp" expand="full" fill="outline">Registrarse</ion-button>

        <div class="logo ion-padding-top">
          <ion-img 
            alt="Logo de la empresa" 
            src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/417380115_753821486766872_1120209665557215475_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Vlk-GcGhe1wQ7kNvgEuor6f&_nc_zt=23&_nc_ht=scontent-bog2-2.xx&_nc_gid=Ae4BNIU-LOQ76ZRoG6iWCDV&oh=00_AYD0xzNJdvW__W7Yom2SyjOUmDH8AZFSuiDwSBWPOastdA&oe=67555B1E">
          </ion-img>
        </div>
      </div>
    </unlogged-layout>
</template>

<script>
  import LoginForm from './components/LoginForm.vue';

  import{
      IonButton,
      IonImg,
      IonPage,
      IonHeader,
      IonTitle, 
      IonContent,
      IonToolbar,
      IonBackButton,
      IonButtons,
} from '@ionic/vue'

  export default {
    props:['pageTitle', 'pageDefaultBackLink'],
    components:{
      IonButton,
      IonImg,
      LoginForm,
      IonPage,
      IonHeader,
      IonTitle, 
      IonContent,
      IonToolbar,
      IonBackButton,
      IonButtons,
    }
}
</script>

<style scoped>
.logo{
  margin:auto;
  border-radius: 15px;
  background-size: cover;
  max-width: 33% !important;
  max-height: 100px !important;
}
</style>
