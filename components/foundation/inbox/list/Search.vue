<template>
    <div class="foundation__toolbar flex items-center">
        <el-input 
            v-model="search"
            placeholder="Search" 
            class="foundation__toolbar-input w-full"
            clearable
            @input="onChange">
            <template #suffix>
                <i class="fa fa-lw fa-search"></i>
            </template>
        </el-input>
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
    }
})
</script>