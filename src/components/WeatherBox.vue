<template>
    <div class="weather-box">
        <a class="btn btn-weather" :style="radius" @click="toggleWeather(true)"><span class="celsius">{{ now.tmp || '--' }}°</span>{{ basic.location || '--' }}</a>
        <transition name="fade-in">
            <div class="weather-card" v-if="status">
                <div class="cover" @click="toggleWeather(false)"></div>
                <div class="card">
                    <div class="row">
                        <div class="location pull-left">
                            {{ basic.admin_area + basic.parent_city + (basic.parent_city == basic.location ? '' : basic.location) }}
                            <span class="link" @click="setlocation(`请输入你的所在位置 ( 不输入 = 获取ip位置 )`)">切换</span>
                        </div>
                        <div class="pull-right"><a class="link" href="https://heweather.com" target="_blank">@和风天气</a></div>
                    </div>
                    <div class="row">
                        <div class="temp pull-left">
                            <img class="ic-cond" :src="weatherIc(now.cond_code + getCond())">
                            <div class="text">
                                <div class="num">{{ now.tmp || '--' }}°</div>
                                {{ now.cond_txt || '--' }}
                            </div>
                        </div>
                        <div class="wind pull-righ">
                            <span class="btn-brf">{{ lifestyle[0].brf || '--' }}</span>
                            <div>{{ now.wind_dir + now.wind_sc + '级' }}</div>
                            <div>相对湿度{{ now.hum }}</div>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="row">
                        <div class="forecast">
                            <div
                                v-for="(item, idx) in daily_forecast"
                                :key="idx"
                                class="item">
                                <div class="date">{{ idx == 0 ? '今天' : shortTime(item.date) }}</div>
                                <img class="ic-cond" :src="weatherIc(item['cond_code_' + getCond()] + getCond())">
                                <div class="tmp">{{ item.tmp_min }}°/{{ item.tmp_max }}°</div>
                            </div>
                        </div>
                    </div>
                </div>
                <b class="close" @click="toggleWeather(false)">×</b>
            </div>
        </transition>
    </div>
</template>

<script>

import { cookie } from '~/js/utils'

export default {
    name: 'WeatherBox',
    data () {
        let tmp = {}
        return {
            status: false,
            param: {
                location: '',
                key: '7f3c55309e6b466fa8ac4ac7c808f34d'
            },
            basic: tmp,
            daily_forecast: [],
            lifestyle: [tmp],
            now: tmp,
            update: tmp
        }
    },
    props: ['radius'],
    methods: {
        getCond () {
            let mark = new Date().getHours() > 18 ? 'n' : 'd'
            return mark
        },
        weatherIc (code) {
            return $.path.weather_ic + code + '.png'
        },
        shortTime (time) {  
            return time.substr(5)
        },
        toggleWeather (status) {

            if(!this.now.tmp) {
                alert('还没准备好~')
                return
            }

            this.status = status
        },
        setlocation (local) {

                if(!local) {
                    local = 'auto_ip'
                } else {
                    local = prompt(local)
                    if(!local) local = 'auto_ip'
                }

                this.param.location = local
                cookie.set('location', local, 7)

                this.getWeather()
        },
        geolocation () {
            
            return new Promise ((resolve, reject) => {
                
                let local = cookie.get('location')
                if(local) resolve(local)

                if(!navigator.geolocation) {
                    reject('你的浏览器不支持自动定位服务！')
                }
                navigator.geolocation.getCurrentPosition(({ coords }) => {

                    let { longitude, latitude } = coords

                    if(longitude === undefined || longitude < 0 || latitude === undefined || latitude < 0) {
                        reject('无法获取到正确位置！')
                    }

                    local = `${longitude},${latitude}`

                    cookie.set('location', local, 7)
                    resolve(local)

                }, ({ message }) => {
                    reject(message || '浏览器拒绝提供位置服务！')
                })

                setTimeout(() => {
                    reject('自动获取位置超时，取消任务')
                }, 1e3);
            })
        },
        getWeather () {
            console.dir('开始获取天气')
            $.get($.path.weather, this.param).then(({ HeWeather6 }) => {

                console.dir('天气信息请求成功')

                let { basic, daily_forecast, lifestyle, now, status, update } = HeWeather6.pop()

                if(status == 'ok') {
                    
                    this.basic = basic
                    this.lifestyle = lifestyle
                    this.daily_forecast = daily_forecast
                    this.now = now
                    this.update = update

                }
            }).catch(() => {

                console.error('天气信息请求失败')

                this.now.tmp = '--'
            })
        }
    },
    mounted () {
            this.geolocation().then(coords => {

                // 获取到浏览器提供的位置信息
                console.log(`自动获取位置${coords}`)

                this.param.location = coords
                this.getWeather()

            }).catch(err => {

                // 未获取到浏览器提供的位置信息，转入手动设置
                console.error(err)
                this.setlocation()
                
            })
    }
}
</script>

<style lang="scss">
    .weather-box {
        font-size: 0;
        .weather-card {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba($color: #000, $alpha: 0.6);
            .cover {
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                position: absolute;
            }
            .close {
                display: block;
                width: 40px;
                height: 20px;
                line-height: 14px;
                margin-left: -20px;
                position: absolute;
                top: 0;
                left: 50%;
                text-align: center;
                text-shadow: 0 0 2px #ccc;
                font-size: 16px;
                border-radius: 0 0 20px 20px;
                box-shadow: 0 0 4px #ccc;
                color: #000;
                background-color: rgba($color: #fff, $alpha: 0.6);;
                cursor: pointer;
            }
            .card {
                width: 100%;
                max-width: 592px;
                padding: 32px 16px 10px;
                top: 0;
                left: 50%;
                transform: translate3d(-50%,0,0);
                font-size: 16px;
                box-shadow: 0 0 4px #ccc;
                position: absolute;
                background-color: #fff;
                .hr {
                    height: 1px;
                    background-color: #f0f0f0;
                }
                .link {
                    color: #f69
                }
                .text {
                    display: inline-block;
                    vertical-align: top;
                }
                .temp {
                    margin-top: 24px;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 100;
                    .ic-cond {
                        width: 54px;
                        height: auto;
                        margin: auto 10px auto auto;
                    }
                    .num {
                        margin: 4px auto 3px;
                        font-size: 20px;
                        font-weight: 300;
                    }
                }
                .wind {
                    line-height: 1.1;
                    margin: 28px auto 24px;
                    direction: rtl;
                    text-align: right;
                    font-size: 12px;
                    .btn-brf {
                        display: inline-block;
                        padding: 2px 10px;
                        margin-bottom: 4px;
                        border-radius: 12px;
                        color: #fff;
                        background-color: rgb(255, 157, 30)
                    }
                }
                .forecast {
                    overflow-x: auto;
                    margin: 24px auto 14px;
                    font-size: 0;
                    white-space: nowrap;
                    .item {
                        display: inline-block;
                        width: 22.5%;
                        .date {
                            font-size: 14px;
                        }
                        .ic-cond {
                            width: 24px;
                            height: auto;
                            margin: 12px auto;
                        }
                        .tmp {
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
    @media(min-width: 592px) {
        .weather-box {
            .weather-card {
                .card {
                    .forecast {
                        .item {
                            width: 80px;
                        }
                    }
                }
            }
        }
    }
</style>
