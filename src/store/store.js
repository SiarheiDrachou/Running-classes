import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        searchComponent: false,
        newRunComponent: false,
        starter: true,
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
        viewnewRunComponent(state) {
            state.newRunComponent = !state.newRunComponent;
        },
        viewHeader(state, starter) {
            state.starter = starter;
        }
    },
    actions: {
        viewSerch({commit}) {
            commit('viewSearchComponent');
        },
        viewNewRun({commit}) {
            commit('viewnewRunComponent');
        },
        viewFullHeader({commit}, starter) {
            commit('viewHeader', starter);
        }
    },
    modules: {}
})