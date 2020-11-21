<template>
  <q-item
    @click="task.completed = !task.completed"
    clickable
    v-ripple
    :class="!task.completed ? 'bg-amber-2' : 'bg-green-2'"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section
      :class="{
        'cross-text': task.completed
      }"
    >
      <q-item-label>{{ task.name }}</q-item-label>
    </q-item-section>

    <q-item-section side>
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
  </q-item>
</template>

<script>
export default {
    props: ['task', 'id']
}
</script>

<style></style>
