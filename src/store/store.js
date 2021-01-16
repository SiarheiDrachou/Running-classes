import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        searchComponent: false,
        newRunComponent: true,
        starter: true,
        currentPage: '',
        runKey: null,
        editComponent: false,
        runs: [{
                date: '20.12.2017',
                speed: 15,
                distance: '10 km',
                time: '60 min'
            },
            {
                date: '20.12.2017',
                speed: 15,
                distance: '10 km',
                time: '60 min'
            },
            {
                date: '20.12.2017',
                speed: 15,
                distance: '10 km',
                time: '60 min'
            },
            {
                date: '20.12.2017',
                speed: 15,
                distance: '10 km',
                time: '60 min'
            }
        ]
    },
    mutations: {
        viewSearchComponent(state) {
            state.searchComponent = !state.searchComponent;
        },
        viewNewRunComponent(state) {
            state.newRunComponent = !state.newRunComponent;
            console.log(state.newRunComponent);
        },
        viewHeader(state, starter) {
            state.starter = starter;
        },
        addNewRuns(state, run) {
            state.runs.push(run);
        },
        changeRun(state, run) {
            state.runs[state.runKey].speed = run.speed;
            state.runs[state.runKey].distance = run.distance;
            state.runs[state.runKey].time = run.time;
        },
        changeCurrentPage(state, page) {
            state.currentPage = page;
        },
        changeRunKey(state, runKey) {
            state.runKey = runKey;
            state.editComponent = true;
        },
        closeEditComponent(state) {
            state.editComponent = false;
        }
    },
    actions: {
        viewSerch({commit}) {
            commit('viewSearchComponent');
        },
        viewNewRun({commit}) {
            commit('viewNewRunComponent');
        },
        viewFullHeader({commit}, starter) {
            commit('viewHeader', starter);
        },
        addRuns({commit}, run) {
            commit('addNewRuns', run);
            commit('viewNewRunComponent');
        },
        getCurrentPage({commit}, page) {
            commit('changeCurrentPage', page);
        },
        getCurrentRunKey({commit}, runKey) {
            commit('changeRunKey', runKey);
        },
        closeEdit({commit}) {
            commit('closeEditComponent');
        },
        changeRunComponent({commit}, run) {
            commit('changeRun', run);
            commit('closeEditComponent');
        }
    },
    modules: {}
})