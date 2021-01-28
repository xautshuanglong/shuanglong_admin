<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-28 19:34:15
 * @FilePath: \shuanglong_admin\src\views\WebUI.vue
 * @Description: WebUI 测试入口
-->
<template>
    <div class="WebUI">
        <el-container style="height: 700px; border: 1px solid #eee">
            <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
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
                        <i class="el-icon-setting" style="margin-right: 15px;"></i>
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
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="日期" width="140">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'WebUI',
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
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: rgb(230, 9, 9);
  }
</style>
