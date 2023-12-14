<template>
    <div class="foundation__container">
        <foundation-inbox-chats-loading v-if="loading"></foundation-inbox-chats-loading>
        <foundation-inbox-chats-scrolldown v-if="newMessage" @onClick="onClickScrolldown"></foundation-inbox-chats-scrolldown>
        <div class="foundation__chat-form flex items-center justify-between">
            <div class="foundation__chat-form-main">
                <el-input 
                    v-model="formChat"
                    placeholder="Type a new message" 
                    size="large"
                    clearable
                    @change="onSendChat"></el-input>
            </div>
            <div class="foundation__chat-form-right">
                <el-button 
                    :class="`${formChat ? 'btn-custom__blue btn-custom__txt-white' : 'btn-custom__gray btn-custom__txt-gray'} btn-custom__no-border`" 
                    size="large"
                    :disabled="!formChat"
                    @click="onSendChat">
                    {{ editMode ? 'EDIT' : 'SEND' }}
                </el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mapStores, mapState, mapActions } from 'pinia'
import { storeInbox, storeChat, storeUser } from '~/store'

export default defineComponent({
    data () {
        return {
            formChat: '',
            selected: null,
            editMode: false,
        }
    },
    props: {
        selectedChat: {
            default: null,
            requireds: false,
        }
    },
    watch: {
        selectedChat(props) {
            this.selected = props 
            this.formChat = props.body
            this.editMode = true
        }
    },
    computed: {
        ...mapStores(storeInbox, storeChat, storeUser),
        ...mapState(storeInbox, ['inboxSelected']),
        ...mapState(storeChat, ['loading', 'newMessage']),
        ...mapState(storeUser, ['user']), 
        userId() {
            return this.user && this.user.id
        }
    },
    methods: {
        ...mapActions(storeChat, [
            'updateNewMessage', 
            'addChat', 
            'editChat',
            'readAllChat'
        ]),
        scrollToBottomChatListArea() {
            const element = document.getElementById('foundation-inbox-chats-list')
            element.scrollTop = element.scrollHeight 
        },
        onClickScrolldown() {
            this.updateNewMessage(!this.newMessage)
            this.scrollToBottomChatListArea()
        },
        onSendChat() {
            if (this.editMode) {
                const payload = {
                    body: this.formChat,
                    userId: this.inboxSelected.userId,
                    inboxId: this.inboxSelected.id,
                    id: this.selected.id,
                }
                this.editChat(payload)
            } else {
                this.readAllChat()
                const payload = {
                    body: this.formChat,
                    userId: this.inboxSelected.userId,
                    inboxId: this.inboxSelected.id,
                }
                this.addChat(payload)
                this.scrollToBottomChatListArea()
            }
            this.formChat = ''
            this.selected = null 
            this.editMode = false 
        }
    },
})
</script>