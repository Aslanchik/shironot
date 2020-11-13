import React from 'react';

import SongContainer from './SongContainer';

export interface DashboardProps {
    
}
 
const Dashboard: React.FC<DashboardProps> = () => {
    return ( 
        <div className="dashboard">
            <SongContainer/>
        </div>
     );
}
 
export default Dashboard;