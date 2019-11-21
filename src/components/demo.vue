<template>
    <div class="demo">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'Demo',
    data () {
        return {
           text: '示例' 
        }
    }
}
</script>

<!-- 加 "scoped" 属性，样式会被组件私有化 -->
<style lang="scss">

</style>
