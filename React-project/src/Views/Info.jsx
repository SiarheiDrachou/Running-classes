import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getCurrentPage, viewFullHeader, changeClassNav} from '../redux/actions/runs'
import './Info.scss'

class Info extends Component {
    componentDidMount() {
        this.props.getCurrentPage('Info');
        this.props.viewFullHeader(false);
    
        if(this.props.changeNav) {
            this.props.changeClassNav();
        }

        if(!localStorage.getItem('token')) {
            this.props.history.push('/');
        }
    }

    render() {
        if(!localStorage.getItem('token')) {
            return <Redirect to={'/'} />
        }

        return (
            <article className="article">
                <h1 className="article__header">INFO</h1>

                <p className="article__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.

                    <br />
                    <br />

                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like
                    readable English.
                </p>
            </article>
        )
    }
}

function mapStateToProps(state) {
    return {
        runs: state.variables.runs,
        changeNav: state.variables.changeNav
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCurrentPage: page => dispatch(getCurrentPage(page)),
        viewFullHeader: view => dispatch(viewFullHeader(view)),
        changeClassNav: () => dispatch(changeClassNav())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)