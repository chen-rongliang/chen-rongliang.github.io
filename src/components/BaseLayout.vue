<template>
    <div id="app">
        <slot></slot>
    </div>
</template>

<script>

    // 套壳组件，引入通用样式和字体图标等公用资源，也可写公共逻辑

    // reset
    import '~/scss/reset.scss'

    export default {
        name: 'BaseLayout'
    }
</script>

<!-- vue过渡效果样式 -->
<style lang="scss" src="~/scss/transition.scss"></style>
