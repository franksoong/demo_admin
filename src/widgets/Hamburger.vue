<template>
    <div class="grid-cell" @click.prevent="toggleActive">
        <button class="hamburger hamburger-arrow-left" :class="{active: active}">
            <span class="icon"></span>
        </button>
    </div>
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
$font-size: 20px;
$bar-width: 0.1em;

.grid-cell {
    //border: 1px solid #E5EFEE;
    //border-width: 0 1px 1px 0;
    padding: 5px 5px;

    &:nth-child(3n) {
        border-right-width: 1px;
    }
    &:nth-child(2n) {
        border-right-width: 0;
    }
}


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
