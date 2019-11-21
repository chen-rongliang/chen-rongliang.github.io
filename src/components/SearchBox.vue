<template>
    <div class="search-box clearfix">
        <span class="label select" @click="showEngineList">
            {{ Engines[engine]['text'] }}
        </span>
        <select-list :option="Engines" @select="selectEngine" ref="engineList"/>
        <input type="text" class="text" @blur="removeSuggest" @keydown.enter="submit(enterText)" v-model="text" ref="input" placeholder="你要搜点什么？≖‿≖✧">
        <select-list :option="suggest" @select="useSuggest" ref="suggestList"/>
        <button class="submit" @click="submit(text)"></button>
    </div>
</template>

<script>

import SelectList from './SelectList'
import Engines from '~/js/search-engine'
import { cookie } from '~/js/utils'

export default {
    name: 'SearchBox',
    data () {
        return {
            engine: + cookie.get('engine') || 0,
            Engines,
            suggest: [],
            suggestTimeOut: undefined,
            text: '',
        }
    },
    computed: {
        suggestList () {
            return this.$refs.suggestList
        },
        enterText () {
            return this.suggest.length ? this.suggest[0].text : this.text
        }
    },
    components: {
        SelectList
    },
    watch: {
        text (newText, oldText) {
            if(oldText === newText) return
            let tmp = newText.trim()
            if(!tmp) {
                this.suggest = []
                return
            }
            this.getSuggess(tmp)
        }
    },
    methods: {
        getSuggess (text) {
            $.getScript(`${ $.path.suggest }?callback=setSuggess&wd=${text}`)
        },
        useSuggest (idx) {
            this.submit(this.suggest[idx].value)
        },
        removeSuggest () {
            if(this.suggestTimeOut) clearTimeout(this.suggestTimeOut)
            this.suggestTimeOut = setTimeout(() => {
                this.suggestList.toggle(false)
            }, 200)
        },
        showEngineList () {
            this.$refs.engineList.toggle(true, this.engine)
        },
        selectEngine (active) {
            this.engine = active
            cookie.set('engine', active, 365)
        },
        submit (text) {
            location.href = this.Engines[this.engine].value + encodeURIComponent(text)
        }
    },
    mounted () {
        window.setSuggess = ({s}) => {
            let tmp = []
            s.forEach((item, index) => {
                tmp.push({
                    text: item,
                    value: item
                })
            })
            this.suggest = tmp
            this.suggestList.toggle(true)
        }

        // 自动聚焦
        setTimeout(() => {
            this.$refs.input.focus()
        }, 800)

    }
}
</script>

<style lang="scss">
    .search-box {
        width: 90%;
        height: 36px;
        line-height: 36px;
        margin: 10px auto;
        font-size: 0;
        box-shadow: 0 0 5px rgba(70,70,40,.255);
        position: relative;
        
        .label {
            line-height: 24px;
            margin: 6px auto;
            text-align: center;
            text-shadow: 0 0 2px #aaa;
            font-size: 16px;
            border-right: 1px solid #ddd;
            color: #777;
            &.select {
                display: inline-block;
                width: 18%;
                cursor: pointer;
            }
        }
        .select-list {
            width: 100%;
            top: 35px;
            left: 0;
            text-shadow: 0 0 2px #888;
        }
        .text {
            width: 64%;
            height: 36px;
            margin-left: 4%;
            vertical-align: top;
            font-size: 16px;
            border-width: 0;
        }
        .submit {
            display: inline-block;
            width: 14%;
            height: 36px;
            vertical-align: top;
            border-width: 0;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-color: #fff;
            background-image: url(../assets/img/ic-search.gif);
            cursor: pointer;
        }
    }
    @media(min-width: 750px) {
        .search-box {
            height: 48px;
            line-height: 48px;
            .label {
                line-height: 36px;
                margin: 6px auto;
                font-size: 18px;
                &.select {
                    width: 16%;
                }
            }
            .select-list {
                top: 47px;
            }
            .text {
                width: 66%;
                line-height: 48px;
                height: 48px;
                font-size: 18px;
            }
            .submit {
                height: 48px;
            }
        }
    }
</style>
