<template>
  <q-item
    @click="updateTask(
      {
        id: id,
        updates: { completed: !task.completed}
      }
    )"
    clickable
    v-ripple
    :class="!task.completed ? 'bg-amber-2' : 'bg-green-2'"
  >
    <q-item-section side top>
      <q-checkbox 
        :value="task.completed" 
        class="no-pointer-events"
      />
    </q-item-section>

    <q-item-section
      :class="{
        'cross-text': task.completed
      }"
    >
      <q-item-label>{{ task.name }}</q-item-label>
    </q-item-section>

    <q-item-section 
      side
      v-if="task.dueDate"
    >
      <div class="row">
        <div class="colum justify-center">
          <q-icon class="q-mr-xs" name="event" size="15px" />
        </div>

        <div class="column">
          <q-item-label caption class="row justify-end">
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label caption class="row justify-end">
            <small> {{ task.dueTime }} </small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn 
        @click.stop="promptToDelete(id)"
        flat 
        round 
        dense 
        color="red" 
        icon="delete" 
      />
    </q-item-section>

  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['task', 'id'],
    methods: {
      ...mapActions('tasks', ['updateTask','deleteTask']),
      promptToDelete(id) {
              this.$q.dialog({
                  dark: true,
                  title: 'Delete',
                  message: 'Would you like to delete this task?',
                  cancel: true,
                  persistent: true
            }).onOk(() => {
              this.deleteTask(id)
            })
      }
    }
}
</script>

<style></style>
