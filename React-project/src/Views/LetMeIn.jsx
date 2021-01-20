import React, {Component} from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import './LetMeIn.scss'
import {viewFullHeader, getCurrentPage} from '../redux/actions/runs'
import bearDesctop from '../assets/img/bear-face.svg'
import bearMobile from '../assets/img/bearFace.png'

class LetMeIn extends Component {
    state = {
        
    }

    componentDidMount() {
        this.props.viewFullHeader(true);
        this.props.getCurrentPage('LetMeIn');
    }

    render() {
        return (
            <section className="let-me-in-section">
                <div className="let-me-in-section-login">
                    <img 
                        src={bearDesctop} 
                        alt="bear-face img" 
                        className="let-me-in-section-login__img--desctop" 
                    />

                    <img 
                        src={bearMobile}
                        alt="bear-face img" 
                        className="let-me-in-section-login__img--mobile" 
                    />

                    <NavLink className="let-me-in-section-login__button" to="/Jogs">Let me in</NavLink>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        starter: state.variables.starter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewFullHeader: view => dispatch(viewFullHeader(view)),
        getCurrentPage: page => dispatch(getCurrentPage(page)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LetMeIn)