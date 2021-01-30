<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-29 00:51:40
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-29 22:47:05
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
    <el-pagination layout="prev, pager, next" :total="500" :page-size="pageSize" :current-page="pageNumber"
        @size-change="onPageSizeChanged" @current-change="onCurrentPageChanged" />
    <el-pagination layout="prev, pager, next" :total="500" :page-size="pageSize" :current-page="pageNumber" background
        @size-change="onPageSizeChanged" @current-change="onCurrentPageChanged"  />
    <el-pagination layout="total, prev, pager, next, sizes, jumper" background :total="500"
        :page-size="pageSize" :current-page="pageNumber"
        @size-change="onPageSizeChanged" @current-change="onCurrentPageChanged" />
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
            pageSize: 10,
            pageNumber: 0,
            hideSinglePage: false
        }
    },
    methods: {
        onPageSizeChanged (pageSize) {
            // console.log('page size changed :', pageSize)
            this.pageSize = pageSize
        },
        onCurrentPageChanged (pageNumber) {
            // console.log('current page changed :', pageNumber)
            this.pageNumber = pageNumber
        }
    }
}
</script>
