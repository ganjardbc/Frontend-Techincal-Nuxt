import { defineStore } from "pinia"
import { dummyInbox } from "~/service/constant"

const baseUrl = 'https://jsonplaceholder.typicode.com'

const defaultPayload = {
    id: '',
    userId: '',
    userName: '',
    title: '',
    date: '',
    isGroupChannel: false,
    users: [],
    body: '',
    status: 'unread',
}

export const storeInbox = defineStore('store-inbox', {
    state: () => ({
        loading: false,
        inboxList: [],
        inboxSelected: defaultPayload,
    }),
    actions: {
        updateLoading() {
            this.loading = !this.loading 
        },
        getInbox(userId = 1) {
            this.loading = true 
            this.inboxList = []
            $fetch(`${baseUrl}/posts?userId=${userId}`)
                .then((res) => {
                    // this.inboxList = res && res.map((item) => {
                    //     return {
                    //         ...item,
                    //         date: '',
                    //         isGroupChannel: false,
                    //         users: [],
                    //         status: 'unread',
                    //         userName: ''
                    //     }
                    // })
                    this.inboxList = dummyInbox.map((item) => {
                        return item
                    })
                })
                .finally(() => {
                    this.loading = false 
                })
        },
        setInboxSelected(data = null) {
            this.inboxSelected = data
        }
    },
    getters: {
        getLoading: (state) => state.loading,
        getinboxList: (state) => state.inboxList,
    }
})