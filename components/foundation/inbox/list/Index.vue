<template>
    <div class="foundation__container">
        <foundation-inbox-list-search @onChange="onChange"></foundation-inbox-list-search>
        <foundation-inbox-list-card v-if="!loading" :data="inboxList" @onClick="onClick"></foundation-inbox-list-card>
        <foundation-inbox-list-loading v-if="loading"></foundation-inbox-list-loading>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mapStores, mapState, mapActions } from 'pinia'
import { storeInbox, storeUser } from '~/store'

export default defineComponent({
    computed: {
        ...mapStores(storeInbox),
        ...mapState(storeInbox, ['loading', 'inboxList']),
        ...mapState(storeUser, ['user']),
    },
    methods: {
        ...mapActions(storeInbox, ['getInbox', 'setInboxSelected']),
        onClick (item) {
            this.setInboxSelected(item)
            this.$emit('onInbox')
        },
        onChange (value) {
            console.log('onChange', value)
        },
    },
    mounted() {
        this.getInbox(this.user && this.user.id) 
    }
})
</script>