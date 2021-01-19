import React from 'react';
import { connect } from 'react-redux'
import {changeInfo, cancel} from '../../redux/actions/runs';
import './ChangeRunInfo.scss'

const ChangeRunInfo = props => (
    <form className="change-run-info-form">
        <label for="Speed" className="change-run-info-form__label ml">Speed</label>
        <input id="Speed" type="number" className="change-run-info-form__input ml-30" />

        <br />

        <label for="Distance" className="change-run-info-form__label">Distance</label>
        <input id="Distance" type="number" className="change-run-info-form__input ml-15" />

        <br />

        <label for="Time" className="change-run-info-form__label ml">Time</label>
        <input id="Time" type="number" className="change-run-info-form__input ml-37" />

        <br />

        <button className="change-run-info-form__button" onClick={props.changeInfo}>Save</button>

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
        changeInfo: () => dispatch(changeInfo()),
        cancel: () => dispatch(cancel()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeRunInfo)