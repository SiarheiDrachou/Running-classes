import React from 'react';
import { connect } from 'react-redux'
import {viewNewRun, getInfo} from '../../redux/actions/runs';
import './NewRun.scss'

const NewRun = props => (
    <form className="new-run-form">
        <img src="../../assets/img/cancel.svg" alt="" className="new-run-form__img" onClick={props.viewNewRun} />

        <label for="Distance" className="new-run-form__label">Distance</label>
        <input id="Distance" type="number" className="new-run-form__input ml-15" />

        <br />

        <label for="Time" className="new-run-form__label ml">Time</label>
        <input id="Time" type="number" className="new-run-form__input ml-37" />

        <br />

        <label for="Date" className="new-run-form__label ml">Date</label>
        <input id="Date" type="date" className="new-run-form__input ml-40" />

        <button className="new-run-form__button" onClick={props.getInfo}>Save</button>
    </form>
)

function mapStateToProps(state) {
    return {
        data: state.variables.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewNewRun: () => dispatch(viewNewRun()),
        getInfo: () => dispatch(getInfo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRun)