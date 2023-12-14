import { defineStore } from "pinia"

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const storeTask = defineStore('store-task', {
    state: () => ({
        loading: false,
        taskList: [],
    }),
    actions: {
        updateLoading() {
            this.loading = !this.loading 
        },
        getTask(userId = 1) {
            this.loading = true 
            this.taskList = []
            $fetch(`${baseUrl}/todos?userId=${userId}`)
                .then((res) => {
                    this.taskList = res && res.map((item) => {
                        return {
                            ...item,
                            createdDate: '',
                            description: '',
                            createMode: false,
                        }
                    })
                })
                .finally(() => {
                    this.loading = false 
                })
        },
        addTask(userId = 1) {
            const time = new Date().getTime()
            const payload = { 
                userId: userId, 
                id: time, 
                title: '', 
                completed: false,  
                createdDate: '',  
                description: '' ,
                createMode: true,
            }
            this.taskList.push(payload)
        },
        deleteTask(id = '') {
            var index = this.taskList.findIndex((item) => item.id == id)
            if (index !== -1) {
                this.taskList.splice(index, 1)
            }
        },
    },
    getters: {
        getLoading: (state) => state.loading,
        getTaskList: (state) => state.taskList,
    }
})