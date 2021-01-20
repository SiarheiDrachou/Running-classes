import React, { Component } from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {viewSerch} from '../../redux/actions/runs';
import './Header.scss';
import logoDesctop from '../../assets/img/logo.svg';
import logoMobile from '../../assets/img/logo.png';
import filterActive from '../../assets/img/filter-active.svg';
import filter from '../../assets/img/filter.png';
import menu from '../../assets/img/menu.png';
import close from '../../assets/img/close.svg';

class Header extends Component {
    state = {
        page: null,
        changeNav: false
    }

    changeClassNav = () =>{
        this.setState({
            changeNav: !this.state.changeNav
        })
    }

    render() {
        console.log(this.state.changeNav);
        return (
            <header className={this.state.changeNav ? 'header header--white': 'header'}>
                <NavLink to="/">
                    {
                        !this.state.changeNav ?
                            <img src={logoDesctop} alt="" className="header__link__logo" />
                        :
                            <img src={logoMobile} alt="" className="header__link__logo" />
                    }
                </NavLink>

                {
                    !this.props.starter && !this.state.changeNav  ? 
                        <nav 
                            className={
                                this.state.changeNav ? 'header-nav':'header-nav--mobile'
                            }
                        >
                            <ul className={
                                    !this.state.changeNav ? 'header-nav__list':'header-nav__list-mobile'
                                }
                            >
                                <li className="header-nav__list__item">
                                    <NavLink 
                                        to="/Jogs"
                                        className={
                                            this.props.currentPage == 'Jogs' && !this.state.changeNav ? null: 'underline', 
                                            this.props.currentPage == 'Jogs' && this.state.changeNav ? 'header-nav__list__item__link--green': null,
                                            true ? 'header-nav__list__item__link' : null
                                        }
                                    >Jogs</NavLink> 
                                </li>
                                
                                <li className="header-nav__list__item">
                                    <NavLink 
                                        to="/Info"
                                        className={
                                            this.props.currentPage == 'Info' && !this.state.changeNav ? 'underline': null, 
                                            this.props.currentPage == 'Info' && this.state.changeNav ? 'header-nav__list__item__link--green': null,
                                            true ? 'header-nav__list__item__link' : null
                                        }
                                    >INFO</NavLink> 
                                </li>
                                
                                <li className="header-nav__list__item">
                                    <a 
                                        className={
                                            this.props.currentPage == 'Contact' && !this.state.changeNav ? 'underline': null, 
                                            this.props.currentPage == 'Contact' && this.state.changeNav ? 'header-nav__list__item__link--green': null,
                                            true ? 'header-nav__list__item__link' : null
                                        }
                                    >CONTACT US</a>
                                </li>

                                {
                                    !this.props.starter && !this.state.changeNav ?
                                        <li className="header-nav__list__item">
                                            <img 
                                                src="../assets/img/filter-active.svg" 
                                                alt=""  
                                                onClick={this.props.viewSerch}
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
                    !this.props.starter && !this.state.changeNav && this.props.filterActive ?
                        <img 
                            src={filterActive}
                            alt="" 
                            onClick={this.props.viewSerch}
                            className="header__img-filter--active"
                        />
                    :
                        <img 
                            src={filter} 
                            alt="" 
                            onClick={this.props.viewSerch}
                            className="header__img-filter"
                        />
                }
                
                {
                    !this.state.changeNav ?
                        <img 
                            src={menu}
                            alt="" 
                            className="header__img" 
                            onClick={this.changeClassNav}
                        />
                    : 
                        <img 
                            src={close} 
                            alt="" 
                            className="header__img" 
                            onClick={this.changeClassNav}
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
        currentPage: state.variables.currentPage
    }
}

function mapDispatchToprops(dispatch) {
    return {
        viewSerch: () => dispatch(viewSerch())
    }
}

export default connect(mapStateToprops, mapDispatchToprops)(Header)