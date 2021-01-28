<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-29 01:00:09
 * @FilePath: \shuanglong_admin\src\views\WebUI.vue
 * @Description: WebUI 测试入口
-->
<template>
    <div class="WebUI">
        <el-container style="height: 700px; border: 1px solid blue;">
            <el-aside style="width:220px;">
                <span style="font-size: 24px; line-height: 60px;">WebUI</span>
                <el-menu :default-openeds="['1']">
                <el-submenu index="1">
                    <template v-slot:title><i class="el-icon-message"></i>页面布局</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-4">选项4</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template v-slot:title><i class="el-icon-menu"></i>交换控件</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-4">选项4</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template v-slot:title><i class="el-icon-setting"></i>过渡动画</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                    <el-menu-item index="3-4">选项4</el-menu-item>
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
                    <span>王小虎</span>
                </el-header>
                <el-main>
                    <!-- <router-view/> -->
                    <ElementDataTable msg="ElementPlus Data Table Testing"/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import ElementDataTable from '@/components/ElementDataTable.vue'

export default {
    name: 'WebUI',
    components: {
        ElementDataTable
    },
    data () {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }
        return {
            tableData: Array(20).fill(item)
        }
    },
    mounted () {
        console.log('WebUI --> mounted !')
    }
}
</script>

<style>
  .el-header {
    background-color: #5658f8b6;
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
