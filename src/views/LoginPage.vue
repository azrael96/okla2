<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Inicio de Sesión</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">INICIO DE SESIÓN</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">

        <ion-avatar class="avatar">
          <ion-img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"></ion-img>
        </ion-avatar>

        <ion-item>
          <ion-icon :icon="person"></ion-icon>
          <ion-label 
            position="fixed" 
            color="secondary"
          >
            Usuario
          </ion-label>
          <ion-input type="text" v-model="txtusername"></ion-input>
        </ion-item>

        <ion-item>
            <ion-icon :icon="lockClosed"></ion-icon>
          
          <ion-label
            position="fixed" 
            color="secondary"
          >
            Contraseña
          </ion-label>
          <ion-input type="text" v-model="txtpassword"></ion-input>
        </ion-item>

        <ion-button shape="round" expand="full" @click="login">Iniciar Sesión</ion-button>
        <ion-button shape="round" href="/SignUp" expand="full" fill="outline">Registrarse</ion-button>

        

        <div class="logo ion-padding-top">
          <ion-img 
            alt="Silhouette of a person's head" 
            src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/417380115_753821486766872_1120209665557215475_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Vlk-GcGhe1wQ7kNvgEuor6f&_nc_zt=23&_nc_ht=scontent-bog2-2.xx&_nc_gid=Ae4BNIU-LOQ76ZRoG6iWCDV&oh=00_AYD0xzNJdvW__W7Yom2SyjOUmDH8AZFSuiDwSBWPOastdA&oe=67555B1E">
          </ion-img>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonLabel,
    IonAvatar,
    IonImg,

  } from '@ionic/vue';

import { defineComponent } from 'vue';
import { person, lockClosed } from 'ionicons/icons';

import axios from 'axios';

  export default defineComponent({
    components:{
      IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonItem,
      IonInput,
      IonButton,
      IonIcon,
      IonLabel,
      IonAvatar,
      IonImg,
    },
    data(){
      return{
        txtusername : '',
        txtpassword : '',
      }
    },
    setup() {
      return { person, lockClosed,};
    },
    methods:{
      login(){
        if(this.txtusername == ""){
          alert("Por favor inserte la información solicitada")
        } else if(this.txtpassword == ""){
          alert("Por favor inserte la información solicitada")
        }else{
          axios
          .post(
            "https://app.oklahomacomputadores.com/backendapp/login.php", 
            null,
            {
              params:{
              "username":this.txtusername,
              "password":this.txtpassword,}})
            .then((response)=>{
              if(response.data.message == "success"){
                alert("Inicio de sesión exitoso");
                this.$router.push('/Dashboard');
              }else{
                alert("Inicio de sesión fallido");
              }
            })
            .catch(function(error)
            {
              alert(error)
            }
          );
        }
      }
    },
  })
  

</script>

<style scoped>
.avatar{
  margin:auto;
}

.logo{
  margin:auto;
  border-radius: 15px;
  background-size: cover;
  max-width: 33% !important;
  max-height: 100px !important;
}

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
