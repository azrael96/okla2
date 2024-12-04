<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Registrarse</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">FORMULARIO DE REGISTRO</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        
        <ion-item>
          <ion-label position="floating" color="secondary">DOCUMENTO DE IDENTIDAD</ion-label>
          <ion-input type="text" v-model="txtdocumento" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
          <ion-label position="floating" color="secondary">NOMBRE RAZON SOCIAL</ion-label>
          <ion-input type="text" v-model="txtnombre" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
          <ion-label position="floating" color="secondary">APELLIDOS</ion-label>
          <ion-input type="text" v-model="txtapellidos" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
          <ion-label position="floating" color="secondary">TELEFONO</ion-label>
          <ion-input type="text" v-model="txttelefoo" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
          <ion-label position="floating" color="secondary">CORREO</ion-label>
          <ion-input type="text" v-model="txtcorreo" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
          <ion-label position="floating" color="secondary">ROL</ion-label>
          <ion-input type="text" v-model="txtrol" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
          <ion-label position="floating" color="secondary">USUARIO</ion-label>
          <ion-input type="text" v-model="txtusername" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
          <ion-label position="floating" color="secondary">CONTRASEÑA</ion-label>
          <ion-input type="text" v-model="txtpassword" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
          <ion-label position="floating" color="secondary">TIPO DOCUMENTO</ion-label>
          <ion-input type="text" v-model="txtdoc" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
          <ion-label position="floating" color="secondary">AVATAR</ion-label>
          <ion-input type="text" v-model="txtavatar" class="ion-padding-top"/>
        </ion-item>

        <ion-button type="submit" shape="round" expand="full"
          @click="register"
        >
          Registrarse</ion-button>
        <ion-button shape="round" href="/" expand="full" fill="outline">Volver</ion-button>

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
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
    IonButtons,

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
      IonButtons,
    },data(){
      return{
        txtusername : '',
        txtpassword : '',
        txtdocumento : '',
        txtnombre : '',
        txtapellidos : '',
        txttelefoo : '',
        txtcorreo : '',
        txtrol : '',
        txtdoc : '',
        txtavatar : '',
      }
    },
    methods:{
      register(){
        if(this.txtusername == ""){
          alert("input valid user")
        } else if(this.txtpassword == ""){
          alert("input valid password")
        } else {
          axios
          .post(
            "https://app.oklahomacomputadores.com/backendapp/signup.php", 
            null, 
            {params:{
              "username":this.txtusername,
              "password":this.txtpassword,
              "documento":this.txtdocumento,
              "nombre":this.txtnombre,
              "apellidos":this.txtapellidos,
              "telefono":this.txttelefoo,
              "correo":this.txtcorreo,
              "rol":this.txtrol,
              "doc":this.txtdoc,
              "avatar":this.txtavatar,
            }})
          .then((response) => {
            alert(response.data);
            this.$router.push('/');
          })
          .catch(
            function(error){
              alert(error);
            }
          );
        }
      }
    },
    setup() {
      return { person, lockClosed };
    }
  })
  

</script>

<style scoped>
.avatar{
  margin:auto
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
