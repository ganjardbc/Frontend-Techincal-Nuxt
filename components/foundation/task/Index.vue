<template>
    <div class="foundation foundation__position-initial bg-custom__white rounded-md shadow-md">
        <foundation-task-toolbar @onClose="onClose"></foundation-task-toolbar>
        <foundation-task-loading v-if="loading"></foundation-task-loading>
        <foundation-task-list v-if="taskList"></foundation-task-list>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mapStores, mapState, mapActions } from 'pinia'
import { storeTask, storeUser } from '~/store'

export default defineComponent({
    computed: {
        ...mapStores(storeTask, storeUser),
        ...mapState(storeTask, ['loading', 'taskList']),
        ...mapState(storeUser, ['user']),
    },
    methods: {
        ...mapActions(storeTask, ['getTask']),
        onClose() {
            this.$emit('onClose')
        },
    },
    mounted() {
        this.getTask(this.user && this.user.id) 
    }
})
</script>