<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-29 00:51:40
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-30 10:48:08
 * @FilePath: \shuanglong_admin\src\components\element_ui\ElementSelector.vue
 * @Description: ElementPlus Selector
-->
<template>
  <div class="element-selector">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
    name: 'ElementSelector',
    props: {
        title: String
    },
    data () {
        return {
        }
    }
}
</script>
