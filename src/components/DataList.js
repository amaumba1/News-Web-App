import React, { Component } from 'react';
import Search from './Search';
import Table from './Table'; 

import './Table.css'

const DEFAULT_QUERY = 'redux'

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='



class DataList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: null,
            searchTerm: DEFAULT_QUERY
        }
        this.onDismiss = this.onDismiss.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
        this.setSearchTopStories = this.setSearchTopStories.bind(this)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this)
    }

    onSearchSubmit(event) {
        const { searchTerm } = this.state;
        this.fetchSearchTopStories(searchTerm)
        event.preventDefault(); 
    }

    setSearchTopStories(result) {
        this.setState({ result })
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        this.fetchSearchTopStories(searchTerm)
    }

    fetchSearchTopStories(searchTerm) {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
            .then(response => response.json)
            .then(result => this.setSearchTopStories(result))
            .catch(error => error)
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })

    }

    onDismiss(id) {
        const isNotId = item => item.objectID !== id;
        const updatedList = this.state.result.hits.filter(isNotId)
        this.setState({ ...this.state.result, hits: updatedList })
    }

    render() {
        const { searchTerm, result } = this.state

       //if(!result) { return null }

   

        return (
            <div className="App">
                <Search
                    value={searchTerm}
                    onChange={this.onSearchChange}
                    onSubmit={this.onSearchSubmit}
                >
                    Search
                </Search>

                { result &&
                <Table
                    list={result.hits}
                    onDismiss={this.onDismiss}
                />
                }
            </div>
        );
    }
}


export default DataList;
