<!--
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-28 10:34:13
 * @FilePath: \shuanglong_admin\src\views\Home.vue
 * @Description: Home
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    }
}
</script>
