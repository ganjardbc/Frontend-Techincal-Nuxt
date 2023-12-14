<template>
    <div class="menu-sidebar-list">
        <nuxt-link 
            v-for="(item, i) in data" 
            :key="i" 
            :to="item.path"
            class="menu-sidebar-list__container flex flex-row items-center rounded-md">
            <i class="menu-sidebar-list__icon" :class="item.icon"></i>
            <div class="menu-sidebar-list__title">{{ item.title }}</div>
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
