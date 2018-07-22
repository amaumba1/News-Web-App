import React, { Component } from 'react';
import Search from './Search';
import Table from './Table'; 
import Button from './Button';

import './Table.css'

const DEFAULT_QUERY = ''

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='


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

    onDismiss(id) {
        const isNotId = item => item.objectID !== id;
        const updatedList = this.state.result.hits.filter(isNotId)
        this.setState({ ...this.state.result, hits: updatedList })
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })

    }

    setSearchTopStories(result) {
        const { hits, page } = result;

        const oldHits = page !== 0 ? this.state.result.hits : [];

        const updatedHits = [...oldHits, ...hits]

        this.setState({ result: { hits: updatedHits, page } })
    }

    onSearchSubmit(event) {
        const { searchTerm } = this.state;
        this.fetchSearchTopStories(searchTerm)
        event.preventDefault(); 
    }

    fetchSearchTopStories(searchTerm, page = 0) {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(error => error)
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        this.fetchSearchTopStories(searchTerm)
    }

    render() {
        const { searchTerm, result } = this.state
        const page = (result && result.page) || 0;

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
                <div>
                    <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
                        More
                    </Button>
                </div>
            </div>
        );
    }
}


export default DataList;
