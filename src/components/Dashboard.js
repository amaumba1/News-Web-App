import React from 'react'
//import Table from './Table'
import NavBar from './NavBar';
//import DataList from './DataList'
//import HackerNew from './HackerNew'
import DataList from './DataList';


const Dashboard = () => {
    return (
        <div>
          <NavBar /> 
          <div className="table-container">
            <DataList/> 
          </div>
        </div> 
    )
}

export default Dashboard; 