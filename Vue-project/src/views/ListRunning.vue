<template>
    <main class="main">
        <Search v-if="searchComponent" />

        <div 
            class="main-container" 
            v-show="!newRunComponent && !editComponent" 
            v-for="(run, id) in currentRuns"
            :key="id" 
        >
            <Card 
                :run="run" 
                :id="id"
            />

            <hr class="hr"/>
        </div>

        <ChangeRunInfo v-if="editComponent"/>

        <NewRun  v-if="newRunComponent" />

        <EmptyRunInfo v-if="!currentRuns.length && !newRunComponent && !editComponent" />

        <img src="../assets/img/add.svg" alt="" class="main__img" @click="viewNewRun" v-if="currentRuns.length && !newRunComponent && !editComponent" />
    </main>
</template>

<script>
    import Search from '../components/Search'
    import Card from '../components/Card'
    import NewRun from '../components/NewRun'
    import ChangeRunInfo from '../components/ChangeRunInfo'
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'
    import EmptyRunInfo from '../components/EmptyRunInfo.vue'

    export default {
        components: {
            Search,
            Card,
            NewRun,
            ChangeRunInfo,
            EmptyRunInfo
        },
        computed: {
            ...mapState({
                searchComponent: state => state.searchComponent,
                newRunComponent: state => state.newRunComponent,
                runs: state => state.runs,
                editComponent: state => state.editComponent,
                startDate: state => state.startDate,
                endDate: state => state.endDate,
                currentRuns: state => state.currentRuns
            })
        },
        methods: {
            ...mapActions({
                viewNewRun: 'viewNewRun',
                getCurrentPage: 'getCurrentPage',
                getJog: 'getJog'
            })
        },
        created() {
            this.getCurrentPage('ListRunning');
            
            this.getJog();
        }
    }
</script>

<style lang="scss" scoped>
    .main {

        &-container {
            padding: 50px 0 0 0;
        }

        &__img {
            position: fixed;
            right: 40px;
            bottom: 40px;

            @media(max-width: 550px) {
                width: 45px;
                right: 20px;
                bottom: 20px;
            }
        }
    }

    .hr {
        display: none;

        @media(max-width: 550px) {
            display: block;
        }
    }
</style>