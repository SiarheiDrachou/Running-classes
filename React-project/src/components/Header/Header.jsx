import React, { Component } from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {viewSerch, changeClassNav} from '../../redux/actions/runs';
import './Header.scss';
import logoDesctop from '../../assets/img/logo.svg';
import logoMobile from '../../assets/img/logo.png';
import filterActive from '../../assets/img/filter-active.svg';
import filter from '../../assets/img/filter.png';
import menu from '../../assets/img/menu.png';
import close from '../../assets/img/close.svg';

class Header extends Component {
    render() {
        return (
            <header className={this.props.changeNav ? 'header header--white': 'header'}>
                <NavLink to="/">
                    {
                        !this.props.changeNav ?
                            <img src={logoDesctop} alt="" className="header__link__logo" />
                        :
                            <img src={logoMobile} alt="" className="header__link__logo" />
                    }
                </NavLink>

                <nav 
                    className={
                        (!this.props.changeNav ? 'header-nav' : 'header-nav--mobile') +
                        (this.props.starter && !this.props.changeNav ? ' header-nav--opacity': '')
                    }
                >
                    <ul className="header-nav__list">
                        <li className="header-nav__list__item">
                            <NavLink 
                                to="/Jogs"
                                className={
                                    (this.props.currentPage === 'Jogs' && this.props.changeNav ? 'header-nav__list__item__link--green': null) +
                                    ' header-nav__list__item__link'
                                }
                            >Jogs</NavLink> 
                        </li>
                        
                        <li className="header-nav__list__item">
                            <NavLink 
                                to="/Info"
                                className={
                                    (this.props.currentPage === 'Jogs' && this.props.changeNav ? 'header-nav__list__item__link--green': null) +
                                    ' header-nav__list__item__link'
                                }
                            >INFO</NavLink> 
                        </li>
                        
                        <li className="header-nav__list__item">
                            <a 
                                className={
                                    (this.props.currentPage === 'Jogs' && this.props.changeNav ? 'header-nav__list__item__link--green': null) +
                                    ' header-nav__list__item__link'
                                }
                            >CONTACT US</a>
                        </li>
                    </ul>
                </nav>
                
                {
                    !this.props.starter && !this.props.changeNav && this.props.filterActive && this.props.currentPage === 'Jogs' ?
                        <img 
                            src={filterActive}
                            alt="" 
                            onClick={this.props.viewSerch}
                            className="header__img-filter--active"
                        />
                    : null
                }

                {
                    !this.props.starter && !this.props.changeNav && !this.props.filterActive && this.props.currentPage === 'Jogs' ?
                        <img 
                            src={filter} 
                            alt="" 
                            onClick={this.props.viewSerch}
                            className="header__img-filter"
                        />
                    : null
                }
                
                {
                    !this.props.changeNav ?
                        <img 
                            src={menu}
                            alt="" 
                            className="header__img" 
                            onClick={this.props.changeClassNav}
                        />
                    : 
                        <img 
                            src={close} 
                            alt="" 
                            className="header__img" 
                            onClick={this.props.changeClassNav}
                        />
                }
            </header>
        )
    }
}

function mapStateToprops(state) {
    return {
        searchComponent: state.variables.searchComponent,
        filterActive: state.variables.filterActive,
        starter: state.variables.starter,
        currentPage: state.variables.currentPage,
        changeNav: state.variables.changeNav
    }
}

function mapDispatchToprops(dispatch) {
    return {
        viewSerch: () => dispatch(viewSerch()),
        changeClassNav: () => dispatch(changeClassNav())
    }
}

export default connect(mapStateToprops, mapDispatchToprops)(Header)