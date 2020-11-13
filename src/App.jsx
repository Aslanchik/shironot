import * as React from 'react';

import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <> 
      <Navbar/>
      <main>
        <Dashboard/>
      </main>
    
    </>
   );
}
 
export default App;

