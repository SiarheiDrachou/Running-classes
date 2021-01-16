<template>
    <header class="header">
        <router-link to="/" class="header__link">
            <img src="../assets/img/logo.svg" alt="" class="header__logo" />
        </router-link>
        
        <nav class="header-nav" v-if="!starter">
            <ul class="header-nav__list">
                <li class="header-nav__list__item">
                    <a class="header-nav__list__item__link">JOGS</a>
                </li>
                
                <li class="header-nav__list__item">
                    <a class="header-nav__list__item__link">INFO</a>                        
                </li>
                
                <li class="header-nav__list__item">
                    <a class="header-nav__list__item__link">CONTACT US</a>                        
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
        watch: {
            $route(to) {
                if(to.name === 'LetMeIn') {
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
                viewSerch: 'viewSerch'
            })
        },
        computed: {
            ...mapState({
                starter: state => state.starter
            })
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
                }
            }
        }
    }
</style>