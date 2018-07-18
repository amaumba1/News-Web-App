import React from 'react';
import Button from './Button'; 
import './Table.css'

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

const Table = ({ list, onDismiss }) =>
    <div>
            {list.map(item => 
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
            )}
        
    </div>

export default Table; 