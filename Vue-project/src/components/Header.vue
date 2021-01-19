<template>
    <header class="header" :class="{'header--white': changeNav}">
        <router-link to="/" class="header__link">
            <img src="../assets/img/logo.svg" alt="" class="header__link__logo" v-if="!changeNav" />

            <img src="../assets/img/logo.png" alt="" class="header__link__logo" v-else />
        </router-link>
        
        <nav v-if="!starter && changeNav" class="header-nav">
            <ul :class="{'header-nav__list': !changeNav, 'header-nav__list-mobile': changeNav}">
                <li class="header-nav__list__item">
                    <router-link 
                        to="/Jogs" 
                        class="header-nav__list__item__link"
                        :class="{
                            underline: currentPage == 'Info' && !changeNav, 
                            'header-nav__list__item__link--green': currentPage == 'ListRunning' && changeNav
                        }"
                    >JOGS</router-link>
                </li>
                
                <li class="header-nav__list__item">
                    <router-link 
                        to="/Info" 
                        class="header-nav__list__item__link"
                        :class="{
                            underline: currentPage == 'Info' && !changeNav, 
                            'header-nav__list__item__link--green': currentPage == 'Info' && changeNav
                        }"
                    >INFO</router-link>                        
                </li>
                
                <li class="header-nav__list__item">
                    <a 
                        class="header-nav__list__item__link"
                        :class="{
                            underline: currentPage == 'Info' && !changeNav, 
                            'header-nav__list__item__link--green': currentPage == 'Contact' && changeNav
                        }"
                    >CONTACT US</a>                        
                </li>

                <li class="header-nav__list__item" v-if="!changeNav">
                    <img 
                        src="../assets/img/filter-active.svg" 
                        alt="" 
                        v-if="!starter && !changeNav" 
                        @click="viewSerch"
                        class="header-nav__list__item__img-filter"
                    >                
                </li>
            </ul>
        </nav>

        <img 
            src="../assets/img/filter-active.svg" 
            alt="" 
            v-if="!starter && !changeNav && filterActive" 
            @click="viewSerch"
            class="header__img-filter--active"
        >

        <img 
            src="../assets/img/filter.png" 
            alt="" 
            v-if="!starter && !changeNav && !filterActive" 
            @click="viewSerch"
            class="header__img-filter"
        >

        <img 
            src="../assets/img/menu.png" 
            alt="" 
            class="header__img" 
            @click="changeClassNav" v-if="!changeNav" 
        />

        <img 
            src="../assets/img/close.svg" 
            alt="" 
            class="header__img" 
            @click="changeClassNav" v-else 
        />
    </header>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                page: null,
                changeNav: false
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
            }),
            changeClassNav() {
                this.changeNav = !this.changeNav;
            }
        },
        computed: {
            ...mapState({
                starter: state => state.starter,
                currentPage: state => state.currentPage,
                filterActive: state => state.filterActive
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
        align-items: center;
        justify-content: space-between;

        @media(max-width: 550px) {
            display: block;
            padding: 20px 20px 20px 25px;
        }

        &--white {
            background-color: #fff;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        &__link {
            display: flex;
            align-items: center;
            text-decoration: none;

            &__logo {
                width: 100px;
                height: 35px;
            }
        }

        .header-nav {
            width: 400px;

            @media(max-width: 550px) {
                width: 95%;
                height: 95%;
            }

            .header-nav__list,
            .header-nav__list-mobile{
                display: flex;
                justify-content: space-between;
                align-items: center;

                @media(max-width: 550px) {
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                }

                .header-nav__list__item {
                    list-style-type: none;
                    font-size: 14px;
                    font-weight: bold;
                    color: white;

                    @media(max-width: 550px) {
                        color: black;
                    }

                    .header-nav__list__item__img-filter {

                        @media(max-width: 550px) {
                            position: absolute;
                            top: 20px;
                            right: 95px;
                        }
                    }

                    .header-nav__list__item__link {
                        color: white;
                        text-decoration: none;
                        position: relative;

                        @media(max-width: 550px) {
                            color: black;
                            font-size: 25px;
                        }
                    }

                    .header-nav__list__item__link--green {
                        color: green;
                    }
                }

                &__item:nth-child(2) {
                    margin: 25px 0;
                }
            }
        }

        &__img {
            display: block;
            height: 25px;
            position: absolute;
            top: 25px;
            right: 25px;

            &-filter {

                @media(max-width: 550px) {
                    position: absolute;
                    top: 25px;
                    right: 95px;
                }

                &--active {

                    @media(max-width: 550px) {
                        position: absolute;
                        top: 20px;
                        right: 95px;
                    }
                }
            }

            @media(min-width: 550px) {
                display: none;
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