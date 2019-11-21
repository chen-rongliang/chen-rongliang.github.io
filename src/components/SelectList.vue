<template>
    <transition name="fade">
        <div class="select-list" v-if="status">
            <div :class="['item', active == idx ? 'active' : '' ]" v-for="(item, idx) in option" :key="idx" @click="check(idx)">{{ item.text }}</div>
        </div>
    </transition>
</template>

<script>

const defaultOpt = [
    {
        text: '无选项',
        value: ''
    }
]

export default {
    name: 'SelectList',
    data () {
        return {
           status: false,
           active: 0
        }
    },
    props: {
        option: {
            type: Array,
            default: defaultOpt
        }
    },
    methods: {
        toggle (status, active) {
            this.status = status
            if(typeof(active) === 'number') {
                this.active = active
            }
        },
        check (active) {
            this.active = active
            this.$emit('select', active)

            this.$nextTick(() => {
                this.toggle(false)
            })
        }
    }
}
</script>

<style lang="scss">
    .select-list {
        position: absolute;
        top: 0;
        font-size: 16px;
        box-shadow: 0 3px 5px rgba(70,70,40,.255);
        transform: background-color 0.25s;
        background-color: #fff;
        .item {
            padding: 0 13px 0 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover,
            &.active {
                background-color: #f0f0f0
            }
        }
    }
</style>