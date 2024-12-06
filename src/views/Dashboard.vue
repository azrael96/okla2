<template>
  <base-layout page-title="Panel Principal" >
      
        <div id="container">

          <!-- User Data 
          <user-info-form></user-info-form>
          -->

          <div class="logo ion-padding-top">
            <ion-img 
              alt="Silhouette of a person's head" 
              src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/417380115_753821486766872_1120209665557215475_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Vlk-GcGhe1wQ7kNvgEuor6f&_nc_zt=23&_nc_ht=scontent-bog2-2.xx&_nc_gid=Ae4BNIU-LOQ76ZRoG6iWCDV&oh=00_AYD0xzNJdvW__W7Yom2SyjOUmDH8AZFSuiDwSBWPOastdA&oe=67555B1E">
            </ion-img>
          </div>
          
          <strong>Sitio en construcción</strong>
          <p>
            Visita nuestro sitio principal en 
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://oklahomacomputadores.com/"
            >
              Oklahoma Computadores
            </a>
          </p>

          <p>.</p>
          <ion-button router-link="/Productos" shape="round" expand="full" >Ver Catalogo</ion-button>
          <ion-button router-link="/UserInfoEdit" shape="round" expand="full" >Editar información de usuario</ion-button>
          <ion-button @click="logout" shape="round" expand="full" >Salir</ion-button>
          <ion-button router-link="/UserInfo" shape="round" expand="full" >Informacion del usuario</ion-button>
        </div>
  </base-layout>
</template>

<script>
  import { 
    IonButton,
    IonImg,
  } from '@ionic/vue';

export default{
  components:{
    IonButton,
    IonImg,
  },
  methods:{
    logout(){
      this.$store.dispatch('logout');
      this.$router.replace('/Login');
    },
  },
}
</script>

<style scoped>
  .logo{
    margin:auto;
    border-radius: 15px;
    background-size: cover;
    max-width: 33% !important;
    max-height: 33% !important;
  }
</style>