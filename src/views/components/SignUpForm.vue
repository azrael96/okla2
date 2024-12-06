<template>
    <form class="ion-padding">

        <ion-item>
            <ion-label position="floating" color="secondary">NOMBRE RAZON SOCIAL</ion-label>
            <ion-input type="text" v-model="txtnombre" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary">NIT O DOCUMENTO</ion-label>
            <ion-input type="text" v-model="txtdocumento" class="ion-padding-top"/>
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
            <ion-label position="floating" color="secondary">NOMBRE DE USUARIO</ion-label>
            <ion-input type="text" v-model="txtusername" class="ion-padding-top"/>
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary">CONTRASEÑA</ion-label>
            <ion-input type="text" v-model="txtpassword" class="ion-padding-top"/>
        </ion-item>

        <ion-button shape="round" expand="full"
            @click="register"
        >
            Registrarse</ion-button>
    </form>
</template>

<script>
  import { 
    IonItem,
    IonInput,
    IonButton,
    IonLabel,
  } from '@ionic/vue';

import { defineComponent } from 'vue';
import { person, lockClosed } from 'ionicons/icons';
import axios from 'axios';

  export default defineComponent({
    components:{
      IonItem,
      IonInput,
      IonButton,
      IonLabel,
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
            /* 
            local ref: http://localhost/Proyectos/Backend/ 
            server ref: https://app.oklahomacomputadores.com/backendapp/
            */
            "https://app.oklahomacomputadores.com/backendapp/signup.php", 
            null, 
            {params:{
              "username":this.txtusername,
              "password":this.txtpassword,
              "documento":this.txtdocumento,
              "nombre":this.txtnombre,
              "telefono":this.txttelefoo,
              "correo":this.txtcorreo,
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
</style>

