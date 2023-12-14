<template>
    <div class="foundation__task-list">
        <div 
            v-for="(item, i) in taskList" 
            :key="i"
            :class="`${i + 1 < taskList.length && 'border-b'}`">
            <foundation-task-list-card 
                :data="item" 
                :total="taskList.length"
                @onDelete="deleteTask"></foundation-task-list-card>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mapStores, mapState, mapActions } from 'pinia'
import { storeTask } from '~/store'

export default defineComponent({
    data () {
        return {}
    },
    computed: {
        ...mapStores(storeTask),
        ...mapState(storeTask, ['loading', 'taskList']),
    },
    methods: {
        ...mapActions(storeTask, ['deleteTask'])
    }
})
</script>