import React from 'react';
import { connect } from 'react-redux'
import {viewNewRun} from '../../redux/actions/runs';
import './EmptyRunInfo.scss'
import sadRoundedSquareEmoticon from '../../assets/img/sadRoundedSquareEmoticon.png'

const EmptyRunInfo = props => (
    <div className="empty">
        <img src={sadRoundedSquareEmoticon} alt="" className="empty__img" />

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