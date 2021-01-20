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
        startDate: null,
        endDate: null,
        sortRuns: null,
        filterActive: false,
        runs: [
            {
                date: '20.01.2021',
                speed: 15,
                distance: '10 km',
                time: '60 min'
            },
            {
                date: '20.01.2021',
                speed: 15,
                distance: '10 km',
                time: '60 min'
            },
            {
                date: '20.01.2021',
                speed: 15,
                distance: '10 km',
                time: '60 min'
            },
            {
                date: '20.01.2021',
                speed: 15,
                distance: '10 km',
                time: '60 min'
            }
        ]
    },
    mutations: {
        viewSearchComponent(state) {
            state.searchComponent = !state.searchComponent;
            state.filterActive = !state.filterActive;
        },
        viewNewRunComponent(state) {
            state.newRunComponent = !state.newRunComponent;
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
        },
        changeStartDate(state, start) {
            state.startDate = start;
        },
        changeEndDate(state, end) {
            state.endDate = end;
        },
        pushSortRuns(state, runs) {
            state.sortRuns.push(runs);
        },
        changeSortRuns(state) {
            state.sortRuns = state.runs;
        },
        clearSortRuns(state) {
            state.sortRuns = [];
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
        },
        getStartDate({commit}, start) {
            commit('changeStartDate', start);
        },
        getEndDate({commit}, end) {
            commit('changeEndDate', end);
        },
        sortRuns({commit, state}) {
            if(state.startDate && state.endDate) {
                commit('clearSortRuns');
                for(let run of state.runs) {
                    if ( 
                        (
                            +run.date.split('.')[0] >= +state.startDate.split('.')[0] &&
                            (
                                +run.date.split('.')[1] >= +state.startDate.split('.')[1] || 
                                +run.date.split('.')[2] < +state.startDate.split('.')[2]
                            ) &&
                            +run.date.split('.')[2] >= +state.startDate.split('.')[2]
                        ) &&
                        (
                            (
                                +run.date.split('.')[0] <= +state.endDate.split('.')[0] || 
                                +run.date.split('.')[1] < +state.endDate.split('.')[1]
                            ) &&
                            +run.date.split('.')[1] <= +state.endDate.split('.')[1] &&
                            +run.date.split('.')[2] <= +state.endDate.split('.')[2]
                        )
                    ) {
                        commit('pushSortRuns', run);
                    }
                }
            }
            else {
                commit('changeSortRuns');
            }
        }
    },
    modules: {}
})