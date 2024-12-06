<template>
  <base-layout page-title="Lista de Productos" page-default-back-link="/dashboard">
    <template v-slot:actions-end>
      <ion-button router-link="/Productos/add">
        <ion-icon slot="icon-only" :icon="add">
        </ion-icon>
      </ion-button>
    </template>
    <productos-list :productos="productos"></productos-list>
  </base-layout>
</template>

<script>
import ProductosList from './components/ProductosList.vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';

export default {
    components:{
      ProductosList,
      IonButton,
      IonIcon,
    },
    data(){
      return { add };
    },
    computed: {
      productos() {
        return this.$store.getters.productos;
      }
    }
}
</script>

<style scoped>
ion-thumbnail{
  --size: 150px;
}
</style>