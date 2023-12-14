<template>
    <div class="foundation__container">
        <foundation-inbox-chats-loading v-if="loading"></foundation-inbox-chats-loading>
        <foundation-inbox-chats-scrolldown v-if="newMessage" @onClick="onClickScrolldown"></foundation-inbox-chats-scrolldown>
        <div class="foundation__chat-form flex items-center justify-between">
            <div class="foundation__chat-form-main">
                <el-input placeholder="Type a new message" size="large"></el-input>
            </div>
            <div class="foundation__chat-form-right">
                <el-button class="btn-custom__blue btn-custom__txt-white btn-custom__no-border" size="large">
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
        ...mapActions(storeChat, ['updateNewMessage']),
        onClickScrolldown() {
            this.updateNewMessage(!this.newMessage)
        },
    },
})
</script>