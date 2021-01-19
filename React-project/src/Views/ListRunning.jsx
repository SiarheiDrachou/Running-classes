import React from 'react';
import { connect } from 'react-redux'
import Search from '../components/Search/Search'
import NewRun from '../components/NewRun/NewRun'
import ChangeRunInfo from '../components/ChangeRunInfo/ChangeRunInfo'
import EmptyRunInfo from '../components/EmptyRunInfo/EmptyRunInfo'
import './ListRunning.scss'

const ListRunning = props => (
    <main className="main">
        {
            props.searchComponent ?
                <Search />
            : null
        }
        

        {/* <div 
            class="main-container" 
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
            props.editComponent ?
                <ChangeRunInfo />
            : null
        }

        {
            !props.newRunComponent ?
                <NewRun />
            : null
        }

        {/* {
            !props.currentRuns.length ?
                <EmptyRunInfo />
            :
                <img src="../assets/img/add.svg" alt="" class="main__img" onClick={props.viewNewRun} />
        } */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListRunning)