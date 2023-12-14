import { defineStore } from "pinia"
import { dummyChat } from "~/service/constant"

const baseUrl = 'https://jsonplaceholder.typicode.com'

const defaultPayload = {
    id: '',
    name: '',
    body: '',
    date: '',
    time: '',
    status: '',
    userId: '',
}

export const storeChat = defineStore('store-chat', {
    state: () => ({
        loading: false,
        newMessage: false,
        chatList: [],
        inboxSelected: defaultPayload,
    }),
    actions: {
        updateLoading() {
            this.loading = !this.loading 
        },
        getInbox(inboxId = '') {
            return $fetch(`${baseUrl}/posts/${inboxId}`)
        },
        getChat(inboxId = '') {
            this.loading = true 
            this.newMessage = false
            this.chatList = []
            $fetch(`${baseUrl}/comments?postId=${inboxId}`)
                .then((res) => {
                    // this.chatList = res && res.map((item) => {
                    //     const inbox = this.getInbox(item.postId)
                    //     return {
                    //         ...item,
                    //         date: '',
                    //         time: '',
                    //         status: 'unread',
                    //         userId: inbox ? inbox.userId : '',
                    //     }
                    // })
                    const dummyPayload = dummyChat
                        .filter((item) => item.inboxId === inboxId)
                        .map((item) => {
                            return item
                        })
                    if (dummyPayload && dummyPayload.length > 0) {
                        this.chatList = dummyPayload
                        this.newMessage = true 
                    } else {
                        this.newMessage = false 
                    }
                })
                .finally(() => {
                    this.loading = false 
                })
        },
        addChat(data = null) {
            const time = new Date().getTime()
            const payload = {
                id: time,
                body: data.body,
                date: '06/06/2021',
                time: '20:55',
                status: 'unread',
                userId: '1',
                name: 'Phillips',
                inboxId: data.inboxId,
            }
            this.chatList.push(payload)
        },
        updateNewMessage(value = false) {
            this.newMessage = value
        },
    },
    getters: {
        getLoading: (state) => state.loading,
        getChatList: (state) => state.chatList,
    }
})