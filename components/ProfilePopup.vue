<template>
    <el-popover
        placement="bottom-end"
        width="260"
        trigger="click">
        <div v-loading="loading" class="w-full">
            <div class="mb-4">
                <div 
                    class="w-20 h-20 mx-auto bg-cover bg-center bg-no-repeat border rounded-full flex flex-col items-center justify-center" 
                    style="background-image: url()">
                    <i class="fa fa-2x fa-image"></i>
                </div>
            </div>
            <div class="mb-4 pb-3 border-b flex flex-col align-center">
                <div class="text-sm text-center text-black">{{ user && user.name }}</div>
                <div class="text-xs text-center text-gray-400">{{ user && user.username }}</div>
                <div class="text-xs text-center text-gray-400">{{ user && user.email }}</div>
            </div>
            <el-button class="btn-custom__icon w-full" size="large" @click="onLogout">
                <i class="left fa fa-lw fa-power-off"></i>
                Logout
            </el-button>
        </div>
        <template #reference>
            <el-button class="btn-custom__transparent btn-custom__txt-black btn-custom__no-border" size="large" circle>
                <i class="fa fa-lw fa-user"></i>
            </el-button>
        </template>
    </el-popover>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores, mapState } from 'pinia'
import { storeUser } from '~/store'

export default defineComponent({
    computed: {
        ...mapStores(storeUser),
        ...mapState(storeUser, ['loading', 'user']),
    },
    methods: {
        onLogout() {
            this.$router.push({path: '/'})
        }
    }
})
</script>
