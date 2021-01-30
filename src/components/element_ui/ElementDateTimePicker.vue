<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-29 00:51:40
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-30 10:47:06
 * @FilePath: \shuanglong_admin\src\components\element_ui\ElementDateTimePicker.vue
 * @Description: ElementPlus Date or Time Picker
-->
<template>
  <div class="element-datetime-picker">
    <h1>{{ title }}</h1>
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
        }
    }
}
</script>
