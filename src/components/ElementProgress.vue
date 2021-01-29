<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-29 01:17:13
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-29 23:40:13
 * @FilePath: \shuanglong_admin\src\components\ElementProgress.vue
 * @Description: element progress
-->

<template>
  <div class="element-progress">
    <h1>ElementPlus progress testing !</h1>
    <div style="">
        <el-progress :percentage="50"></el-progress>
        <el-progress :percentage="100" :format="format"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="100" status="warning"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
    </div>

    <div>
        <br>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
        <br>
        <el-progress :text-inside="true" :stroke-width="25" :percentage="100" status="success"></el-progress>
        <br>
        <el-progress :text-inside="true" :stroke-width="30" :percentage="80" status="warning"></el-progress>
        <br>
        <el-progress :text-inside="true" :stroke-width="35" :percentage="50" status="exception"></el-progress>
        <br>
    </div>

    <el-progress :percentage="percentage" :color="customColor"></el-progress>
    <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
    <el-progress :percentage="percentage" :color="colors"></el-progress>

    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="70" status="warning"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>

    <div><el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress></div>
    <div>
        <el-button-group>
            <el-button icon="el-icon-minus" @click="onPercentDecrease"></el-button>
            <el-button icon="el-icon-plus" @click="onPercentIncrease"></el-button>
        </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ElementProgress',
    data () {
        return {
            percentage: 10,
            customColor: '#409eff',
            colors: [
                { color: '#f56c6c', percentage: 20 },
                { color: '#e6a23c', percentage: 40 },
                { color: '#5cb87a', percentage: 60 },
                { color: '#1989fa', percentage: 80 },
                { color: '#6f7ad3', percentage: 100 }
            ]
        }
    },
    methods: {
        customColorMethod (percentage) {
            if (percentage < 30) {
                return '#909399'
            } else if (percentage < 70) {
                return '#e6a23c'
            } else {
                return '#67c23a'
            }
        },
        format (percentage) {
            return percentage === 100 ? '满' : `${percentage}%`
        },
        onPercentIncrease () {
            this.percentage = this.percentage + 5
            if (this.percentage > 100) {
                this.percentage = 100
            }
        },
        onPercentDecrease () {
            this.percentage = this.percentage - 5
            if (this.percentage < 0) {
                this.percentage = 0
            }
        }
    }
}
</script>
