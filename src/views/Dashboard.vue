<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Panel Principal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Panel Principal</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div class="logo ion-padding-top">
          <ion-img 
            alt="Silhouette of a person's head" 
            src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/417380115_753821486766872_1120209665557215475_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Vlk-GcGhe1wQ7kNvgEuor6f&_nc_zt=23&_nc_ht=scontent-bog2-2.xx&_nc_gid=Ae4BNIU-LOQ76ZRoG6iWCDV&oh=00_AYD0xzNJdvW__W7Yom2SyjOUmDH8AZFSuiDwSBWPOastdA&oe=67555B1E">
          </ion-img>
        </div>

        <strong>Sitio en construcción</strong>
        <p>
          Visita nuestro sitio principal en 
          <a target="_blank" rel="noopener noreferrer" href="https://oklahomacomputadores.com/"
            >Oklahoma Computadores</a
          >
        </p>
        <p>.</p>
        <ion-button shape="round" expand="full" href="/Productos">Ver Catalogo</ion-button>
        <ion-button shape="round" expand="full" >Ver información de usuario</ion-button>
        <ion-button shape="round" expand="full" >Editar información de usuario</ion-button>
        <ion-button shape="round" expand="full" >Salir</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
 
  //await this.$storage.set('name', 'Mr. Ionitron');
  //const name = await storage.get('name');
  
</script>

<style scoped>
  .logo{
    margin:auto;
    border-radius: 15px;
    background-size: cover;
    max-width: 33% !important;
    max-height: 33% !important;
  }
  #container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>