<template>
    <div class="foundation__chat-list flex flex-col">
        <div v-for="(item, i) in data" :key="i">
            <div 
                v-if="isNewMessage(item)" 
                class="foundation__chat-space new-message">
                <div class="line">
                    <div class="label font-sans font-semibold text-custom__size-16px">New Message</div>
                </div>
            </div>
            <div 
                v-if="
                    i !== 0 &&
                    !isNewMessage(item) && 
                    isDateVisible(data[i], data[i + 1])" 
                class="foundation__chat-space">
                <div class="line">
                    <div class="label font-sans font-semibold text-custom__size-16px">{{ item.date }}</div>
                </div>
            </div>
            <div :class="`foundation__chat-card ${isOwner(item) ? 'owner' : 'client'}`">
                <div  
                    :class="`font-sans font-semibold text-custom__size-14px ${isOwner(item) ? 'text-right' : 'text-left'}`"
                    :style="`color: ${getColor(item).font};`">
                    {{ isOwner(item) ? 'You' : item.name }}
                </div>
                <div :class="`m-custom__t-4px flex ${isOwner(item) ? 'flex-row-reverse justify-start' : 'flex-row justify-start'}`">
                    <div class="message" :style="`background-color: ${getColor(item).background};`">
                        <div class="font-sans text-custom__color-gray text-custom__size-14px">{{ item.body }}</div>
                        <div class="font-sans text-custom__color-gray text-custom__size-14px m-custom__t-8px">{{ item.time }}</div>
                    </div>
                    <el-popover
                        placement="bottom-start"
                        width="80"
                        trigger="click"
                        popper-class="foundation-custom-popover">
                        <div class="w-full">
                            <div v-if="isOwner(item)" class="w-full">
                                <div class="w-full">
                                    <el-button class="btn-custom__transparent btn-custom__no-border btn-custom__align-left btn-custom__no-radius w-full">
                                        <span class="font-sans text-custom__color-blue">Edit</span>
                                    </el-button>
                                </div>
                                <div class="w-full p-custom__b-4px m-custom__b-4px border-b"></div>
                                <div class="w-full">
                                    <el-button class="btn-custom__transparent btn-custom__no-border btn-custom__align-left btn-custom__no-radius w-full">
                                        <span class="font-sans text-custom__color-red">Delete</span>
                                    </el-button>
                                </div>
                            </div>
                            <div v-else class="w-full">
                                <div class="w-full">
                                    <el-button class="btn-custom__transparent btn-custom__no-border btn-custom__align-left btn-custom__no-radius w-full">
                                        <span class="font-sans text-custom__color-blue">Share</span>
                                    </el-button>
                                </div>
                                <div class="w-full p-custom__b-4px m-custom__b-4px border-b"></div>
                                <div class="w-full">
                                    <el-button class="btn-custom__transparent btn-custom__no-border btn-custom__align-left btn-custom__no-radius w-full">
                                        <span class="font-sans text-custom__color-blue">Reply</span>
                                    </el-button>
                                </div>
                            </div>
                        </div>
                        <template #reference>
                            <el-button class="btn-custom__transparent btn-custom__txt-black btn-custom__no-border" circle>
                                <i class="fa fa-lw fa-ellipsis-h"></i>
                            </el-button>
                        </template>
                    </el-popover>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        id: {
            default: null,
            required: true,
        },
        selected: {
            default: null,
            required: true,
        },
        data: {
            default: [],
            required: true,
        }
    },
    methods: {
        isOwner(data) {
            return this.id === parseInt(data.userId) ? true : false 
        },
        isNewMessage(data) {
            return data.status === 'unread' ? true : false
        },
        isDateVisible(prevDate, curDate) {
            let status = true
            let previousDate = prevDate && prevDate.date ? true : false
            let currentDate = curDate && curDate.date ? true : false
            if (previousDate === currentDate) {
                status = false 
            }
            return status 
        },
        getColor(data) {
            const colors = [
                {
                    font: '#9B51E0',
                    background: '#EEDCFF'
                },
                {
                    font: '#E5A443',
                    background: '#FCEED3'
                },
                {
                    font: '#43B78D',
                    background: '#D2F2EA'
                }, 
                {
                    font: '#2F80ED',
                    background: '#F8F8F8'
                }
            ]
            if (this.isOwner(data)) {
                return colors[0]
            } else {
                if (this.selected.isGroupChannel) {
                    if (data.status === 'read') {
                        return colors[1]
                    } else {
                        return colors[2]
                    }
                } else {
                    return colors[3]
                }
            }
        }
    }
})
</script>