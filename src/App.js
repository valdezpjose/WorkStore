import React from 'react';
import {Switch,Route} from 'react-router-dom'

import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

import './default.scss';
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'


function App() {
  return (
    <div className="App">
       <Switch>    
       <Route path="/registration" render={()=>(
             <MainLayout>
               <Registration />
             </MainLayout>
           )}/>          
        <Route path="/" render={()=>(
             <HomepageLayout>
               <Homepage />
             </HomepageLayout>
           )}/>  
             
        </Switch>
    </div>
  );
}

export default App;
