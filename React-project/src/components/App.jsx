import React, { Component } from 'react';
import './App.scss'
import {Route} from 'react-router-dom'
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

export default App