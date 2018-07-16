import React from 'react';
import Button from './Button'; 
import './Table.css'

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