<template>
    <form class="ion-padding">
        <ion-item>
            <ion-label position="floating" color="secondary">NOMBRE</ion-label>
            <ion-input 
              type="text" 
              v-model="txtnombre" 
              class="ion-padding-top" 
              :value=getUsernameData.name
            />
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary">NIT O DOCUMENTO</ion-label>
            <ion-input 
              type="text" 
              v-model="txtdocumento" 
              class="ion-padding-top"
              :placeholder=getUsernameData.doc
            />
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary">TELÉFONO</ion-label>
            <ion-input 
              type="text" 
              v-model="txttelefono" 
              class="ion-padding-top"
              :placeholder=getUsernameData.telefono
            />
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary">CORREO</ion-label>
            <ion-input 
              type="text" 
              v-model="txtcorreo" 
              class="ion-padding-top" 
              :placeholder=getUsernameData.correo 
            />
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary">NOMBRE DE USUARIO</ion-label>
            <ion-input 
              type="text" 
              v-model="txtusername" 
              class="ion-padding-top" 
              :placeholder=getUsernameData.username 
            />
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary">CONTRASEÑA</ion-label>
            <ion-input 
              type="text" 
              v-model="txtpassword" 
              class="ion-padding-top" 
              :placeholder=getUsernameData.password 
            />
        </ion-item>

        <ion-button shape="round" expand="full"  
            @click="register"
        >
            Editar Información</ion-button>
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
      const data = this.$store.getters.getUsernameData;
      return{
        txtusername : data.username,
        txtpassword : "",
        txtdocumento : data.doc,
        txtnombre : data.name,
        txttelefono : data.telefono,
        txtcorreo : data.correo,
        id : data.id,
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
            "https://app.oklahomacomputadores.com/backendapp/editUser.php", 
            null, 
            {params:{
              "username":this.txtusername,
              "password":this.txtpassword,
              "documento":this.txtdocumento,
              "nombre":this.txtnombre,
              "telefono":this.txttelefono,
              "correo":this.txtcorreo,
              "id": this.id,
            }})
          .then((response) => {
            if(response.data.message == "success"){
              this.$store.dispatch('setUserLogged', 
                {
                  name: response.data.name,
                  doc: response.data.doc,
                  correo: response.data.correo,
                  telefono: response.data.telefono,
                  username: response.data.username,
                });
                alert(response.data); //debug
                alert("Usuario Editado con Éxito");
              this.$router.push('/Dashboard');
            }else{
              alert("Proceso de edición fallido");
              alert(response.data); //debug
            }
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
    },
    computed: {
      getUsernameData(){
          return this.$store.getters.getUsernameData;
      }
    },
  })
</script>

<style scoped>
.avatar{
  margin:auto
}
</style>

