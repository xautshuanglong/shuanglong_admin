<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-29 11:33:32
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
                <el-menu :default-openeds="['1']" :default-active="'1-1'" @select="onMenuItemSelect">
                    <el-submenu index="1">
                        <template v-slot:title><i class="el-icon-message"></i>页面布局</template>
                        <el-menu-item index="1-1">空白</el-menu-item>
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
                        <el-menu-item index="3-1">数据表格</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                        <el-menu-item index="3-3">选项3</el-menu-item>
                        <el-menu-item index="3-4">选项4</el-menu-item>
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

export default {
    name: 'WebUI',
    routes: [
        {
            path: '',
            component: ElementEmpty
        },
        {
            path: 'element-empty',
            component: ElementEmpty
        },
        {
            path: 'element-data-table',
            component: ElementDataTable,
            props: {
                msg: 'ElementPlus Data Table Testing'
            }
        }
    ],
    data () {
        return {}
    },
    mounted () {
        console.log('WebUI --> mounted !')
    },
    methods: {
        onMenuItemSelect (index, indexPath) {
            console.log('Index=', index, 'IndexPath=', indexPath)
            if (index === '1-1') {
                this.$router.push('/webui/element-empty')
            } else if (index === '3-1') {
                this.$router.push('/webui/element-data-table')
            }
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
