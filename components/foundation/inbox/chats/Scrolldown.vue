<template>
    <div class="foundation__chat-floating">
        <div class="foundation__chat-scrolldown" @click="onClick">
            <span class="label font-sans font-semibold">New Message</span>
            <i class="icon fa fa-lw fa-arrow-down"></i>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    methods: {
        onClick() {
            this.$emit('onClick')
        }
    }
})
</script>