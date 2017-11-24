<template>
    <div id='root'>
        <transition name='fade' mode='out-in'>
            <router-view/>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {
    },
};
</script>

<style lang="scss">
@import '~@/styles/vars.scss';

body {
    margin: 0px;
    padding: 0px;
    /*background: url(assets/bg1.jpg) center !important;
    background-size: cover;*/
    font-family: $font-family;
    font-size: $--font-size-base;
    -webkit-font-smoothing: antialiased;
}

#root {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
