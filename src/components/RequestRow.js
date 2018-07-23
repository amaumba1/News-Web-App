import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'; 
//import 'semantic-ui-css/semantic.min.css';


class RequestRow extends Component {
    render() {
        const { Row, Cell } = Table; 
        const { id, item } = this.props
        return (
            <Row>
                <Cell>{id}</Cell> 
                <Cell>{item.title}</Cell>
                <Cell>{item.author}</Cell>
                <Cell>{item.url}</Cell>
                <Cell>{item.num_comments}</Cell>
                <Cell>{item.points}</Cell>
                <Cell>{item.created_at}</Cell>
            </Row> 
        )
    }
}

export default RequestRow; 