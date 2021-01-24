import React, {Component} from 'react';
import { connect } from 'react-redux'
import {viewNewRun, addRuns} from '../../redux/actions/runs';
import './NewRun.scss'
import close from '../../assets/img/cancel.svg'

class NewRun extends Component {

    submit = event => {
        event.preventDefault();
    }

    getInfo = () => {
        let time = document.querySelector('.new-run-time').value,
            date = document.querySelector('.new-run-date').value,
            distance = document.querySelector('.new-run-distance').value;
    
        let run = {},
            newRuns = this.props.runs;
    
        if (time && date && distance) {
            run = {
                time: time,
                date: new Date(date).getTime(),
                distance: distance
            }
    
            newRuns.unshift(run);
            
            this.props.addRuns(newRuns);
        }
    }

    render() {
        return (
            <form className="new-run-form" onSubmit={this.submit}>
                <img src={close} alt="" className="new-run-form__img" onClick={this.props.viewNewRun} />

                <label htmlFor="Distance" className="new-run-form__label">Distance</label>
                <input id="Distance" type="number" className="new-run-form__input ml-15 new-run-distance" />

                <br />

                <label htmlFor="Time" className="new-run-form__label ml">Time</label>
                <input id="Time" type="number" className="new-run-form__input ml-37 new-run-time" />

                <br />

                <label htmlFor="Date" className="new-run-form__label ml">Date</label>
                <input id="Date" type="date" className="new-run-form__input ml-40 new-run-date" />

                <button className="new-run-form__button" onClick={this.getInfo}>Save</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        runs: state.variables.runs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewNewRun: () => dispatch(viewNewRun()),
        addRuns: runs => dispatch(addRuns(runs)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRun)