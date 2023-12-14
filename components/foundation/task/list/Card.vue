<template>
    <div class="foundation__card-task-list flex">
        <div class="checkbox">
            <el-checkbox v-model="data.completed"></el-checkbox>
        </div>
        <div class="info">
            <div class="flex justify-between">
                <div v-if="!data.completed" class="w-custom__60">
                    <div v-if="!data.completed && data.createMode">
                        <el-input 
                            v-model="data.title"
                            class="w-full"
                            placeholder="Type Task Title"
                            size="large"
                            @change="onSubmit('title')"></el-input>
                        <div class="font-sans text-custom__size-12px text-custom__color-red">
                            Type enter to save all changes.
                        </div>
                    </div>
                    <div 
                        v-else 
                        class="font-sans font-semibold text-custom__size-16px text-custom__color-black"
                        @click="editMode.title = data.completed ? false : true">
                        {{  data.title ? data.title : 'No Title'  }}
                    </div>
                </div>
                <div v-else class="w-custom__55">
                    <div class="font-sans line-through text-custom__size-14px text-custom__color-gray">
                        {{  data.title  }}
                    </div>
                </div>
                <div class="w-custom__45 flex justify-end">
                    <div v-if="!data.completed" class="font-sans text-custom__size-14px text-custom__color-red">
                        {{ data.checkedDate ? $dayjs(data.checkedDate).fromNow() : '' }}
                    </div>
                    <div class="font-sans text-custom__size-14px text-custom__color-gray m-custom__l-20px">
                        {{ data.checkedDate ? $dayjs(data.checkedDate).format('DD/MM/YYYY') : '' }}
                    </div>
                    <el-button 
                        class="btn-custom__transparent btn-custom__small-circle btn-custom__no-border m-custom__l-10px" 
                        circle
                        @click="visibleCollapse = !visibleCollapse">
                        <i :class="`fa fa-lw ${visibleCollapse ? 'fa-chevron-up' : 'fa-chevron-down'}`"></i>
                    </el-button>
                    <el-popover
                        placement="bottom-end"
                        width="80"
                        trigger="click"
                        v-model="visibleMoreMenu"
                        popper-class="foundation-custom-popover">
                        <div class="w-full">
                            <el-button 
                                class="btn-custom__transparent btn-custom__no-border btn-custom__align-left btn-custom__no-radius w-full"
                                @click="onDelete(data.id)">
                                <span class="font-sans text-custom__color-red">Delete</span>
                            </el-button>
                        </div>
                        <template #reference>
                            <el-button 
                                class="btn-custom__transparent btn-custom__small-circle btn-custom__no-border m-custom__l-10px" 
                                circle >
                                <i class="fa fa-lw fa-ellipsis-h"></i>
                            </el-button>
                        </template>
                    </el-popover>
                </div>
            </div>
            <div v-if="visibleCollapse" class="w-custom__90">
                <div class="flex items-center p-custom__t-10px p-custom__b-10px">
                    <div class="w-custom__5">
                        <i class="far fa-lw fa-clock text-custom__color-blue"></i>
                    </div>
                    <div class="w-custom__95 flex">
                        <el-date-picker 
                            v-if="!data.completed"
                            v-model="data.checkedDate"
                            type="date"
                            placeholder="Set Date"
                            size="large">
                        </el-date-picker>
                        <div 
                            v-else 
                            class="font-sans text-custom__size-14px text-custom__color-gray"
                            @click="editMode.checkedDate = data.completed ? false : true">
                            {{ data.checkedDate ? $dayjs(data.checkedDate).format('DD/MM/YYYY') : 'No Date' }}
                        </div>
                    </div>
                </div>
                <div class="flex p-custom__b-10px">
                    <div class="w-custom__5">
                        <i class="fa fa-lw fa-pencil-alt text-custom__color-blue"></i>
                    </div>
                    <div class="w-custom__95 flex">
                        <form-action-floating 
                            v-if="editMode.description"
                            class="w-full"
                            @onSubmit="onSubmit('description')">
                            <el-input 
                                v-model="data.description"
                                type="textarea"
                                :rows="3"
                                placeholder="Description"></el-input>
                            <div class="font-sans text-custom__size-12px text-custom__color-red">
                                Click check button to save all changes.
                            </div>
                        </form-action-floating>
                        <el-tooltip 
                            v-else 
                            class="item" 
                            effect="dark" 
                            content="Click here to change the description." 
                            placement="bottom-start">
                            <div 
                                class="font-sans text-custom__size-14px text-custom__color-gray"
                                @click="editMode.description = data.completed ? false : true">
                                {{ data.description ? data.description : 'No Description' }}
                            </div>
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {
            visibleCollapse: true,
            visibleMoreMenu: false,
            editMode: {
                title: false,
                checkedDate: false,
                description: false,
            },
        }
    },
    props: {
        data: {
            default: null,
            required: true,
        },
        total: {
            default: 0
        }
    },
    methods: {
        onSubmit(value) {
            if (value === 'title') {
                this.editMode.title = false
                this.data.createMode = false
            }
            if (value === 'checkedDate') {
                this.editMode.checkedDate = false
            }
            if (value === 'description') {
                this.editMode.description = false
            }
        },
        onDelete(id) {
            this.$emit('onDelete', id)
            this.visibleMoreMenu = false
        }
    }
})
</script>