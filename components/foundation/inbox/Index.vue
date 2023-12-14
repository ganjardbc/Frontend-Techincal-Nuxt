<template>
    <div class="foundation foundation__position-initial bg-custom__white rounded-md shadow-md">
        <foundation-inbox-list
            v-if="visible === 'list'"
            @onInbox="onInbox"></foundation-inbox-list>
        <foundation-inbox-chats
            v-if="visible === 'chat'"
            @onGoBack="onGoBack"
            @onClose="onCloseChat"></foundation-inbox-chats>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {
            visible: 'list'
        }
    },
    methods: {
        onInbox() {
            this.visible = 'chat'
        },
        onGoBack() {
            this.visible = 'list'
        },
        onCloseChat() {
            this.visible = 'list'
            this.$emit('onClose')
        },
        onCloseList() {
            this.$emit('onClose')
        }
    }
})
</script>