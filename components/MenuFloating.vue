<template>
    <div>
        <foundation-task v-if="pathMenu === 'task'"></foundation-task>
        <foundation-inbox v-if="pathMenu === 'inbox'" @onClose="onClose"></foundation-inbox>
        <div :class="`
            menu-floating 
            ${visbleMenuFloating && 'show'} 
            ${pathMenu 
                ? pathMenu === 'inbox' 
                    ? 'path-active-inbox' 
                    : 'path-active-todo'
                : ''} 
            flex items-center
        `">
            <el-button 
                :class="`
                    menu-button 
                    menu-todo 
                    btn-custom__big-circle 
                    ${pathMenu === 'task' ? 'btn-custom__active' : ''}
                    ${pathMenu === 'task' ? 'btn-custom__orange' : ''}
                    ${pathMenu === 'task' ? 'active' : ''}
                    m-custom__l-26px
                `" 
                circle
                @click="openMenuButton('task')">
                <img v-if="pathMenu === 'task'" src="~/assets/icons/svgs/icon-todo-active.svg" />
                <img v-else src="~/assets/icons/svgs/icon-todo-inactive.svg" />
                <span v-if="!pathMenu" class="btn-custom__label-floating font-sans font-semibold text-custom__size-14px text-custom__color-black">Task</span>
            </el-button>
            <el-button 
                :class="`
                    menu-button 
                    menu-inbox 
                    btn-custom__big-circle 
                    ${pathMenu === 'inbox' ? 'btn-custom__active' : ''}
                    ${pathMenu === 'inbox' ? 'btn-custom__purple' : ''}
                    ${pathMenu === 'inbox' ? 'active' : ''}
                    m-custom__l-26px
                `" 
                circle
                @click="openMenuButton('inbox')">
                <img v-if="pathMenu === 'inbox'" src="~/assets/icons/svgs/icon-inbox-active.svg" />
                <img v-else src="~/assets/icons/svgs/icon-inbox-inactive.svg" />
                <span v-if="!pathMenu" class="btn-custom__label-floating font-sans font-semibold text-custom__size-14px text-custom__color-black">Inbox</span>
            </el-button>
            <el-button 
                :class="`
                    action-button 
                    btn-custom__big-circle 
                    btn-custom__active 
                    btn-custom__blue 
                    m-custom__l-26px
                `" 
                circle
                @click="openMenuFloating">
                <img src="~/assets/icons/svgs/icon-cloud-lightning.svg" />
            </el-button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            pathMenu: '',
            visbleMenuFloating: false,
        }
    },
    methods: {
        openMenuButton(value = '') {
            this.pathMenu = value 
        },
        openMenuFloating() {
            if (this.visbleMenuFloating) {
                this.onClose()
            } else {
                this.visbleMenuFloating = true
            }
        },
        onClose() {
            this.visbleMenuFloating = false 
            this.pathMenu = ''
        }
    }
})
</script>