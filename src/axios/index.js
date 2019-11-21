import axios from 'axios'
import md5 from 'js-md5'
import Qs from 'qs'
import { status, error } from './error'
import path from './path'

// Promise finally polyfill
if(!Promise.prototype.finally) {
    Promise.prototype.finally = callback => {
        let _self = this.constructor
        return this.then(
            data => _self.resolve(callback()).then(() => data),
            err => _self.resolve(callback()).then(() => { throw err })
        )
    }
}

// axios 简单封装
axios.defaults.retry = 4
axios.defaults.timeout = 5000
axios.defaults.retryDelay = 1000

// axios.defaults.baseURL =''

//http request 拦截器
axios.interceptors.request.use(
    config => {
        Object.assign(config.headers, {
            'Content-Type': 'application/x-www-form-urlencoded'
        })
        return config
    }
)

//http response 拦截器
axios.interceptors.response.use(
    response => {
        // 请求数据返回
        let data = response.data
        if (typeof data == 'string') {
            data = JSON.parse(data)
        }
        return Promise.resolve(response)
    },
    error => {
        // 连接状态返回
        if (error) {
            let err = undefined

            if (error.response) err = status[err.response.status || 'default']
            else err = error.toString()

            alert(err)
        }
    }
)



/**
 * ajax方法
 * @param url
 * @param params
 * @param method
 * @param config axios的配置项，可定义请求头信息等
 * @return {Promise}
 */

const Ajax = (url, params, method, config) => {

    let ajax = new Promise((resolve, reject) => {

        let cfg = {
            url,
            method
        }

        if (method === 'post') {
            cfg.data = Qs.stringify(params)
        } else {
            cfg.params = params
        }

        if (typeof(config) == 'object') {
            Object.assign(cfg, config)
        }

        axios.request(cfg).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })

    ajax.always = (callback = new Function) => {
        console.log(this)
    }

    return ajax
}

window.$ = {
        get(url, params = {}, config) {
            return Ajax(url, params, 'get', config)
        },
        post(url, params = {}, config) {
            return Ajax(url, params, 'post', config)
        },

        // 加载脚本
        getScript(url, callback) {

            return new Promise(resolve => {

                let script = document.createElement('script')
                script.type = 'text/javascript'
                script.async = 'async'
                script.charset = 'UTF-8'
                script.src = url


                script.addEventListener('load', () => {
                    resolve()
                    typeof(callback) == 'function' && callback()
                }, false)

                script.addEventListener('error', () => {
                    this.error()
                }, false)

                document.head.appendChild(script)

            })

        },
        // 抛出path
        path,
        // 提供合并obj的功能
        extend: Object.assign,

        /**
         * 错误提示方法
         * @param {Object} data 发生错误的数据对象
         * @param {Boolean} showClose 是否显示关闭按钮
         */
        error(data = {}) {

            alert(`${data.message || data.msg || 'Error: Network Error'}${data.code ? `[code:${data.code}]`: ''}`)
    }
}