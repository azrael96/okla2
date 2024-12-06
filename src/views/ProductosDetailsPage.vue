<template>
    <base-layout 
        :page-title="loadedProducto ? loadedProducto.title : 'Cargando...'" 
        page-default-back-link="/Productos"
    >
        <h2 v-if="!loadedProducto">No se encontro</h2>
        <producto-overview 
            v-else 
            :title="loadedProducto.title"
            :image="loadedProducto.image"
            :description="loadedProducto.description"
        >
        </producto-overview>
    </base-layout>
</template>

<script>
import ProductoOverview from './components/ProductoOverview.vue';

export default {
    components: {
        ProductoOverview,
    },
    data(){
    return{
        productoId: this.$route.params.id
    }
    },
    computed:{
    loadedProducto(){
        return this.$store.getters.producto(this.productoId);
    }
    },
    watch:{
    '$route'(currentRoute){
        this.productoId = currentRoute.params.id
    }
    },
}
</script>