import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';


const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage, 
  /* USE IF STORE ONLY PERSIST PART OF THEIR STATE
  reducer: state => ({
    keepThisModule: state.keepThisModule,
    keepThisModuleToo: state.keepThisModuleToo
  }),
  */
})

let initialState = {
  "token": null,
  "user": {}
}

const store = createStore({
  plugins: [vuexLocalStorage.plugin],
  state() {
    return {
      /* login  */
      isLoggedIn:false,
      id: "",
      name: "",
      doc: "",
      correo: "",
      telefono: "",
      username: "No user",

      /* Productos */
      productos: [
        {
          id: "1",
          image: "https://oklahomacomputadores.com/wp-content/uploads/2024/07/1-7-850x850.png",
          title: "tttt",
          description: "tttt",
        },
        {
          id: "2",
          image: "https://oklahomacomputadores.com/wp-content/uploads/2024/07/1-7-850x850.png",
          title: "tttt",
          description: "tttt",
        },
        {
          id: "3",
          image: "https://oklahomacomputadores.com/wp-content/uploads/2024/07/1-7-850x850.png",
          title: "tttt",
          description: "tttt",
        },
      ],
    };
  },
  mutations: {
    /* login  */
    login(state){
      state.isLoggedIn=true;
    },

    logout(state){
      state.isLoggedIn=false;
    },

    setUserLogged(state, payload){
      state.id=payload.id;
      state.name=payload.name;
      state.doc=payload.doc;
      state.correo=payload.correo;
      state.telefono=payload.telefono;
      state.username=payload.username;
    },

    setUserDefault(state){
      state.id="";
      state.name="";
      state.doc="";
      state.correo="";
      state.telefono="";
      state.username="No User";
    },
    
    /* Productos */
    addProducto(state, productoData) {
      const newProducto = {
        id: new Date().toISOString(),
        title: productoData.title,
        image: productoData.imageUrl,
        description: productoData.description
      };

      state.productos.unshift(newProducto);
    }
  },
  actions: {
    /* login  */
    login(context, payload){
      context.commit('login');
      context.commit('setUserLogged', payload);
    },
    logout(context){
      context.commit('logout');
      context.commit('setUserDefault');
    },
    setUserLogged(context, payload){
      context.commit('setUserLogged', payload);
    },
    setUserDefault(context){
      context.commit('setUserDefault');
    },

    /* Productos */
    addProducto(context, productoData) {
      context.commit('addProducto', productoData);
    }
  },
  getters: {
    /* login  */
    isAuthenticated(state) {
      return state.isLoggedIn;
    },

    getUsernameData(state){
      return {
        id: state.id,
        name: state.name,
        doc: state.doc,
        correo: state.correo,
        telefono: state.telefono,
        username: state.username,
      };
    },

    /* Productos */
    productos(state) {
      return state.productos;
    },
    producto(state) {
      return (productoId) => {
        return state.productos.find((producto) => producto.id === productoId);
      };
    },
  },

});

export default store;