import React, { Component } from 'react';
import { MegaMenu } from 'primereact/megamenu';
//import { InputText } from 'primereact/inputtext'
//import { Button } from 'primereact/button'
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import './NavBar.css'; 
//import Search from './Search'
//import HackerNew from './HackerNew'; 

import Header from './Header'; 


//import './App.css';


class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    //label: 'TV', icon: 'fa fa-fw fa-check',
                    items: [
                        [
                            {
                                //label: 'TV 1',
                                items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
                            },
                            {
                                //label: 'TV 2',
                                items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                            }
                        ],
                        [
                            {
                                //label: 'TV 3',
                                items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
                            },
                            {
                                //label: 'TV 4',
                                items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
                    items: [
                        [
                            {
                                //label: 'Sports 1',
                                items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
                            },
                            {
                                //label: 'Sports 2',
                                items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
                            },
                        ],
                        [
                            {
                                //label: 'Sports 3',
                                items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
                            },
                            {
                                //label: 'Sports 4',
                                items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
                            }
                        ],
                        [
                            {
                                //label: 'Sports 5',
                                items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
                            },
                            {
                                //label: 'Sports 6',
                                items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Entertainment', icon: 'fa fa-fw fa-child',
                    items: [
                        [
                            {
                                label: 'Entertainment 1',
                                items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
                            },
                            {
                                label: 'Entertainment 2',
                                items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Entertainment 3',
                                items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
                            },
                            {
                                label: 'Entertainment 4',
                                items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Technology', icon: 'fa fa-fw fa-gears',
                    items: [
                        [
                            {
                                label: 'Technology 1',
                                items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
                            },
                            {
                                label: 'Technology 2',
                                items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
                            },
                            {
                                label: 'Technology 3',
                                items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{ label: 'Technology 4.1' }, { label: 'Technology 4.2' }]
                            }
                        ]
                    ]
                }
            ]
        };
    }

    render() {
        return (
          <div>
            <div>
                <div className="content-section implementation">
                    <Header/>
                    <MegaMenu model={this.state.items}>
                    </MegaMenu>
                </div>
            </div>
          </div>
        );
    }
}

export default NavBar;
