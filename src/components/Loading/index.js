import Templete from './index.vue'

let Loading = {}


Loading.install = Vue => {

    const Constructor = Vue.extend(Templete)

    // create
    const loading = new Constructor().$mount()
    document.body.appendChild(loading.$el)

    Vue.prototype.$loading = window.$loading = {

        show() {
            loading.show()
        },
        hide() {
            loading.hide()
        }

    }
}

export default Loading