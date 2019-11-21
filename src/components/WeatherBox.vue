<template>
    <div class="weather-box">
        <transition name="fade-in">
            <div class="weather-card" v-if="status">
                <b class="close" @click="toggleWeather(false)">×</b>
                <iframe :src="url" frameborder="0"></iframe>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'WeatherBox',
    data () {
        return {
            status: false,
            url: $.path.weather
        }
    },
    methods: {
        toggleWeather (status) {
            this.status = status
        }
    }
}
</script>

<style lang="scss">
    .weather-box {
        .weather-card {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba($color: #000, $alpha: 0.8);
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
                background-color: #fff;
                cursor: pointer;
            }
            iframe {
                width: 100%;
                max-width: 750px;
                margin: auto;
                height: 100%;
            }
        }
    }
</style>
