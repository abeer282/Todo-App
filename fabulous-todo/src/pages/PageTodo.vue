<template>
  <q-page class="q-pa-md">
    <q-list bordered>

      <q-item 
        v-for="task in tasks"
        :hey="task.id"
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox 
            v-model="task.completed"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.name }}</q-item-label>
        </q-item-section>
      </q-item>
      
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to shop",
          completed: false
        },
        {
          id: 2,
          name: "Wash dishes",
          completed: false
        },
        {
          id: 3,
          name: "Watch TV",
          completed: false
        }
      ]
    };
  }
};
</script>

<style></style>
