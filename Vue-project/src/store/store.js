import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        searchComponent: false,
        newRunComponent: false,
        starter: true,
        currentPage: '',
        runKey: null,
        editComponent: false,
        startDate: null,
        endDate: null,
        sortRuns: null,
        filterActive: false,
        currentRuns: [],
        runs: [
        ],
        changeNav: false,
        accessToken: ''
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
            state.runs.unshift(run);
            state.currentRuns = state.runs;
        },
        changeRun(state, run) {
            state.runs[state.runKey].speed = run.speed;
            state.runs[state.runKey].distance = run.distance;
            state.runs[state.runKey].time = run.time;

            state.currentRuns = state.runs;
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

            state.currentRuns = state.sortRuns;
        },
        changeSortRuns(state) {
            state.sortRuns = state.runs;

            state.currentRuns = state.sortRuns;
        },
        clearSortRuns(state) {
            state.sortRuns = [];

            state.currentRuns = state.sortRuns;
        },
        setToken(state, token) {
            state.accessToken = token;

            localStorage.setItem('token', token);
        },
        setJog(state, runs) {
            state.runs = runs;

            state.currentRuns = runs;
        },
        setChangeNav(state) {
            state.changeNav = !state.changeNav;
        }
    },
    actions: {
        viewSerch({commit}) {
            commit('viewSearchComponent');
            commit('changeStartDate', null);
            commit('changeEndDate', null);
        },
        viewNewRun({commit}) {
            commit('viewNewRunComponent');
        },
        viewFullHeader({commit}, starter) {
            commit('viewHeader', starter);
        },
        addRuns({commit}, run) {
            axios({
                method: 'post',
                url: `https://jogtracker.herokuapp.com/api/v1/data/jog/?date=${run.date}&time=${run.time}&distance=${run.distance}&access_token=${localStorage.getItem('token')}`
            }).then(function (req) {
                commit('addNewRuns', req.data.response);
                commit('viewNewRunComponent');
            }).catch(function (e) {
                console.log(e);
            });
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
            axios({
                method: 'put',
                url: `https://jogtracker.herokuapp.com/api/v1/data/jog/?date=${run.date}&time=${run.time}&distance=${run.distance}&access_token=${localStorage.getItem('token')}&jog_id=${run.id}&user_id=${run.user_id}`
            }).then(function (req) {
                commit('changeRun', req.data.response);
                commit('closeEditComponent');
            }).catch(function (e) {
                console.log(e);
                commit('closeEditComponent');
            });
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
                    if(typeof(run.date) == 'string') {
                        if ( 
                            new Date(run.date).getTime() >= state.startDate &&
                            new Date(run.date).getTime() <= state.endDate
                        ) {
                            commit('pushSortRuns', run);
                        }
                    } 
                    else {
                        if ( 
                            run.date >= state.startDate &&
                            run.date <= state.endDate
                        ) {
                            commit('pushSortRuns', run);
                        }
                    }
                }
            }
            else {
                commit('changeSortRuns');
            }
        },
        getToken({commit}) {
            axios({
                method: 'post',
                url: `https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin/?uuid=hello`
            }).then(function (req) {
                commit('setToken', req.data.response.access_token);
            }).catch(function (e) {
                console.log(e);
            });
        },
        getJog({commit}) {
            axios({
                method: 'get',
                url: `https://jogtracker.herokuapp.com/api/v1/data/sync/?access_token=${localStorage.getItem('token')}`
            }).then(function (req) {
                commit('setJog', req.data.response.jogs);
            }).catch(function (e) {
                console.log(e);
            });
        },
        getChangeNav({commit}) {
            commit('setChangeNav');
        }
    },
    modules: {}
})