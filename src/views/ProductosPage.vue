<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
        <ion-title>Listado de Productos</ion-title>
        </ion-toolbar>
      </ion-header>  

      <ion-content>
        <h2>Listado de Productos</h2>
        <ion-list>
            <ion-item>Max</ion-item>
            <ion-item>Max2</ion-item>
            <ion-item>Max3</ion-item>
            <ion-item>Max4</ion-item>
        </ion-list>
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
    IonList,
    IonItem,
} from '@ionic/vue'

export default {
    components:{
        IonPage,
        IonHeader,
        IonTitle, 
        IonContent,
        IonToolbar,
        IonList,
        IonItem,
    }
}
</script>