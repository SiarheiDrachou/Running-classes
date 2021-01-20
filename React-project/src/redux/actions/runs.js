import {
    viewSearch,
    newRunInfo,
    closeEdit,
    viewNew,
    addRun,
    changeStarter,
    locationPage
} from './actionTypes'

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
    return (dispatch, getState) => {
        const state = getState();

        dispatch(changeRunKey(
            runKey,
            true
        ));
    }
}

export function changeRunComponent(run) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(
            changeRun(changeInfo(state.variables.runs, state.variables.runKey)),
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

export function addRuns(run) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(
            addNewRuns(getInfo(state.variables.runs)),
            viewNewRunComponent(!state.variables.newRunComponent)
        );
    }
}

export function viewFullHeader(view) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(
            viewHeader(view)
        );
    }
}

export function getCurrentPage(page) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(
            changeCurrentPage(page)
        );
    }
}

function getInfo(runs) {
    let time = document.querySelector('.new-run-distance').value,
        date = document.querySelector('.new-run-time').value,
        distance = document.querySelector('.new-run-date').value;

    let run = {},
        newRuns = runs;

    if (time && date && distance) {
        run = {
            time: time + ' min',
            date: date.split('-').reverse().join('.'),
            distance: distance + ' km'
        }

        newRuns.push(run);

        return newRuns;
    }
}

function changeInfo(runs, runKey) {
    let time = document.querySelector('.change-run-time').value,
        speed = document.querySelector('.change-run-speed').value,
        distance = document.querySelector('.change-run-distance').value;

    let run = runs;

    if (time && speed && distance) {
        run[runKey].time = time + ' min';
        run[runKey].speed = speed;
        run[runKey].distance = distance + ' km';

        return run;
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
        type: runKey,
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

export function addNewRuns(run) {
    return {
        type: addRun,
        run
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