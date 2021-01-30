<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-29 00:51:40
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-31 01:32:05
 * @FilePath: \shuanglong_admin\src\components\element_ui\ElementButton.vue
 * @Description: ElementPlus Button
-->
<template>
  <div class="element-button">
    <h1>{{ title }}</h1>

    <el-row>
        <el-button @click="onButtonFirstClick">默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
    <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <el-row>
        <el-button icon="el-icon-search" circle plain></el-button>
        <el-button type="primary" icon="el-icon-edit" circle plain></el-button>
        <el-button type="success" icon="el-icon-check" circle plain></el-button>
        <el-button type="info" icon="el-icon-message" circle plain></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle plain></el-button>
        <el-button type="danger" icon="el-icon-delete" circle plain></el-button>
    </el-row>

    <h1 v-if="show_flag">Rerender Testing</h1>
  </div>
</template>

<script>
export default {
    name: 'ElementButton',
    props: {
        title: String
    },
    data () {
        return {
            show_flag: true
        }
    },
    mounted () {
        console.log('WebUI --> ElementButton --> mounted !')
    },
    unmounted () {
        console.log('WebUI --> ElementButton --> unmounted !')
    },
    updated () {
        console.log('WebUI --> ElementButton --> updated !')
    },
    renderTracked ({ key, target, type }) {
        console.log('WebUI --> ElementButton --> renderTracked !', { key, target, type })
    },
    renderTriggered ({ key, target, type }) {
        console.log('WebUI --> ElementButton --> renderTriggered !', { key, target, type })
    },
    methods: {
        onButtonFirstClick () {
            this.show_flag = !this.show_flag
        }
    }
}
</script>

<style scoped>
.el-row {
    margin-top: 10px;
    margin-bottom: 10px; /* element ui 无效: top 和 bottom 合并了高度，并不会出现间隔 20px */
}
</style>
