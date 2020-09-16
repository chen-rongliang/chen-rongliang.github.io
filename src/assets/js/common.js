// common config
import Vue from 'vue'

// 生产模式关闭开发模式提示
Vue.config.productionTip = process.env.NODE_ENV === 'development'

// 通用ajax组件
// 向window抛出 $ 对象，使用方式和 jQuery api 类似
// 详细看文件文档说明
import '@/axios/'

// layout组件
import BaseLayout from 'components/BaseLayout.vue'
Vue.component("BaseLayout", BaseLayout)

// 全局loading组件
import Loading from 'components/Loading/'
Vue.use(Loading)

// font size 异步模块
import { platform } from '~/js/utils'
const FontSize = () => import ('~/js/font-size')

// 手机端开启rem
platform.isMobile && FontSize().then(module => { module.default() })