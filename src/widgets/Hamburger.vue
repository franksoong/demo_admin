<template>
    <button @click.prevent="toggleActive" class="hamburger hamburger-arrow-left" :class="{active: active}">
        <span class="icon"></span>
    </button>
</template>

<script>
export default {
    name: 'Hamburger',
    props: {},
    components: {},
    data() {
        return {
            active: false,
        };
    },
    computed: {},
    methods: {
        toggleActive() {
            this.active = !this.active;
            this.$emit('statechanged', this.active);
        },
    },
    mounted() {
        // console.log('Hamburger mounted!');
    },
};
</script>

<style lang='scss'>
$color-hamburger: #777;
$color-hamburger-active: #777;
$font-size: 24px;
$bar-width: 0.1em;

.hamburger {
    font-size: $font-size;
    display: inline-block;
    width: 1em;
    height: 1em;
    padding: 0;
    cursor: pointer;
    transition: transform .2s ease-in-out;
    vertical-align: middle;
    border: 0 none;
    background: transparent;
    &:focus {
        outline: 0;
    }
    &:before,
    &:after,
    .icon {
        content: "";
        display: block;
        width: 100%;
        height: $bar-width;
        margin: 0 0 .2em;
        transition: transform .2s ease-in-out;
        transition: width .2s;
        border-radius: .05em;
        background: $color-hamburger;
    }
    &:after {
        margin: 0;
    }
    &.active {
        &:before,
        .icon,
        &:after {
            background: $color-hamburger-active;
        }
    }
    /**
        * LEFT ARROW
        */
    &.hamburger-arrow-left {
        &.active {
            transform: rotate(180deg);
            &:before {
                width: .6em;
                transform: translateX(.45em) translateY(.1em) rotate(45deg);
            }
            .icon {
                border-radius: .1em .25em .25em .1em;
            }
            &:after {
                width: .6em;
                transform: translateX(.45em) translateY(-.1em) rotate(-45deg);
            }
        }
    }
}
</style>
