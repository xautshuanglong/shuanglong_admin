<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-30 23:49:52
 * @FilePath: \shuanglong_admin\src\views\WebUI.vue
 * @Description: WebUI 测试入口
-->
<template>
    <div class="WebUI">
        <el-container style="height: 700px; border: 1px solid blue;">
            <el-aside style="width:220px;">
                <div class="same-as-header">
                    <span style="font-size: 24px; line-height: 60px;">WebUI</span>
                </div>
                <el-menu :default-openeds="['1']" :router=true @select="onMenuItemSelect">
                    <el-submenu index="1">
                        <template v-slot:title><i class="el-icon-star-off"></i>基础控件</template>
                        <el-menu-item index="/webui/element-empty">空白页面</el-menu-item>
                        <el-menu-item index="/webui/element-button">普通按钮</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template v-slot:title><i class="el-icon-notebook-2"></i>表单控件</template>
                        <el-menu-item index="/webui/element-radio">单选按钮</el-menu-item>
                        <el-menu-item index="/webui/element-checkbox">多选按钮</el-menu-item>
                        <el-menu-item index="/webui/element-selector">列表选择</el-menu-item>
                        <el-menu-item index="/webui/element-datetime-picker">日期时间</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template v-slot:title><i class="el-icon-coin"></i>数据控件</template>
                        <el-menu-item index="/webui/element-datatable" >数据表格</el-menu-item>
                        <el-menu-item index="/webui/element-pagination">数据分页</el-menu-item>
                        <el-menu-item index="/webui/element-progress"  >进度显示</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template v-slot:title><i class="el-icon-message"></i>消息组件</template>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>
                        <el-menu-item index="4-3">选项3</el-menu-item>
                        <el-menu-item index="4-4">选项4</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template v-slot:title><i class="el-icon-location-outline"></i>导航组件</template>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>
                        <el-menu-item index="4-3">选项3</el-menu-item>
                        <el-menu-item index="4-4">选项4</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template v-slot:title><i class="el-icon-discover"></i>其他组件</template>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>
                        <el-menu-item index="4-3">选项3</el-menu-item>
                        <el-menu-item index="4-4">选项4</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 20px;">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-top:20px; margin-right: 10px; font-size: 24px;"></i>
                        <template #dropdown>
                            <el-dropdown-menu style="">
                                <el-dropdown-item>查看</el-dropdown-item>
                                <el-dropdown-item>新增</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>Shuanglong {{id}}</span>
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import {
    onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
    onBeforeUnmount, onUnmounted, onActivated, onDeactivated,
    onErrorCaptured, onRenderTracked, onRenderTriggered, ref
} from 'vue'
import ElementEmpty from '@/components/element_ui/ElementEmpty.vue'
import ElementButton from '@/components/element_ui/ElementButton.vue'
import ElementRadio from '@/components/element_ui/ElementRadio.vue'
import ElementCheckbox from '@/components/element_ui/ElementCheckbox.vue'
import ElementSelector from '@/components/element_ui/ElementSelector.vue'
import ElementDateTimePicker from '@/components/element_ui/ElementDateTimePicker.vue'
import ElementDataTable from '@/components/element_ui/ElementDataTable.vue'
import ElementPagination from '@/components/element_ui/ElementPagination.vue'
import ElementProgress from '@/components/element_ui/ElementProgress.vue'

