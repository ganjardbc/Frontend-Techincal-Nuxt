<template>
    <div class="foundation__container">
        <slot></slot>
        <div class="position__absolute position__form-action-floating h-custom__40px flex items-center">
            <el-button 
                class="btn-custom__txt-black shadow-md" 
                circle
                @click="onSubmit">
                <i class="fa fa-lw fa-check text-custom__color-green"></i>
            </el-button>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    methods: {
        onSubmit() {
            this.$emit('onSubmit')
        },
    }
})
</script>
