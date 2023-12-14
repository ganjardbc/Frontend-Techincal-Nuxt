<template>
    <div class="menu-sidebar">
        <nuxt-link 
            v-for="(item, i) in data" 
            :key="i" 
            :to="item.path"
            class="menu-sidebar__container flex flex-col items-center justify-center rounded-md">
            <el-tooltip 
                class="item" 
                effect="light" 
                :content="item.title" 
                placement="right">
                <div class="menu-sidebar__icon flex flex-col items-center justify-center">
                    <i :class="item.icon"></i>
                </div>
            </el-tooltip>
            <div class="menu-sidebar__title">{{ item.title }}</div>
        </nuxt-link>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {},
    props: {
        data: null 
    }
})
</script>
