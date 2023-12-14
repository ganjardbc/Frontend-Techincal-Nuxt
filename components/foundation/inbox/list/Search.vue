<template>
    <div class="foundation__toolbar flex items-center">
        <el-input 
            v-model="search"
            placeholder="Search" 
            class="foundation__toolbar-input w-90"
            clearable
            @input="onChange">
            <template #suffix>
                <i class="fa fa-lw fa-search"></i>
            </template>
        </el-input>
        <div class="w-custom__10 flex justify-end">
            <el-button 
                class="btn-custom__transparent btn-custom__txt-black btn-custom__no-border" 
                circle
                size="large"
                @click="onClose">
                <i class="fa fa-lg fa-times"></i>
            </el-button>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            search: ''
        }
    },
    methods: {
        onChange(item) {
            this.$emit('onChange', item)
        },
        onClose() {
            this.$emit('onClose')
        }
    }
})
</script>