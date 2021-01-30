<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-29 00:51:40
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-30 14:36:37
 * @FilePath: \shuanglong_admin\src\components\element_ui\ElementDateTimePicker.vue
 * @Description: ElementPlus Date or Time Picker
-->
<template>
  <div class="element-datetime-picker">
    <h1>{{ title }}</h1>

    <div style="background: lightgreen">
        <el-time-picker v-model="time1" placeholder="任意时间点"
            :picker-options="{selectableRange: '18:30:00 - 20:30:00'}">
        </el-time-picker>
        <el-time-picker v-model="time2" placeholder="任意时间点" arrow-control
            :picker-options="{selectableRange: '18:30:00 - 20:30:00'}">
        </el-time-picker>
    </div>

    <div style="background: lightgreen; margin-top: 10px;">
        <el-time-picker v-model="rangeTime1" is-range align="left"
            start-placeholder="开始时间" range-separator="至" end-placeholder="结束时间"
            placeholder="选择时间范围">
        </el-time-picker>
        <el-time-picker v-model="rangeTime2" is-range arrow-control
            start-placeholder="开始时间" range-separator="至" end-placeholder="结束时间"
            placeholder="选择时间范围">
        </el-time-picker>
    </div>

    <div style="background: lightgreen; margin-top: 10px;">
        <el-date-picker v-model="date1" type="date"
            placeholder="选择日期">
        </el-date-picker>
        <el-date-picker v-model="date2" align="right" ype="date"
            placeholder="选择日期"
            :disabled-date="onDateCheck" :shortcuts="shortcuts">
        </el-date-picker>
    </div>

  </div>
</template>

<script>
export default {
    name: 'ElementDateTimePicker',
    props: {
        title: String
    },
    data () {
        return {
            time1: new Date(2021, 1, 1, 1, 1, 1),
            time2: new Date(2021, 1, 30, 13, 48, 56),
            rangeTime1: [new Date(2021, 1, 1, 1, 1, 1), new Date(2021, 12, 31, 23, 59, 59)],
            rangeTime2: [new Date(2021, 1, 1, 1, 1, 1), new Date(2021, 12, 31, 23, 59, 59)],
            date1: new Date(2021, 1, 3),
            date2: '2021-6-5',
            shortcuts: [{
                text: 'Today',
                value: new Date()
            }, {
                text: 'Yesterday',
                value: (() => {
                    const date = new Date()
                    date.setTime(date.getTime() - 3600 * 1000 * 24)
                    return date
                })()
            }, {
                text: 'A week ago',
                value: (() => {
                    const date = new Date()
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                    return date
                })()
            }]
        }
    },
    methods: {
        onDateCheck (time) {
            return time.getTime() > Date.now()
        }
    }
}
</script>

<style>
</style>
