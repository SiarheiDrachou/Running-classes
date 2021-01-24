import React, {Component} from 'react';
import { connect } from 'react-redux'
import {cancel} from '../../redux/actions/runs';
import './ChangeRunInfo.scss'

class ChangeRunInfo extends Component {

    submit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <form className="change-run-info-form" onSubmit={this.submit}>
                <label htmlFor="Speed" className="change-run-info-form__label ml">Speed</label>
                <input id="Speed" type="number" className="change-run-info-form__input ml-30 change-run-speed" placeholder={ this.props.runs[this.props.runKey].speed } />

                <br />

                <label htmlFor="Distance" className="change-run-info-form__label">Distance</label>
                <input id="Distance" type="number" className="change-run-info-form__input ml-15 change-run-distance" placeholder={ this.props.runs[this.props.runKey].distance } />

                <br />

                <label htmlFor="Time" className="change-run-info-form__label ml">Time</label>
                <input id="Time" type="number" className="change-run-info-form__input ml-37 change-run-time" placeholder={ this.props.runs[this.props.runKey].time } />

                <br />

                <button className="change-run-info-form__button" onClick={this.props.changeInfo}>Save</button>

                <br />

                <button className="change-run-info-form__button" onClick={this.props.cancel}>Cancel</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        runs: state.variables.runs,
        runKey: state.variables.runKey
    }
}

function mapDispatchToProps(dispatch) {
    return {
        cancel: () => dispatch(cancel()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeRunInfo)