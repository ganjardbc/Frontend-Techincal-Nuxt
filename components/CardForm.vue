<template>
    <div>
        <div class="my-2 bg-white rounded-sm border">
            <div v-if="title" class="px-4 py-2 border-b flex flex-row justify-between items-center">
                <h1 class="font-sans font-bold text-sm">
                    {{ title || '-' }}
                </h1>
                <slot name="toolbar" />
            </div>
            <div class="w-full px-4 py-6">
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: null,
    },
})
</script>
