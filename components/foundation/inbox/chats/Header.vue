<template>
    <div class="foundation__headbar flex items-center border-b">
        <div class="foundation__headbar-left">
            <el-button 
                class="btn-custom__transparent btn-custom__txt-black btn-custom__no-border" 
                circle
                @click="onGoBack">
                <i class="fa fa-lg fa-arrow-left"></i>
            </el-button>
        </div>
        <div class="foundation__headbar-main">
            <div class="font-sans font-semibold text-custom__color-blue text-custom__size-16px truncate">{{ inboxSelected && inboxSelected.title }}</div>
            <div v-if="inboxSelected.isGroupChannel" class="font-sans text-sm text-custom__color-black text-custom__size-14px truncate">{{ userLength }} Participants</div>
        </div>
        <div class="foundation__headbar-right">
            <el-button 
                class="btn-custom__transparent btn-custom__txt-black btn-custom__no-border" 
                circle
                @click="onClose">
                <i class="fa fa-lg fa-times"></i>
            </el-button>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mapStores, mapState } from 'pinia'
import { storeInbox } from '~/store'

export default defineComponent({
    computed: {
        ...mapStores(storeInbox),
        ...mapState(storeInbox, ['inboxSelected']),
        userLength() {
            return this.inboxSelected && this.inboxSelected.users.length
        }
    },
    methods: {
        onGoBack() {
            this.$emit('onGoBack')
        },
        onClose() {
            this.$emit('onClose')
        }
    }
})
</script>