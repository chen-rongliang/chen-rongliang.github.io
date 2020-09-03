<template>
    <div class="search-box clearfix">
        <span class="label select" @click="showEngineList">
            {{ Engines[engine]['text'] }}
        </span>
        <select-list :option="Engines" @select="selectEngine" ref="engineList"/>
        <input
            type="text"
            class="text"
            @blur="removeSuggest"
            @keydown.enter="quickSubmit"
            @keydown.up="suggestWithKeyBoard(-1)"
            @keydown.down="suggestWithKeyBoard(1)"
            v-model.trim="text"
            ref="input"
            placeholder="你要搜点什么？≖‿≖✧"
        >
        <select-list :option="suggest" @select="useSuggest" ref="suggestList"/>
        <button class="submit" @click="submit"></button>
    </div>
</template>

<script>

import SelectList from './SelectList'
import Engines from '~/js/search-engine'

export default {
    name: 'SearchBox',
    data () {
        return {
            engine: 0,
            Engines,
            suggest: [],
            suggestStatus: false,
            suggestTimeOut: undefined,
            text: '',
            uninput: false,
            uninputIdx: undefined
        }
    },
    computed: {
        input () {
            return this.$refs.input
        },
        suggestList () {
            return this.$refs.suggestList
        }
    },
    components: {
        SelectList
    },
    watch: {
        text (newText, oldText) {
            // 输入监听
            if(oldText === newText) return
            if(!newText) {
                this.suggest = []
                return
            }
            if(this.uninput) {
                // 并非文字按键输入，不做搜索
                this.uninput = false
                return
            }

            // 查找建议
            this.getSuggess(newText)
        }
    },
    methods: {
        getSuggess (text) {
            $.JSONP($.path.suggest, {
                q: text,
                callback: 'setSuggess',
                _: new Date / 1
            })
        },
        useSuggest (idx) {
            this.text = this.suggest[idx].value
            this.submit()
        },
        removeSuggest () {
            if(this.suggestTimeOut) clearTimeout(this.suggestTimeOut)
            this.suggestTimeOut = setTimeout(() => {
                this.suggestStatus = false
                this.suggestList.toggle(this.suggestStatus)
            }, 200)
        },
        suggestWithKeyBoard (arr) {

            if(!this.suggestStatus) return
            if(!this.suggest.length) return

            if(this.uninputIdx === undefined) this.uninputIdx = -1
            this.uninputIdx += arr
            

            if( this.uninputIdx < 0)  this.uninputIdx = this.suggest.length - 1
            else if( this.uninputIdx == this.suggest.length)  this.uninputIdx = 0

            this.uninput = true
            this.suggestList.keyBoard(this.uninputIdx)
        },
        showEngineList () {
            this.$refs.engineList.toggle(null, this.engine)
        },
        selectEngine (active) {
            this.engine = active
        },
        quickSubmit () {
            this.suggestStatus = false
            this.suggestList.toggle(this.suggestStatus)
            this.uninputIdx = undefined
            this.submit()
        },
        submit () {
            if(this.uninputIdx === undefined) location.href = this.Engines[this.engine].value + encodeURIComponent(this.text)
        }
    },
    mounted () {
        window.setSuggess = ({q, r}) => {
            let tmp = []
            if(r instanceof Array) {
                r.forEach(({w}) => {
                    tmp.push({
                        text: w,
                        value: w
                    })
                })
            }
            this.uninputIdx = undefined
            this.suggest = tmp
            this.suggestStatus = true
            this.suggestList.toggle(this.suggestStatus)
            this.suggestList.keyBoard()
        }

        // 自动聚焦
        setTimeout(() => {
            this.input.focus()
        }, 1e3)

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
            background-image: url(//sdk-web.eyougame.com/static/img/ic-search.gif?1576563718214);
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
