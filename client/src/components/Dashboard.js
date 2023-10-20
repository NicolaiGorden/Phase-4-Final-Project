import React from 'react';
import Sidebar from './Sidebar';
import Library from './Library';

function Dashboard() {

    return (
        <div class="dashboard-wrapper">
            <Sidebar/>
            <Library/>
        </div>
    )
}

export default Dashboard;