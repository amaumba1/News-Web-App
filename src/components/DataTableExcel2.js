import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios'; 
//import firebase from './config';
//import XLSX from 'xlsx';

//import './App.css';

class DataTableExcel2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        //this.exportFile = this.exportFile.bind(this)
    }
    componentWillMount() {
        this.getUsers()
    }
    getUsers() {
        //let users = []
        //firebase.database().ref(`users/`)
        axios.get(`https://hn.algolia.com/api/v1/search?query=`).then((response) => {
            if (response.status === 200) {
                return response.result
            } else {
                throw new Error('Unable to fetch the data')
            }
        }).then((users) => { this.setState({ users })
        
        }).catch((error) => { console.log(error) })

    
            
            
            
    }
    // exportFile() {
    //     let users = [['First Name', 'Last Name', 'Age']]
    //     this.state.users.forEach((user) => {
    //         let userArray = [user.firstname, user.lastname, user.age]
    //         users.push(userArray)
    //     })
    //     const wb = XLSX.utils.book_new()
    //     const wsAll = XLSX.utils.aoa_to_sheet(users)
    //     XLSX.utils.book_append_sheet(wb, wsAll, 'All User')
    //     XLSX.writeFile(wb, 'export-demo.xlsx')
    // }
    render() {
        const userColumns = [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: "Title",
                        id: "title",
                        accessor: d => d.title
                    },
                    {
                        Header: "Author",
                        id: "author",
                        accessor: d => d.author
                    },
                    {
                        Header: "Points",
                        id: "points",
                        accessor: d => d.points
                    },
                    {
                        Header: "Number of Comments",
                        id: "num_comments",
                        accessor: d => d.num_comments
                    },
                    {
                        Header: "URL Link",
                        id: "url",
                        accessor: d => d.url
                    }
                ]
            } 
        ]
        return (
            <div style={style}>
                <div>
                    <ReactTable
                        style={{ marginLeft: '-40%', marginRight: '-40%', }}
                        data={this.state.users}
                        columns={userColumns}
                    />
                </div>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center',
}
export default DataTableExcel2;