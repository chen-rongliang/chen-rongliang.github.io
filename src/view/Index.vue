<template>
    <base-layout>
        <div class="widget google"></div>
        <!-- 搜索盒子 -->
        <search-box />
        <div class="toolbar">
            <!-- 天气盒子 -->
            <weather-box :radius="radius[0]"/>
            <a class="btn btn-qrcode" :style="radius[1]" :href="qrcode">{{ qrcodeTxt }}</a>
            <a class="btn btn-apk" v-if="isAndroid" :style="radius[2]" href="https://apkcombo.com/zh-cn/apk-downloader/">软件</a>
            <a class="btn btn-music" :style="radius[3]" href="http://music.y444.cn/">音乐</a>
        </div>
    </base-layout>
</template>

<script>

import { platform } from '~/js/utils'

import WeatherBox from 'components/WeatherBox'
import SearchBox from 'components/SearchBox'

export default {
    name: 'Index',
    data () {

        let qrcode = 'https://cli.im/',
            qrcodeTxt = '二维码'

        if(platform.isAndroid && platform.isChrome) {
            qrcode = `intent://mark.qrcode/#Intent;scheme=scan;package=mark.qrcode;S.browser_fallback_url=${ encodeURIComponent('https://cli.im/') };end`
            qrcodeTxt = '扫一扫'
        }

        return {
            radius: [],
            isAndroid: platform.isAndroid,
            qrcode,
            qrcodeTxt
        }
    },
    components: {
        WeatherBox,
        SearchBox
    },
    methods: {
        random () {
            // 指定范围随机整数 m ~ n，公式：Math.floor(Math.random()*(n-m))+m 
            return  (50 + (Math.floor(Math.random()*(20)) - 10)) + '%'
        },
        setRadius () {
            // 随机圆角
            let Styles = []
            for(let i = 0; i < 4; i++) {
                Styles[i] = {"borderRadius": `${this.random()} ${this.random()} ${this.random()} ${this.random()}/${this.random()} ${this.random()} ${this.random()} ${this.random()}`}
            }
            this.radius = Styles
        }
    },
    mounted () {

        // 不规则形状
        setInterval(this.setRadius, 3e3)
        this.setRadius()

    }
}
</script>

<style lang="scss" src="~/scss/index.scss"></style>