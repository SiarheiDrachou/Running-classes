import React, {Component} from 'react';
import { connect } from 'react-redux'
import Search from '../components/Search/Search'
import NewRun from '../components/NewRun/NewRun'
import ChangeRunInfo from '../components/ChangeRunInfo/ChangeRunInfo'
import EmptyRunInfo from '../components/EmptyRunInfo/EmptyRunInfo'
import {viewFullHeader, viewNewRun, getCurrentPage} from '../redux/actions/runs'
import './ListRunning.scss'
import add from '../assets/img/add.svg'

class ListRunning extends Component {
    state = {
        
    }

    componentDidMount() {
        this.props.viewFullHeader(false);
        this.props.getCurrentPage('Jogs');
    }

    render() {
        return (
            <section className="list-running--section">
                {
                    this.props.searchComponent ?
                        <Search />
                    : null
                }
                

                {/* <div 
                    class="list-running--section-container" 
                    v-show="newRunComponent && !editComponent" 
                    v-for="(run, id) in currentRuns"
                    :key="id"
                >
                    <Card 
                        :run="run" 
                        :id="id"
                    />

                    <hr />
                </div> */}

                    {
                    this.props.editComponent ?
                        <ChangeRunInfo />
                    : null
                }

                {
                    this.props.newRunComponent ?
                        <NewRun />
                    : null
                }

                {
                    this.props.currentRuns.length ?
                        <EmptyRunInfo />
                    :
                        <img src={add} alt="" className="list-running-section__img" onClick={this.props.viewNewRun} />
                }
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchComponent: state.variables.searchComponent,
        editComponent: state.variables.editComponent,
        newRunComponent: state.variables.newRunComponent,
        currentRuns: state.variables.currentRuns,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewFullHeader: view => dispatch(viewFullHeader(view)),
        getCurrentPage: page => dispatch(getCurrentPage(page)),
        viewNewRun: () => dispatch(viewNewRun()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListRunning)