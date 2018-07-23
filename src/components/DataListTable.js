import React, { Component } from 'react';
//import Button from './Button';
import RequestRow from './RequestRow';
import {Table} from 'semantic-ui-react'
import './Table.css'

class DataListTable extends Component {
    renderRows() {
        return this.props.list.map((item, objectID) => {
            return (
                <RequestRow 
                    key={objectID}
                    id={objectID}
                    item={item}
                    author={this.props.author}
                    title={this.props.title}
                    url={this.props.url}
                    num_comments={this.props.num_comments}
                    points={this.props.points}
                    created_at={this.props.created_at}
                /> 
            )
        })

    }
    
    render() {
        const { Header, Row, HeaderCell, Body } = Table 
        return (
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Title</HeaderCell>
                        <HeaderCell>Author</HeaderCell>
                        <HeaderCell>URL Link</HeaderCell>
                        <HeaderCell>Number of Comments</HeaderCell>
                        <HeaderCell>Points</HeaderCell>
                        <HeaderCell>Data and Time Created</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {this.renderRows()}
                </Body>
            </Table>
        )
    }
}
   
export default DataListTable; 
