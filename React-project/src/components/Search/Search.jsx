import React from 'react';
import './Search.scss'

const Search = props => (
    <form className="search-form">
        <label htmlFor="start" className="search-form__label">Date from</label>
        <input id="start" type="date" className="search-form__input start" onChange={props.filter} />
        
        <br className="br" />
        
        <div>
            <label htmlFor="end" className="search-form__label ml">Date to</label>
            <input id="end" type="date" className="search-form__input end" onChange={props.filter} />
        </div>
    </form>
)

export default Search