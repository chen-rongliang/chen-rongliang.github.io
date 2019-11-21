<template>
    <base-layout>
        <div class="widget google"></div>
        <!-- 搜索盒子 -->
        <search-box />
        <!-- 天气盒子 -->
        <weather-box ref="weather"/>
        <div class="toolbar">
            {{ radius }}
            <a class="btn btn-weather" :style="radius[0]" @click="weather">天气</a>
            <a class="btn btn-qrcode" :style="radius[1]" href="https://cli.im/">二维码</a>
            <a class="btn btn-apk" :style="radius[2]" href="https://apkcombo.com/zh-cn/apk-downloader/">软件</a>
        </div>
    </base-layout>
</template>

<script>

import WeatherBox from 'components/WeatherBox'
import SearchBox from 'components/SearchBox'

export default {
    name: 'Index',
    data () {
        return {
            radius: [],
        }
    },
    components: {
        WeatherBox,
        SearchBox
    },
    methods: {
        weather () {
            this.$refs.weather.toggleWeather(true)
        },
        random () {
            // 指定范围随机整数 m ~ n，公式：Math.floor(Math.random()*(n-m))+m 
            return  (50 + (Math.floor(Math.random()*(20)) - 10)) + '%'
        },
        setRadius () {
            // 随机圆角
            let Styles = []
            for(let i = 0; i < 3; i++) {
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