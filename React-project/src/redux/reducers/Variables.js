import {
    viewSearch,
    filter,
    closeEdit,
    viewNew,
    addRun,
    changeStarter,
    locationPage,
    key,
    pushRuns,
    nav
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
    runs: []
}

export default function DataBigReducer(state = initialState, action) {
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
                currentPage: action.page
            }
        case viewNew:
            return {
                ...state,
                newRunComponent: action.newRunComponent
            }
        case addRun:
            return {
                ...state,
                runs: action.runs,
                currentRuns: action.runs
            }
        case key:
            return {
                ...state,
                runKey: action.runKey,
                editComponent: action.editComponent
            }
        case closeEdit:
            return {
                ...state,
                editComponent: action.closed
            }
        case filter:
            return {
                ...state,
                startDate: action.start,
                endDate: action.end
            }
        case pushRuns:
            return {
                ...state,
                sortRuns: action.sortRuns,
                currentRuns: action.sortRuns
            }
        case nav:
            return {
                ...state,
                changeNav: action.changeNav
            }
        default:
            return state
    }
}