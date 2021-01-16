<template>
    <main class="main" :style="{height: mainHeight + 'px'}">
        <div class="main-login">
            <img src="../assets/img/bear-face.svg" alt="bear-face img" class="main-login__img">

            <router-link to="/ListRunning" class="main-login__button">Let me in</router-link>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                mainHeight: null
            }
        },
        methods: {
            mainHeightResult() {
                let appEl = document.querySelector('#app').clientHeight;
                
                this.mainHeight = appEl - 116;
            }
        },
        mounted() {
            this.mainHeightResult();
        },
    }
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        &-login {
            margin: auto;
            width: 503px;
            height: 379px;
            border-radius: 44px;
            background-color: #e990f9;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;

            &__img {
                margin-top: 77px;
            }

            &__button {
                margin-top: 56px;
                padding: 20px 34px;
                border-radius: 36px;
                border: solid 3px white;
                background-color: transparent;
                font-size: 18px;
                font-weight: bold;
                color: white;
                text-decoration: none;
            }
        }
    }
</style>