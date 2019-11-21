import Vue from 'vue'

// 引用公共文件
import '~/js/common'

// 异步页面模块
import templete from 'view/Index.vue'

// 初始化函数，传入模板和是否检测提审状态
new Vue({
    render: h => h(templete)
}).$mount('#app')