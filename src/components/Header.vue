<template>
    <header class="header">
        <router-link to="/" class="header__link">
            <img src="../assets/img/logo.svg" alt="" class="header__logo" />
        </router-link>
        
        <nav class="header-nav" v-if="!starter">
            <ul class="header-nav__list">
                <li class="header-nav__list__item">
                    <router-link 
                        to="/Jogs" 
                        class="header-nav__list__item__link"
                        :class="{underline: currentPage == 'ListRunning'}"
                    >JOGS</router-link>
                </li>
                
                <li class="header-nav__list__item">
                    <router-link 
                        to="/Info" 
                        class="header-nav__list__item__link"
                        :class="{underline: currentPage == 'Info'}"
                    >INFO</router-link>                        
                </li>
                
                <li class="header-nav__list__item">
                    <a 
                        class="header-nav__list__item__link"
                        :class="{underline: currentPage == 'Contact'}"
                    >CONTACT US</a>                        
                </li>
                
                <li class="header-nav__list__item">
                    <img src="../assets/img/filter-active.svg" alt="" @click="viewSerch">
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                page: null
            }
        },
        watch: {
            $route(to) {
                if(to.path == '/') {
                    this.viewFullHeader(true);
                }
                else {
                    this.viewFullHeader(false);
                }
            }
        },
        methods: {
            ...mapActions({
                viewFullHeader: 'viewFullHeader',
                viewSerch: 'viewSerch',
                getCurrentPage: 'getCurrentPage'
            })
        },
        computed: {
            ...mapState({
                starter: state => state.starter,
                currentPage: state => state.currentPage
            })
        },
        mounted() {
            if(this.$route.path !== '/') {
                this.viewFullHeader(false);
            }
            else {
                this.viewFullHeader(true);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        padding: 30px 30px 30px 37px;
        background-color: #7ed321;
        display: flex;
        justify-content: space-between;

        &__link {
            display: flex;
            align-items: center;
            text-decoration: none;
        }

        &-nav {
            width: 400px;

            &__list {
                display: flex;
                justify-content: space-between;
                align-items: center;

                &__item {
                    list-style-type: none;
                    font-size: 14px;
                    font-weight: bold;
                    color: white;

                    &__link {
                        color: white;
                        text-decoration: none;
                        position: relative;
                    }
                }
            }
        }
    }

    .underline::before {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background-color: white;
    }
</style>