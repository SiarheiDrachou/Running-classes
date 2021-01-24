import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Search from '../components/Search/Search'
import NewRun from '../components/NewRun/NewRun'
import ChangeRunInfo from '../components/ChangeRunInfo/ChangeRunInfo'
import EmptyRunInfo from '../components/EmptyRunInfo/EmptyRunInfo'
import Card from '../components/Card/Card'
import {viewFullHeader, viewNewRun, getCurrentPage, changeRuns, getSortInfo, changeClassNav, getRuns} from '../redux/actions/runs'
import './ListRunning.scss'
import add from '../assets/img/add.svg'

class ListRunning extends Component {
    componentDidMount() {
        console.log(this.props.location);
        this.props.viewFullHeader(false);
        this.props.getCurrentPage('Jogs');
        this.props.getSortInfo(null, null);
        
        if(this.props.changeNav) {
            this.props.changeClassNav();
        }

        if(!localStorage.getItem('token')) {
            this.props.history.push('/');
        }

        this.props.getRuns();
    }

    filter = () => {
        let start = document.querySelector('.start').value,
            end = document.querySelector('.end').value;

            if(start && end) {
                let startDate = new Date(start).getTime(),
                    endDate = new Date(end).getTime();

                this.props.getSortInfo(startDate, endDate);
            }
    }

    changeInfo = () => {
        let time = document.querySelector('.change-run-time').value,
            speed = document.querySelector('.change-run-speed').value,
            distance = document.querySelector('.change-run-distance').value;
    
        let runs = this.props.runs;

        if (time && speed && distance) {
            runs[this.props.runKey].time = time;
            runs[this.props.runKey].speed = speed;
            runs[this.props.runKey].distance = distance;
            
            this.setState({
                currentRuns: runs
            })

            this.props.changeRuns(runs[this.props.runKey]);
        }
    }

    render() {
        if(!localStorage.getItem('token')) {
            return <Redirect to={'/'} />
        }

        return (
            <section className="list-running-section">
                {
                    this.props.searchComponent ?
                        <Search filter={this.filter}/>
                    : null
                }
                
                {   
                    !this.props.newRunComponent && !this.props.editComponent ?
                        this.props.currentRuns.map((run, index) => {
                            return (
                                <div 
                                    className="list-running-section-container" 
                                    key={index}
                                >
                                    <Card 
                                        run={run}
                                        id={index}
                                    />
                                    
                                    <hr className="hr" />
                                </div>
                            )
                        }) 
                    : null
                }

                {
                    this.props.editComponent ?
                        <ChangeRunInfo changeInfo={this.changeInfo} />
                    : null
                }

                {
                    this.props.newRunComponent ?
                        <NewRun />
                    : null
                }

                {
                    !this.props.currentRuns.length ?
                        <EmptyRunInfo viewNewRun={this.props.viewNewRun}/>
                    :
                        <img src={add} alt="" className="list-running-section__img" onClick={this.props.viewNewRun} />
                }
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        runs: state.variables.runs,
        searchComponent: state.variables.searchComponent,
        editComponent: state.variables.editComponent,
        newRunComponent: state.variables.newRunComponent,
        currentRuns: state.variables.currentRuns,
        runKey: state.variables.runKey,
        changeNav: state.variables.changeNav
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewFullHeader: view => dispatch(viewFullHeader(view)),
        getCurrentPage: page => dispatch(getCurrentPage(page)),
        viewNewRun: () => dispatch(viewNewRun()),
        changeRuns: runs => dispatch(changeRuns(runs)),
        getSortInfo: (start, end) => dispatch(getSortInfo(start, end)),
        changeClassNav: () => dispatch(changeClassNav()),
        getRuns: () => dispatch(getRuns())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListRunning)