<template>
    <div class="foundation__inbox-list">
        <div 
            v-for="(item, i) in filteredData" 
            :key="i" 
            :class="`foundation__card ${i + 1 < filteredData.length && 'border-b'}`"
            @click="onClick(item)">
            <div class="flex">
                <div class="foundation__card-avatar">
                    <div v-if="item.isGroupChannel">
                        <div 
                            v-for="(user, j) in item.filteredUsers.slice(0, 2)" 
                            :key="j" 
                            :class="`foundation__avatar ${j + 1 === item.filteredUsers.length && 'blue'}`"
                            :style="`left: ${j * 17}px`">
                            <i class="far fa-lw fa-user"></i>
                        </div>
                    </div>
                    <div 
                        v-else
                        class="foundation__avatar blue">
                        <span class="font-sans text-custom__color-white">{{ getFirstWord(item.title) }}</span>
                    </div>
                </div>
                <div class="foundation__card-message">
                    <div class="w-full flex">
                        <div class="foundation__card-channel">
                            <div class="font-sans font-semibold text-custom__color-blue text-custom__size-16px">{{ item.title }}</div>
                        </div>
                        <div class="foundation__card-date">
                            <div class="font-sans text-sm text-right text-custom__color-gray text-custom__size-14px">{{ item.date }}</div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div v-if="item.isGroupChannel" class="font-sans font-semibold text-custom__color-gray text-custom__size-14px">{{ item.userName }} :</div>
                        <div class="pr-4">
                            <div class="font-sans text-sm text-custom__color-gray text-custom__size-14px truncate">{{ item.body }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                v-if="item.status === 'unread'" 
                class="foundation__status flex-col justify-center items-center" 
                style="display: flex;">
                <i class="fa fa-1x fa-circle text-custom__color-red"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    computed: {
        filteredData() {
            return this.data && this.data.map((item) => {
                const users = item.users.slice(0, 2)
                return {
                    ...item,
                    filteredUsers: users,
                }
            })
        }
    },
    props: {
        data: {
            default: [],
            required: true,
        }
    },
    methods: {
        getFirstWord(data) {
            return data.length > 0 ? data[0].toUpperCase() : '-'
        },
        onClick(item) {
            this.$emit('onClick', item)
        }
    }
})
</script>