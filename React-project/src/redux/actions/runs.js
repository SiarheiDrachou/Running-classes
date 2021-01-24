import {
    viewSearch,
    newRunInfo,
    closeEdit,
    viewNew,
    addRun,
    changeStarter,
    locationPage, 
    key,
    filter,
    pushRuns,
    nav
} from './actionTypes'
import axios from 'axios'

export function viewSerch() {
    
    return (dispatch, getState) => {
        const state = getState();

        dispatch(viewSearchComponent(
            !state.variables.searchComponent,
            !state.variables.filterActive
        ));
    }
}

export function getCurrentRunKey(runKey) {
    return (dispatch) => {
        dispatch(changeRunKey(
            runKey,
            true
        ));
    }
}

export function changeRunComponent(runs) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(
            changeRun(runs)
        );
        dispatch(
            closeEditComponent(!state.variables.editComponent)
        );
    }
}

export function cancel() {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(
            closeEditComponent(!state.variables.editComponent)
        );
    }
}

export function viewNewRun() {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(
            viewNewRunComponent(!state.variables.newRunComponent)
        );
    }
}

export function addRuns(runs) {
    return (dispatch, getState) => {
        const state = getState();
        console.log(runs);
        axios({
            method: 'post',
            url: `https://jogtracker.herokuapp.com/api/v1/data/jog/?date=${runs.date}&time=${runs.time}&distance=${runs.distance}&access_token=${localStorage.getItem('token')}`
        }).then(function (req) {
            dispatch(
                addNewRuns(req.data.response)
            );
    
            dispatch(
                viewNewRunComponent(!state.variables.newRunComponent)
            );
    
            dispatch(
                pushSortRuns(req.data.response)
            );
        }).catch(function (e) {
            console.log(e);

            dispatch(
                viewNewRunComponent(!state.variables.newRunComponent)
            );
        });
    }
}

export function getRuns() {
    return (dispatch) => {        
        axios({
            method: 'get',
            url: `https://jogtracker.herokuapp.com/api/v1/data/sync/?access_token=${localStorage.getItem('token')}`
        }).then(function (req) {
            dispatch(
                addNewRuns(req.data.response.jogs)
            );
        }).catch(function (e) {
            console.log(e);
        });
    }
}

export function changeRuns(runs) {
    return (dispatch, getState) => {
        const state = getState();

        axios({
            method: 'put',
            url: `https://jogtracker.herokuapp.com/api/v1/data/jog/?date=${runs.date}&time=${runs.time}&distance=${runs.distance}&access_token=${localStorage.getItem('token')}&jog_id=${runs.id}&user_id=${runs.user_id}`
        }).then(function (req) {
            dispatch(
                addNewRuns(req.data.response)
            );
    
            dispatch(
                closeEditComponent(!state.variables.editComponent)
            );
        }).catch(function (e) {
            console.log(e);
            dispatch(
                closeEditComponent(!state.variables.editComponent)
            );
        });
    }
}

export function viewFullHeader(view) {
    return (dispatch) => {
        dispatch(
            viewHeader(view)
        );
    }
}

export function getCurrentPage(page) {
    return (dispatch) => {
        dispatch(
            changeCurrentPage(page)
        );
    }
}

export function getSortInfo(start, end) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(
            sortParams(start, end)
        );

        if(start && end) {
            let sortRuns = []

            for(let run of state.variables.runs) {
                if ( 
                    typeof(run.date) == 'string'
                ) {
                    if ( 
                        new Date(run.date).getTime() >= start &&
                        new Date(run.date).getTime() <= end
                    ) {
                        sortRuns.push(run)
                    }
                }
                else {
                    if ( 
                        run.date >= start &&
                        run.date <= end
                    ) {
                        sortRuns.push(run)
                    }
                }
            }

            dispatch(
                pushSortRuns(sortRuns)
            );

            dispatch(
                viewSearchComponent(false, false)
            );
        }
        else {
            dispatch(
                pushSortRuns(state.variables.runs)
            );
        }
    }
}

export function changeClassNav() {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(
            setChangeNav(!state.variables.changeNav)
        );
    }
}





//dispatch

export function sortParams(
    start,
    end
) {
    return {
        type: filter,
        start,
        end
    }
}

export function setChangeNav(
    changeNav
) {
    return {
        type: nav,
        changeNav
    }
}

export function pushSortRuns(
    sortRuns
) {
    return {
        type: pushRuns,
        sortRuns
    }
}

export function viewSearchComponent(
    searchComponent,
    filterActive
) {
    return {
        type: viewSearch,
        searchComponent,
        filterActive
    }
}

export function changeRunKey(runKey, editComponent) {
    return {
        type: key,
        runKey,
        editComponent
    }
}

export function changeRun(run) {
    return {
        type: newRunInfo,
        run
    }
}

export function closeEditComponent(closed) {
    return {
        type: closeEdit,
        closed
    }
}

export function viewNewRunComponent(newRunComponent) {
    return {
        type: viewNew,
        newRunComponent
    }
}

export function addNewRuns(runs) {
    return {
        type: addRun,
        runs
    }
}

export function viewHeader(starter) {
    return {
        type: changeStarter,
        starter
    }
}

export function changeCurrentPage(page) {
    return {
        type: locationPage,
        page
    }
}