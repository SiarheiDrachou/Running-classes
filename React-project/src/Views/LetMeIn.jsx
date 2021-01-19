import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import './LetMeIn.scss'

const LetMeIn = props => (
    <main className="main">
        <div className="main-login">
            <img 
                src="../assets/img/bear-face.svg" 
                alt="bear-face img" 
                className="main-login__img--desctop" 
            />

            <img 
                src="../assets/img/bearFace.png" 
                alt="bear-face img" 
                className="main-login__img--mobile" 
            />

            <NavLink className="main-login__button" to="/Jogs">Let me in</NavLink>
        </div>
    </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(LetMeIn)