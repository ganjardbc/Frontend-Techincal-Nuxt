<template>
    <div class="foundation__container">
        <foundation-inbox-chats-header
            @onGoBack="onGoBack"
            @onClose="onClose"></foundation-inbox-chats-header>
        <foundation-inbox-chats-card 
            :id="userId" 
            :data="chatList"></foundation-inbox-chats-card>
        <foundation-inbox-chats-form></foundation-inbox-chats-form>
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
        ...mapState(storeChat, ['chatList']),
        ...mapState(storeUser, ['user']), 
        userId() {
            return this.user && this.user.id
        }
    },
    methods: {
        ...mapActions(storeChat, ['getChat']),
        onGoBack() {
            this.$emit('onGoBack')
        },
        onClose() {
            this.$emit('onClose')
        }
    },
    mounted() {
        this.getChat(this.inboxSelected && this.inboxSelected.id)
    }
})
</script>