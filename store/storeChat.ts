import { defineStore } from "pinia"

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

const dummyPayload = [
    {
        id: '1',
        body: 'No worries. It will be complited!',
        date: '02/06/2021',
        time: '19:32',
        status: 'read',
        userId: '1',
        name: 'Phillips',
    },
    {
        id: '2',
        body: 'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
        date: '03/06/2021',
        time: '19:32',
        status: 'read',
        userId: '2',
        name: 'Mary Hilda',
    },
    {
        id: '3',
        body: 'Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.',
        date: '03/06/2021',
        time: '19:32',
        status: 'read',
        userId: '1',
        name: 'Phillips',
    },
    {
        id: '4',
        body: 'Sure thing, Claren.',
        date: '04/06/2021',
        time: '19:32',
        status: 'read',
        userId: '2',
        name: 'Mary Hilda',
    },
    {
        id: '5',
        body: 'Morning. I’ll try to do them. Thanks',
        date: '04/06/2021',
        time: '20:22',
        status: 'unread',
        userId: '3',
        name: 'Obaidullah Amarkhil',
    },
]

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
        getInbox(postId = '') {
            return $fetch(`${baseUrl}/posts/${postId}`)
        },
        getChat(postId = '') {
            this.loading = true 
            this.newMessage = false
            this.chatList = []
            $fetch(`${baseUrl}/comments?postId=${postId}`)
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
                    this.chatList = dummyPayload.map((item) => {
                        return {
                            ...item
                        }
                    })
                    this.newMessage = true 
                })
                .finally(() => {
                    this.loading = false 
                })
        },
        addChat(data = null) {
            this.chatList.push(data)
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