import {
    viewSearch,
    newRunInfo,
    closeEdit,
    viewNew,
    addRun,
    changeStarter,
    locationPage
} from '../actions/actionTypes'

const initialState = {
    searchComponent: false,
    newRunComponent: false,
    starter: false,
    currentPage: '',
    runKey: null,
    editComponent: false,
    startDate: null,
    endDate: null,
    sortRuns: null,
    filterActive: false,
    changeNav: false,
    currentRuns: [],
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
}

export default function DataBigReducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case viewSearch:
            return {
                ...state,
                searchComponent: action.searchComponent,
                filterActive: action.filterActive
            }
        case changeStarter:
            return {
                ...state,
                starter: action.starter
            }
        case locationPage:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }
}