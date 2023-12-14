<template>
    <div class="adl-main">
        <div class="adl-header pl-4 pr-4 bg-custom__white flex flex-row content-center items-center shadow-lg">
            <div class="basis-1/2"></div>
            <div class="basis-1/2 flex flex-row justify-end items-center">
                <notification-popup />
                <div class="border-l pl-2 ml-2">
                    <profile-popup />
                </div>
            </div>
        </div>
        <div class="adl-container">
            <div class="adl-sidebar bg-white shadow-lg">
                <div class="adl-sidebar__header pl-4 pr-4 flex flex-row content-center items-center">
                    <nuxt-link to="/">
                        <h1 class="font-sans font-bold text-xl">NUXT</h1>
                    </nuxt-link>
                </div>
                <div class="adl-sidebar__content p-2">
                    <sidebar-menu-list :data="dataSidebar" />
                </div>
            </div>
            <div class="adl-content">
                <div class="py-4 px-8">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores, mapState, mapActions } from 'pinia'
import { storeUser } from '~/store'

export default defineComponent({
    data() {
        return {
            dataSidebar: [
                { icon: 'fa fa-lg fa-store', title: 'Home', path: '/' },
            ],
        }
    },
    computed: {
        ...mapStores(storeUser),
        ...mapState(storeUser, ['loading', 'user']),
    },
    methods: {
        ...mapActions(storeUser, ['getCurrentUser']),
        onClose() {
            this.$emit('onClose')
        },
    },
    mounted() {
        this.getCurrentUser(1) 
    }
})
</script>
