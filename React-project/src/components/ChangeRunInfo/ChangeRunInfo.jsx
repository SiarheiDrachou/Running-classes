import React from 'react';
import { connect } from 'react-redux'
import {getCurrentRunKey, cancel} from '../../redux/actions/runs';
import './ChangeRunInfo.scss'

const ChangeRunInfo = props => (
    <form className="change-run-info-form">
        <label for="Speed" className="change-run-info-form__label ml">Speed</label>
        <input id="Speed" type="number" className="change-run-info-form__input ml-30 change-run-speed" />

        <br />

        <label for="Distance" className="change-run-info-form__label">Distance</label>
        <input id="Distance" type="number" className="change-run-info-form__input ml-15 change-run-distance" />

        <br />

        <label for="Time" className="change-run-info-form__label ml">Time</label>
        <input id="Time" type="number" className="change-run-info-form__input ml-37 change-run-time" />

        <br />

        <button className="change-run-info-form__button" onClick={props.getCurrentRunKey}>Save</button>

        <br />

        <button className="change-run-info-form__button" onClick={props.cancel}>Cancel</button>
    </form>
)

function mapStateToProps(state) {
    return {
        data: state.variables.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCurrentRunKey: runKey => dispatch(getCurrentRunKey(runKey)),
        cancel: () => dispatch(cancel()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeRunInfo)