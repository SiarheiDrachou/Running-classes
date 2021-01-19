import React from 'react';
import { connect } from 'react-redux'
import {viewNewRun} from '../../redux/actions/runs';
import './EmptyRunInfo.scss'

const EmptyRunInfo = props => (
    <div className="empty">
        <img src="../../assets/img/sadRoundedSquareEmoticon.png" alt="" className="empty__img" />

        <p className="empty__text">Nothing is there</p>

        <button className="empty__button" onClick={props.viewNewRun}>Create your jog first</button>
    </div>
)

function mapStateToProps(state) {
    return {
        data: state.variables.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewNewRun: () => dispatch(viewNewRun())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmptyRunInfo)