<template>
    <main class="main" :style="{height: mainHeight + 'px'}">
        <div class="main-login">
            <img 
                src="../assets/img/bear-face.svg" 
                alt="bear-face img" 
                class="main-login__img" 
                v-if="innerWidth > 550" 
            />

            <img 
                src="../assets/img/bearFace.png" 
                alt="bear-face img" 
                class="main-login__img" 
                v-else 
            />

            <router-link to="/Jogs" class="main-login__button">Let me in</router-link>
        </div>
    </main>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                mainHeight: null,
                innerWidth: null
            }
        },
        methods: {
            mainHeightResult() {
                let appEl = document.querySelector('#app').clientHeight;
                
                this.mainHeight = appEl - 116;
            },
            ...mapActions({
                getCurrentPage: 'getCurrentPage'
            })
        },
        mounted() {
            this.mainHeightResult();
            this.getCurrentPage('LetMeIn');

            window.onresize = () => {
                this.innerWidth = window.innerWidth;
            };
        }
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

            @media(max-width: 550px) {
                background-color: white;
            }

            &__img {
                margin-top: 77px;

                @media(max-width: 550px) {
                    width: 160px;
                }
            }

            &__button {
                margin-top: 56px;
                padding: 20px 34px;
                border-radius: 36px;
                border: solid 3px white;
                color: white;
                background-color: transparent;
                font-size: 18px;
                font-weight: bold;
                text-decoration: none;

                @media(max-width: 550px) {
                    margin-top: 103px;
                    
                    color: rgb(233, 144, 249);
                    border: solid 3px rgb(233, 144, 249);
                }
            }
        }
    }
</style>