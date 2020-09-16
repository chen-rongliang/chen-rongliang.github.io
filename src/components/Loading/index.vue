<template>
    <transition :name="effect">
        <div class="site-loading" v-if="loading"></div>
    </transition>
</template>

<script>
import { setTimeout } from 'timers';

export default {
    name: 'SiteLoading',
    data () {
        return {
            loading: false,
            effect: 'fade-in'
        }
    },
    methods: {
        show () {
            this.loading = true
            this.changeEffect('fade-out')
        },
        hide () {
            this.loading = false
            this.changeEffect('fade-in')
        },
        changeEffect (name) {
            setTimeout(() => {
                this.effect = name
            }, 3e2)
        }
    }
}
</script>

<style lang="scss">
    .site-loading {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        background-color: rgba(0,0,0,0.8);
        background-image: url(//sdk-web.eyougame.com/static/img/loading.gif?1576563718214);
        background-position: center;
        background-repeat: no-repeat;
        z-index: 99;
    }
</style>