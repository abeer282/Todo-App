<template>
    <div class=" row q-mb-sm">
        <q-input
            autofocus
            clearable
            outlined
            ref="name"
            :value="name"
            @input="$emit('update:name', $event)"
            label="Task Name"
            :rules="[(val) => !!val || 'Field is required']"
            class="col"
        >
            <template v-slot:append>
                <q-icon
                    v-if="name"
                    @click="$emit('update:name', '')"
                    name="close"
                    class="cursor-pointer"
                />
            </template>
        </q-input>
    </div>
</template>

<script>
export default {
        props: ['name']
}
</script>

<style>

</style>
