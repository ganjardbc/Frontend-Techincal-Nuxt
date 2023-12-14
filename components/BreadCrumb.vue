<template>
    <div class="flex flex-row items-center">
        <el-button 
            class="btn-custom__transparent btn-custom__txt-black btn-custom__no-border mr-2" 
            size="large" 
            circle
            @click="goBack">
            <i class="fa fa-lw fa-arrow-left"></i>
        </el-button>
        <el-breadcrumb separator-class="fa fa-lw fa-chevron-right">
            <el-breadcrumb-item 
                v-for="(item, i) in data" 
                :key="i">
                <nuxt-link v-if="item.path" :to="{ path: item.path }">{{ item.label }}</nuxt-link>
                <span v-else>{{ item.label }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        data: null,
    },
    methods: {
        goBack () {
            this.$router.back()
        }
    }
})
</script>
