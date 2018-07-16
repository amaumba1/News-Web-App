import React from 'react'
import Table from './Table'
import NavBar from './NavBar';


const Dashboard = () => {
    return (
        <div>
            <NavBar/> 
          <div className="table-container">
            <Table /> 
          </div>
        </div> 
    )
}

export default Dashboard; 