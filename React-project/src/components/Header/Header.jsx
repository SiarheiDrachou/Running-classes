import React from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {changeclassNameNav, viewSerch} from '../../redux/actions/runs';
import './Header.scss'

const Header = props => (
    <header className={props.changeNav ? 'header header--white': 'header'}>
        <NavLink to="/">
            {
                !props.changeNav ?
                    <img src="../../assets/img/logo.svg" alt="" className="header__link__logo" />
                :
                    <img src="../../assets/img/logo.png" alt="" className="header__link__logo" />
            }
        </NavLink>

        {
            !props.starter && props.changeNav ?
                <nav className="header-nav">
                    <ul className={
                            !props.changeNav ? 'header-nav__list':null, 
                            props.changeNav ? 'header-nav__list-mobile': null
                        }
                    >
                        <li className="header-nav__list__item">
                            <NavLink 
                                to="/Jogs"
                                className="header-nav__list__item__link"
                                className={
                                    props.currentPage == 'Info' && !props.changeNav ? 'underline': null, 
                                    props.currentPage == 'Jogs' && props.changeNav ? 'header-nav__list__item__link--green': null
                                }
                            >Jogs</NavLink> 
                        </li>
                        
                        <li className="header-nav__list__item">
                            <NavLink 
                                to="/Info"
                                className="header-nav__list__item__link"
                                className={
                                    props.currentPage == 'Info' && !props.changeNav ? 'underline': null, 
                                    props.currentPage == 'Info' && props.changeNav ? 'header-nav__list__item__link--green': null
                                }
                            >INFO</NavLink> 
                        </li>
                        
                        <li className="header-nav__list__item">
                            <a 
                                className="header-nav__list__item__link"
                                className={
                                    props.currentPage == 'Info' && !props.changeNav ? 'underline': null, 
                                    props.currentPage == 'Contact' && props.changeNav ? 'header-nav__list__item__link--green': null
                                }
                            >CONTACT US</a>
                        </li>

                        {
                            !props.starter && !props.changeNav ?
                                <li className="header-nav__list__item">
                                    <img 
                                        src="../assets/img/filter-active.svg" 
                                        alt=""  
                                        onClick={props.viewSerch}
                                        className="header-nav__list__item__img-filter"
                                    />                
                                </li>
                            : null
                        }
                    </ul>
                </nav>
            : null
        }
        
        {
            !props.starter && !props.changeNav && props.filterActive ?
                <img 
                    src="../../assets/img/filter-active.svg" 
                    alt="" 
                    v-if="" 
                    onClick={props.viewSerch}
                    className="header__img-filter--active"
                />
            :
                <img 
                    src="../../assets/img/filter.png" 
                    alt="" 
                    onClick={props.viewSerch}
                    className="header__img-filter"
                />
        }
        
        {
            !props.changeNav ?
                <img 
                    src="../../assets/img/menu.png" 
                    alt="" 
                    className="header__img" 
                    onClick={props.changeclassNameNav}
                />
            : 
                <img 
                    src="../../assets/img/close.svg" 
                    alt="" 
                    className="header__img" 
                    onClick={props.changeclassNameNav}
                />
        }
    </header>
)

function mapStateToProps(state) {
    return {
        changeNav: state.variables.changeNav
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeclassNameNav: () => dispatch(changeclassNameNav()),
        viewSerch: () => dispatch(viewSerch()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)