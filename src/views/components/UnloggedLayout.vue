<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button :default-href="pageDefaultBackLink"/>
          </ion-buttons>
          
        <ion-title>{{ pageTitle }}</ion-title>
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
        </ion-toolbar>
      </ion-header>  

      <ion-content>
        <div v-if="!isLoggedIn">
          <slot />
        </div>
        <div v-if="isLoggedIn">
          <ion-button href="/Dashboard" shape="round" expand="full" >Menu Principal</ion-button>
        </div>

      </ion-content>
    </ion-page>
</template>

<script>
import{
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
      IonPage,
      IonHeader,
      IonTitle, 
      IonContent,
      IonToolbar,
      IonBackButton,
      IonButtons,
  },
  computed: {
    isLoggedIn(){
    return this.$store.getters.isAuthenticated;
    },
  },
}
</script>