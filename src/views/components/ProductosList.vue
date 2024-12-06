<template>
    <ion-list>
        <productos-list-item
            v-for="producto in productos"
            :key="producto.id"
            :producto ="producto"
        ></productos-list-item>
    </ion-list>
</template>

<script>
import{IonList,} from '@ionic/vue'
import ProductosListItem from './ProductosListItem.vue';

export default {
    props: ["productos"],
    components:{
        IonList,
        ProductosListItem,
    },
}
</script>