import React, { Component } from 'react';
import './Table.css'

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

function isSearched(searchTerm) {
    return function(item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase()); 
    }
}

class Table extends Component {
    constructor(props) {
        super(props)

        this.state= {
            list: list,
            searchTerm: '' 
        }
        this.onDismiss = this.onDismiss.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })

    }

    onDismiss(id) {
       const isNotId = item => item.objectID !== id; 
       const updatedList = this.state.list.filter(isNotId)
       this.setState({ list: updatedList })
    }
    
    render() {
        const { searchTerm, list } = this.state
        // let cols = [
        //     { field: 'title', header: 'Title' },
        //     { field: 'author', header: 'Author' },
        //     { field: 'num_comments', header: 'Number of Comments' },
        //     { field: 'points', header: 'Points' },
        //     { field: 'url', header: 'Link to the Website' }
        // ];

        // let dynamicColumns = cols.map((col, i) => {
        //     return <Column key={col.field} field={col.field} header={col.header} />;
        // });

        return (
            <div className="App">
                <Search 
                    value={searchTerm}
                    onChange={this.onSearchChange}
                >
                Search
                </Search> 
                <Table2 
                    list={list}
                    pattern={searchTerm}
                    onDismiss={this.onDismiss}
                />    
            </div>
        );
    }
}


const Search = ({ value, onChange, children}) =>  
    <form>
        {children}
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    </form> 
        

class Table2 extends Component {
    render() {
        const { list, pattern, onDismiss } = this.props;
        return (
            <div> 
            {
                list.filter(isSearched(pattern)).map((item) => {
                    return (
                        <div key={item.objectID}>
                            <span>
                               <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.num_comments}</span>
                            <span>{item.points}</span>
                            <span>
                                <Button onClick={() => onDismiss(item.objectID)}>
                                    Dismiss
                                </Button>
                            </span>
                        </div>
                    )
                })
                
            }
            </div>
        )
    }
}

class Button extends Component {
    render() {
        const { onClick, className='', children } = this.props; 
        return (
            <button
                onClick={onClick}
                className={className}
                type="button"
            >
            {children}
            </button> 
        )

    }
}
export default Table;
