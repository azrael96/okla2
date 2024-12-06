<template>
    <form class="ion-padding">
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
            <ion-input type="text" v-model="txtusername" required></ion-input>
        </ion-item>

        <ion-item>
            <ion-icon :icon="lockClosed"></ion-icon>
            <ion-label
            position="fixed" 
            color="secondary"
            >
            Contraseña
            </ion-label>
            <ion-input type="text" v-model="txtpassword" required></ion-input>
        </ion-item>
        <ion-button shape="round" expand="full" @click="login">Iniciar Sesión</ion-button>
    </form>

</template>

<script>
    import axios from 'axios';
    import { defineComponent } from 'vue';
    import { person, lockClosed } from 'ionicons/icons';
    import { 
        IonItem,
        IonInput,
        IonButton,
        IonIcon,
        IonLabel,
        IonAvatar,
        IonImg,

    } from '@ionic/vue';

  export default defineComponent({
    components:{
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
          /* 
            local ref: http://localhost/Proyectos/Backend/ 
            server ref: https://app.oklahomacomputadores.com/backendapp/
          */
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
                this.$store.dispatch('login', 
                  {
                    id: response.data.id,
                    name: response.data.name,
                    doc: response.data.doc,
                    correo: response.data.correo,
                    telefono: response.data.telefono,
                    username: response.data.username,
                  });
                this.txtusername = '',
                this.txtpassword = '',
                this.$router.push('/Dashboard');
              }else{
                alert("Inicio de sesión fallido");
                this.$store.dispatch('logout');
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
</style>
