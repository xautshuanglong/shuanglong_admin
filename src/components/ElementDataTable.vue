<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-29 00:51:40
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-29 11:26:31
 * @FilePath: \shuanglong_admin\src\components\ElementDataTable.vue
 * @Description: ElementPlus data table
-->
<template>
  <div class="element-data-table">
    <h1>{{ msg }}</h1>
    <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    name: 'ElementDataTable',
    props: {
        msg: String
    },
    data () {
        const item = {
            date: '2016-05-02',
            name: '双龙',
            address: '上海市普陀区金沙江路 1518 弄'
        }
        return {
            tableData: Array(20).fill(item)
        }
    }
}
</script>
