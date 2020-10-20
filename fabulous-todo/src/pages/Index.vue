<template>
  <q-page >
    <input
      v-model="message" 
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"/>
    <button @click="clearMessage">Clear</button>
      <h5> {{message}} </h5>
  </q-page>
</template>



<script>
export default {
  data(){
    return{
      message : 'I love VUE.JS!'
    }
  },
  methods: {
     clearMessage(){
       this.message=''
     },
    //  handleKeyup(e){
    //    //logging event object
    //    console.log(e)
    //    if(e.keyCode === 27){//esc
    //      this.clearMessage()
    //    }else if (e.keyCode === 13){//enter
    //      this.alertMessage()
    //    }
    //  },
     alertMessage(){
       alert(this.message)
     }
  }
}
</script>
