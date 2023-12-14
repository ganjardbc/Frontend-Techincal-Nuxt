<template>
    <div class="foundation__toolbar p-custom__x-34px flex justify-between items-center">
        <el-select 
            v-model="form.myTask" 
            placeholder="My Tasks"
            size="large" 
            class="w-custom__190px"
            clearable>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <div class="flex justify-end items-center">
            <el-button 
                class="btn-custom__blue btn-custom__radius" 
                size="large"
                @click="addTask">
                <span class="font-sans text-custom__color-white">New Task</span>
            </el-button>
            <el-button 
                class="btn-custom__transparent btn-custom__txt-black btn-custom__no-border m-custom__l-15px" 
                circle
                size="large"
                @click="onClose">
                <i class="fa fa-lg fa-times"></i>
            </el-button>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mapStores, mapState, mapActions } from 'pinia'
import { storeTask, storeUser } from '~/store'

export default defineComponent({
    data () {
        return {
            options: [{
                value: 'personal-errands',
                label: 'Personal Errands'
            }, {
                value: 'urgent-todo',
                label: 'Urgent To-Do'
            }],
            form: {
                myTask: ''
            }
        }
    },
    computed: {
        ...mapStores(storeTask, storeUser),
        ...mapState(storeUser, ['user']),
    },
    methods: {
        ...mapActions(storeTask, ['addTask']),
        addNewTask() {
            this.addTask(this.user && this.user.id)
        },
        onClose() {
            this.$emit('onClose')
        }
    }
})
</script>