<template>
  <q-page>
    <button style="position: abslute; right: 10px" @click="counter++">
      {{ counter }}
    </button>
    <br />
    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-autofocus
      v-bind:class="{ error: message.length > 15 }"
    />
    <br /><br /><br />
    <p>removing v-bind</p>
    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-autofocus
      :style="errorStyle"
    />
    <button @click="clearMessage">Clear</button>

    <div>
      {{ message.length }}
    </div>

    <h5 v-if="message.length" class="borderGreen">{{ message }}</h5>

    <h6 v-else class="borderRed">NO MSG</h6>

    <hr />

    <p>Uppercase msg: {{ messageUppercase }}</p>

    <p>Lowercase msg: {{ message | messageLowercase }}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "I love VUE.JS!",
      counter: 0,
    };
  },
  computed: {
    //this function considered as static, when calling it we do not need the ()
    //has access to everything in the exported, more powerful than filters
    messageUppercase() {
      console.log("stam");
      return this.message.toUpperCase();
    },
    errorStyle(){
      if(this.message.length >15){
        return {
          'color':'red',
          'background':'pink'
        }
      }
    }
  },
  methods: {
    clearMessage() {
      this.message = "";
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
    alertMessage() {
      alert(this.message);
    },
  },
  filters: {
    //comparing to computed properties this function has no full access and we need to specify the params
    messageLowercase(val) {
      return val.toLowerCase();
    },
    directives: {
      autofocus: {
        inserted() {
          console.log("input inserted");
        },
      },
    },
  },
};
</script>

<style>
.borderGreen {
  border: 5px solid green;
}
.borderRed {
  border: 5px solid red;
}
input,
button {
  font-size: px;
}
.error {
  color: red;
  background: pink;
}
</style>
