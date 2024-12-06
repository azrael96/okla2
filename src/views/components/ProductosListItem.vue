<template>
       <ion-item :router-link="`/Productos/${producto.id}`" >
            <ion-thumbnail class="logo">
            <ion-img :src="producto.image" :alt="producto.title"></ion-img>
            </ion-thumbnail slot="start">
            <ion-label>
            {{ producto.title }}
            </ion-label>
        </ion-item>
</template>

<script>
    import{
        IonList,
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel,
    } from '@ionic/vue'

    export default {
        props: ["producto"],
        components:{
            IonList,
            IonItem,
            IonImg,
            IonThumbnail,
            IonLabel,
        },
    }
</script>

<style scoped>
ion-thumbnail{
    --size: 200px;
}
</style>
