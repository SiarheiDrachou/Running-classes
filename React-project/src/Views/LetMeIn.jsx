import React, {Component} from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import './LetMeIn.scss'
import {viewFullHeader, getCurrentPage, changeClassNav} from '../redux/actions/runs'
import bearDesctop from '../assets/img/bear-face.svg'
import bearMobile from '../assets/img/bearFace.png'

class LetMeIn extends Component {
    componentDidMount() {
        this.props.viewFullHeader(true);
        this.props.getCurrentPage('LetMeIn');

        if(this.props.changeNav) {
            this.props.changeClassNav();
        }

        this.getToken();
    }

    getToken = () => {
        axios({
            method: 'post',
            url: `https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin/?uuid=hello`
        }).then(function (req) {
            localStorage.setItem('token', req.data.response.access_token);
        }).catch(function (e) {
            localStorage.setItem('token', '');
        });
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
        changeNav: state.variables.changeNav
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewFullHeader: view => dispatch(viewFullHeader(view)),
        getCurrentPage: page => dispatch(getCurrentPage(page)),
        changeClassNav: page => dispatch(changeClassNav(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LetMeIn)