import { platform } from './utils'

export default [
    {
        text: "百度",
        value: "https://www.baidu.com/s?wd="
    },
    {
        text: "谷歌",
        value: "https://www.google.com.hk/search?q="
    },
    {
        text: "知乎",
        value: "https://www.zhihu.com/search?type=content&q="
    },
    {
        text: "淘宝",
        value: `https://s.${platform.isMobile ? "m.taobao.com/h5" : "taobao.com/search"}?q=`
    },
    {
        text: "京东",
        value: `https://${platform.isMobile ? "so.m.jd.com/ware/search.action" : "search.jd.com/Search"}?keyword=`
    }
]