export default {
    name: 'WebUI',
    routes: [
        {
            path: '',
            component: ElementEmpty
        },
        {
            path: 'element-empty',
            name: 'ElementEmpty',
            component: ElementEmpty
        },
        {
            path: 'element-button',
            name: 'ElementButton',
            component: ElementButton,
            props: {
                title: 'ElementPlus Button Testing'
            }
        },
        {
            path: 'element-radio',
            name: 'ElementRadio',
            component: ElementRadio,
            props: {
                title: 'ElementPlus Radio Testing'
            }
        },
        {
            path: 'element-checkbox',
            name: 'ElementCheckbox',
            component: ElementCheckbox,
            props: {
                title: 'ElementPlus Checkbox Testing'
            }
        },
        {
            path: 'element-selector',
            name: 'ElementSelector',
            component: ElementSelector,
            props: {
                title: 'ElementPlus Selector Testing'
            }
        },
        {
            path: 'element-datetime-picker',
            name: 'ElementDateTimePicker',
            component: ElementDateTimePicker,
            props: {
                title: 'ElementPlus Date or Time Picker Testing'
            }
        },
        {
            path: 'element-datatable',
            name: 'ElementDataTable',
            component: ElementDataTable,
            props: {
                title: 'ElementPlus Data Table Testing'
            }
        },
        {
            path: 'element-pagination',
            name: 'ElementPagination',
            component: ElementPagination,
            props: {
                title: 'ElementPlus Data Pagination Testing'
            }
        },
        {
            path: 'element-progress',
            name: 'ElementProgress',
            component: ElementProgress
        }
    ],
    data () {
        console.log('WebUI --> data !')
        return {}
    },
    setup () {
        const id = ref(0)

        console.log('WebUI --> setup !')
        onBeforeMount(() => {
            console.log('WebUI --> setup --> onBeforeMount')
        })
        onMounted(() => {
            console.log('WebUI --> setup --> onMounted')
        })
        onBeforeUpdate(() => {
            console.log('WebUI --> setup --> onBeforeUpdate')
        })
        onUpdated(() => {
            console.log('WebUI --> setup --> onUpdated')
        })
        onBeforeUnmount(() => {
            console.log('WebUI --> setup --> onBeforeUnmount')
        })
        onUnmounted(() => {
            console.log('WebUI --> setup --> onUnmounted')
        })
        onActivated(() => {
            console.log('WebUI --> setup --> onActivated')
        })
        onDeactivated(() => {
            console.log('WebUI --> setup --> onDeactivated')
        })
        onErrorCaptured(() => {
            console.log('WebUI --> setup --> onErrorCaptured')
        })
        onRenderTracked(() => {
            console.log('WebUI --> setup --> onRenderTracked')
        })
        onRenderTriggered(() => {
            console.log('WebUI --> setup --> onRenderTriggered')
        })

        setInterval(() => {
            console.log('WebUI --> timeout change value')
            id.value += 2
        }, 2000)

        return { id }
    },
    beforeCreate () {
        console.log('WebUI --> before create !')
    },
    created () {
        console.log('WebUI --> created !')
    },
    beforeMount () {
        console.log('WebUI --> before mount !')
    },
    mounted () {
        console.log('WebUI --> mounted !')
        console.log('Inside mounted route=', this.$route)
    },
    beforeUpdate () {
        console.log('WebUI --> before update !')
    },
    updated () {
        console.log('WebUI --> updated !')
    },
    beforeUnmount () {
        console.log('WebUI --> before unmount !')
    },
    unmounted () {
        console.log('WebUI --> unmounted !')
    },
    activated () {
        console.log('WebUI --> actived !')
    },
    deactivated () {
        console.log('WebUI --> deactived !')
    },
    renderTracked () {
        console.log('WebUI --> renderTracked !')
    },
    renderTriggered () {
        console.log('WebUI --> renderTriggered !')
    },
    errorCaptured () {
        console.log('WebUI --> error captured !')
    },
    methods: {
        onMenuItemSelect (index, indexPath) {
            console.log('Index=', index, 'IndexPath=', indexPath)
        }
    }
}
</script>

<style>
    .same-as-header {
        background-color: #49b3f0;
    }

    .el-header {
        background-color: #49b3f0;
        color: rgb(56, 55, 55);
        line-height: 60px;
    }

    .el-aside {
        background-color: #73c5f5e8;
    }

    .el-submenu {
        background-color: #c6dcf0e0;
    }

    .el-menu-item {
        background-color: #accbe7e0;
    }
</style>
