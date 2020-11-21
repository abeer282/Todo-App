<template>
  <q-page class="q-pa-md">
    <q-list 
      borderedy
      separator
    >

      <q-item 
        v-for="(task,key) in tasks"
        :key="key"
        @click="task.completed=!task.completed"
        clickable
        v-ripple
        :class="!task.completed? 'bg-amber-2' : 'bg-green-2'"
      >
        <q-item-section side top>
          <q-checkbox 
            v-model="task.completed"
          />
        </q-item-section>

        <q-item-section
          :class="{
            'cross-text' : task.completed
          }"
        >
          <q-item-label>{{ task.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="colum justify-center">
              <q-icon 
                class="q-mr-xs"
                name="event" 
                size="15px"
              />
            </div>

            <div class="column">
              <q-item-label 
                caption
                class="row justify-end"
              >
                  {{ task.dueDate }}
              </q-item-label>
              <q-item-label 
                caption
                class="row justify-end"
              >
                  <small> {{ task.dueTime }} </small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>


      </q-item>
      
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('tasks', ['tasks']) //which module and which getter
  }
};
</script>

<style></style>
