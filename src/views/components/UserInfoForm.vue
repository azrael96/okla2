<template>
    <form class="ion-padding">
        <ion-item>
            <ion-label position="floating" color="secondary"> NOMBRE </ion-label>
            <ion-input 
                type="text"
                class="ion-padding-top" 
                readonly 
                :placeholder=getUsernameData.name>
            </ion-input>
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary"> NIT O DOCUMENTO </ion-label>
            <ion-input 
                type="text"
                class="ion-padding-top" 
                readonly 
                :placeholder=getUsernameData.doc>
            </ion-input>
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary"> CORREO </ion-label>
            <ion-input 
                type="text" 
                class="ion-padding-top"
                readonly 
                :placeholder=getUsernameData.correo>
            </ion-input>
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary"> TELÉFONO </ion-label>
            <ion-input 
                type="text" 
                class="ion-padding-top"
                readonly 
                :placeholder=getUsernameData.telefono>
            </ion-input>
        </ion-item>

        <ion-item>
            <ion-label position="floating" color="secondary"> NOMBRE DE USUARIO </ion-label>
            <ion-input 
                type="text" 
                class="ion-padding-top"
                readonly 
                :placeholder=getUsernameData.username>
            </ion-input>
        </ion-item>
    </form>
</template>

<script >
    import { 
        IonButton,
        IonLabel,
        IonImg,
        IonInput,
        IonItem,
    } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        components:{
            IonButton,
            IonLabel,
            IonImg,
            IonInput,
            IonItem,
        },
        computed: {
            getUsernameData(){
                return this.$store.getters.getUsernameData;
            }
        },
    })
</script>
