import { defineStore } from "pinia"

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

const dummyPayload = [
    {
        id: '1',
        userId: '1',
        userName: 'Phillips',
        title: '1012312 - Test Channel',
        date: '02/06/2021 10:45',
        isGroupChannel: true,
        users: [
            {
                userid: '1',
                userName: 'Phillips',
            },
            {
                userid: '2',
                userName: 'Cameron',
            },
        ],
        body: 'I understand your initial concerns and thats very valid, Elizabeth. But you understand your initial concerns and thats very valid.',
        status: 'unread',
    },
    {
        id: '2',
        userId: '1',
        userName: 'Cameron',
        title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
        date: '02/06/2021 10:45',
        isGroupChannel: true,
        users: [
            {
                userid: '1',
                userName: 'Phillips',
            },
            {
                userid: '2',
                userName: 'Cameron',
            },
        ],
        body: 'Hey, please read !',
        status: 'unread',
    },
    {
        id: '3',
        userId: '1',
        userName: 'FastVisa Support',
        title: 'FastVisa Support',
        date: '01/06/2021 12:19',
        isGroupChannel: false,
        users: [
            {
                userid: '3',
                userName: 'FastVisa Support',
            },
        ],
        body: 'Hey there! Welcome to your inbox.!',
        status: 'read',
    },
]

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
                    this.inboxList = dummyPayload.map((item) => {
                        return {
                            ...item
                        }
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