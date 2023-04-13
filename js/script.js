const {createApp} = Vue;

createApp({
  data(){
    return{
      message:'Ciao Vue!',
      image:{
        src: 'img/02.webp',
        alt: 'img'
      }
    }
  },



}).mount('#app')