import React from 'react';
import { connect } from 'react-redux'
//import {requestSmall, requestBig} from '../../redux/actions/runs';
import './Search.scss'

const Search = props => (
    <form className="search-form">
        <label for="start" className="search-form__label">Date from</label>
        <input id="start" type="date" className="search-form__input" />

        <label for="end" className="search-form__label ml">Date to</label>
        <input id="end" type="date" className="search-form__input" />
    </form>
)

function mapStateToProps(state) {
    return {
        data: state.variables.data
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)