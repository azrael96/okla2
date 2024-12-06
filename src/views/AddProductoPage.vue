<template>
    <base-layout page-title="Añadir un Producto" page-default-back-link="/Productos">
        <create-product-form @save-producto="saveProducto"></create-product-form>
    </base-layout>
</template>

<script>
import CreateProductForm from './components/CreateProductoForm.vue';

export default {
    components: {
        CreateProductForm,
    },
    methods:{
        saveProducto(productoData){
            this.$store.dispatch('addProducto', productoData)
        }
    }
}
</script>