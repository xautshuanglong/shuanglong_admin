<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-29 00:51:40
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-30 10:40:13
 * @FilePath: \shuanglong_admin\src\components\element_ui\ElementButton.vue
 * @Description: ElementPlus Button
-->
<template>
  <div class="element-button">
    <h1>{{ title }}</h1>
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
        }
    }
}
</script>
