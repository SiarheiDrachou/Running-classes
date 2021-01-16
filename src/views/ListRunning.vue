<template>
    <main class="main">
        <Search v-if="searchComponent" />

        <div class="main-container" v-if="newRunComponent">
            <Card v-for="(run, id) in runs" :key="id" :run="run" />
        </div>

        <NewRun  v-else />

        <img src="../assets/img/add.svg" alt="" class="main__img" @click="viewNewRun">
    </main>
</template>

<script>
    import Search from '../components/Search'
    import Card from '../components/Card'
    import NewRun from '../components/NewRun'
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        components: {
            Search,
            Card,
            NewRun
        },
        computed: {
            ...mapState({
                searchComponent: state => state.searchComponent,
                newRunComponent: state => state.newRunComponent,
                runs: state => state.runs
            })
        },
        methods: {
            ...mapActions({
                viewNewRun: 'viewNewRun'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .main {

        &-container {
            padding: 50px 0 0 0;
        }

        &__img {
            position: absolute;
            right: 40px;
            bottom: 40px;
        }
    }
</style>