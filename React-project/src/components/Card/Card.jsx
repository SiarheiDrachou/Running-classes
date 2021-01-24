import React from 'react';
import { connect } from 'react-redux'
import {getCurrentRunKey} from '../../redux/actions/runs';
import './Card.scss'
import runMan from '../../assets/img/run-man.svg'

const Card = props => (
    
    <div className="container">
        <img src={runMan} alt="" className="container__img"/>

        <p className="container__description">
            <span>
                {new Date(props.run.date).getDate() + '.' + new Date(props.run.date).getMonth() + 1 + '.' + new Date(props.run.date).getFullYear()}

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil edit__svg" viewBox="0 0 16 16" onClick={props.getCurrentRunKey.bind(this, props.id)}>
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </span>

            <br />

            <span>
                <b>Speed</b>: {props.run.speed}
            </span>

            <br />

            <span>
                <b>Distance</b>: {props.run.distance} km
            </span>

            <br />

            <span>
                <b>Time</b>: {props.run.time} min
            </span>
        </p>
    </div>
)

function mapStateToProps(state) {
    return {
        runs: state.variables.runs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCurrentRunKey: id => dispatch(getCurrentRunKey(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)