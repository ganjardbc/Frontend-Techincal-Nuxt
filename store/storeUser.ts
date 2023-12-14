import { defineStore } from "pinia"

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const storeUser = defineStore('store-user', {
    state: () => ({
        loading: false,
        user: {
            id: '',
            name: '',
            username: '',
            email: '',
            address: null,
            phone: '',
            website: '',
            company: null
        },
    }),
    actions: {
        updateLoading() {
            this.loading = !this.loading 
        },
        getCurrentUser(userId = 1) {
            this.loading = true 
            $fetch(`${baseUrl}/users/${userId}`)
                .then((res) => {
                    this.user = res
                })
                .finally(() => {
                    this.loading = false 
                })
        },
    },
    getters: {
        getLoading: (state) => state.loading,
        getUser: (state) => state.user,
    }
})