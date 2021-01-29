<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-29 00:51:40
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-29 17:24:29
 * @FilePath: \shuanglong_admin\src\components\ElementPagination.vue
 * @Description: ElementPlus data pagination
-->
<template>
  <div class="element-pagination">
    <h1>{{ title }}</h1>
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
    name: 'ElementPagination',
    props: {
        title: String
    },
    data () {
        const item = {
            date: '2021-01-01',
            name: '双龙',
            address: '广东省深圳市南山区'
        }
        return {
            tableData: Array(20).fill(item)
        }
    }
}
</script>
