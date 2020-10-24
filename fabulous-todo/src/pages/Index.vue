<template>
  <q-page >
    <button 
        style="position:abslute; right: 10px;"
        @click="counter++">
      {{counter}}

    </button>
    <br><br><br>
    <input
      v-model="message" 
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"/>


    <button @click="clearMessage">Clear</button>


      <h5 
        v-if="message.length"
        class="borderGreen"> {{message}} </h5>

      <h6
        v-else
        class="borderRed">NO MSG</h6>

        <hr>
        <p>Uppercase msg: {{messageUppercase}}</p>
  </q-page>
</template>



<script>
export default {
  data(){
    return{
      message : 'I love VUE.JS!',
      counter: 0
    }
  },
  computed:{
    messageUppercase(){
       console.log('stam')
       return this.message.toUpperCase()
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

<style>
  .borderGreen{
    border: 5px solid green;
  }
  .borderRed{
    border: 5px solid red;
  }
</style>