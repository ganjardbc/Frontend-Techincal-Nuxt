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
                    SEND
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
            formChat: ''
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
        ...mapActions(storeChat, ['updateNewMessage', 'addChat']),
        onClickScrolldown() {
            this.updateNewMessage(!this.newMessage)
        },
        onSendChat() {
            const payload = {
                body: this.formChat,
                userId: this.inboxSelected.userId,
                inboxId: this.inboxSelected.id,
            }
            this.addChat(payload)
            this.formChat = ''
        }
    },
})
</script>