<template>
    <div id="app">
        <Header />

        <router-view />
    </div> 
</template>

<script>
    import Header from './components/Header'
    import { mapActions } from 'vuex'

    export default {
        components: {
            Header
        },
        mounted() {
            this.getToken();
        },
        methods: {
            ...mapActions({
                getToken: 'getToken'
            })
        }
    }
</script>

<style lang="scss">
    * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    }

    // @font-face {
    //   font-family: 'San Francisco Pro';
    //   src: 
    //       url('./assets/font/SFProDisplay-Medium.woff') format('woff'),
    //       url('./assets/font/SFProDisplay-Medium.ttf') format('truetype');
    //   font-weight: 500;
    //   font-style: normal;
    // }

    body,
    html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    div {
        padding: 0;
        margin: 0;
    }

    a,
    button,
    select,
    input,
    svg {
        cursor: pointer;
    }

    #app {
        height: 100%;
    }
</style>
