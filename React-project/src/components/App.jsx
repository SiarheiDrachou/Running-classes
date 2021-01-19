import React, { Component } from 'react';
import './App.scss'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import {viewForm, submitContact, cancel} from '../redux/actions/runs';
import Header from './Header/Header';
import LetMeIn from '../Views/LetMeIn';
import ListRunning from '../Views/ListRunning';
import Info from '../Views/Info';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <div>
                    <Route 
                        path="/" 
                        exact 
                        component={LetMeIn}
                    />
                    
                    <Route 
                        path="/Jogs" 
                        exact 
                        component={ListRunning}
                    />

                    <Route 
                        path="/Info" 
                        exact 
                        component={Info}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.variables.data
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)