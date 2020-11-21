<template>
  <q-page>
  <p> To do page </p>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
        tasks: [
          {
            id: 1,
            name: 'Go to shop',
            completed: false
          },
          {
            id: 2,
            name: 'Wash dishes',
            completed: false
          },
          {
            id: 3,
            name: 'Watch TV',
            completed: false
          }
        ]
    }
  }  
}
</script>

<style>

</style>
