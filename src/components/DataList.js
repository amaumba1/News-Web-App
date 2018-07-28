import React, { Component } from 'react';
//import Search from './Search';
//import Table from './Table'; 
import DataListTable from './DataListTable'; 
import Button from './Button';
import XLSX from 'xlsx';

//import { Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'; 


import './Table.css'

const DEFAULT_QUERY = ''

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='


const Loading = () => {
    return (
        <div>
            <div class="ui active inverted dimmer">
                <div class="ui text loader">Loading</div>
            </div>
        </div>
    ) 
}

class DataList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: null,
            searchTerm: DEFAULT_QUERY, 
            isLoading: false,
            users: []
          
        }
        this.onDismiss = this.onDismiss.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
        this.setSearchTopStories = this.setSearchTopStories.bind(this)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this)
        this.exportFile = this.exportFile.bind(this)
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

    exportFile() {
        let users = [["ID", "Author", "Title","URL Link", "Number of Comments", "Points", "Date and Time Created"]]
        this.state.users.forEach((user) => {
            let userArray = [user.id, user.author, user.url, user.num_comments, user.title,user.created_at, user.points, user.title ]
            users.push(userArray)
        })
            const wb = XLSX.utils.book_new()
            const wsAll = XLSX.utils.aoa_to_sheet(users)
            XLSX.utils.book_append_sheet(wb, wsAll, "All Users")
            XLSX.writeFile(wb, "export-demo.xlsx")
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
        console.log(this.state)
        const { searchTerm, result, isLoading } = this.state
        const page = (result && result.page) || 0;

        if(isLoading) {
            return <Loading /> 
        } 
        
        return (
            <div className="App">
                <button
                    onClick={this.exportFile}>Export to Excel</button>
                
                { result &&
                <DataListTable
                    list={result.hits}
                    onClick={this.exportFile}
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
