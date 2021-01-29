<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-29 00:51:40
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-29 18:35:47
 * @FilePath: \shuanglong_admin\src\components\ElementPagination.vue
 * @Description: ElementPlus data pagination
-->
<template>
  <div class="element-pagination">
    <h1>{{ title }}</h1>
    <div>
        <p>每页大小： {{ this.pageSize }}</p>
        <p>当前页码： {{ this.pageNumber }}</p>
    </div>
    <el-pagination layout="prev, pager, next" :total="50" small></el-pagination>
    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    <el-pagination layout="prev, pager, next" :total="500"></el-pagination>
    <el-pagination layout="prev, pager, next" :total="500" background></el-pagination>
    <el-pagination layout="total, prev, pager, next, sizes, jumper" :total="500" background></el-pagination>
    <el-switch v-model="hideSinglePage" active-text="单页隐藏" inactive-text="单页显示"></el-switch>
    <el-pagination layout="prev, pager, next" :total="10" :hide-on-single-page="hideSinglePage"></el-pagination>
  </div>
</template>

<script>
export default {
    name: 'ElementPagination',
    props: {
        title: String
    },
    data () {
        return {
            pageSize: 0,
            pageNumber: 0,
            hideSinglePage: false
        }
    }
}
</script>
