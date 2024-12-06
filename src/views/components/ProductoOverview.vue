<template>
    <div>
        <ion-img :src="image" :alt="title" class="logo"></ion-img>
    </div>
    <h2 class="ion-text-center">{{ title }}</h2>
    <p class="ion-text-center">{{ description }}</p>
</template>

<script>
    import {IonImg} from '@ionic/vue'

    export default{
        props: ['title', 'image', 'description' ],
        components: {
            IonImg,
        }
    }
</script>

<style scoped>
.logo{
    margin:auto;
    border-radius: 15px;
    background-size: cover;
    max-width: 40% !important;
    max-height: 40% !important;
  }
</style>