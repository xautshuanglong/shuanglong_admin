<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-29 23:12:51
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
                        <template v-slot:title><i class="el-icon-message"></i>页面布局</template>
                        <el-menu-item index="/webui/element-empty">空白页面</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <el-menu-item index="1-4">选项4</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template v-slot:title><i class="el-icon-menu"></i>交互控件</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-menu-item index="2-4">选项4</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template v-slot:title><i class="el-icon-setting"></i>数据展示</template>
                        <el-menu-item index="/webui/element-datatable" >数据表格</el-menu-item>
                        <el-menu-item index="/webui/element-pagination">数据分页</el-menu-item>
                        <el-menu-item index="/webui/element-progress"  >进度显示</el-menu-item>
                        <el-menu-item index="3-4" :disabled=true>选项4</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template v-slot:title><i class="el-icon-setting"></i>过渡动画</template>
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
                    <span>Shuanglong</span>
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import ElementDataTable from '@/components/ElementDataTable.vue'
import ElementEmpty from '@/components/ElementEmpty.vue'
import ElementPagination from '@/components/ElementPagination.vue'
import ElementProgress from '@/components/ElementProgress.vue'

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
        return {}
    },
    mounted () {
        console.log('WebUI --> mounted !')
        console.log('route=', this.$route)
        console.log('route.path=', this.$route.path)
        console.log('route.query=', this.$route.query)
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
