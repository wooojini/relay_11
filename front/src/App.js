import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainBoard from './pages/MainBoard';
import MainPage from './pages/MainPage';
import PageFrame from './components/PageFrame';
import Register from './pages/Register';
import PageHeader from './components/PageHeader';
import Photo from './pages/Photo';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SignUp from './components/signUp'; 

 
function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/main' exact component={MainBoard}></Route> 
          <Route path='/register' exact component={Register}></Route>
          <Route path='/' exact component={MainPage}></Route>
          <Route path='/photo' exact component={Photo}></Route>
          <Route path='/registercomplete' exact component={RegisterPage}></Route>
          <Route path='/photo' exact component={Photo}></Route>
          <Route path='/signup' exact component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
  );
} 

export default App; 
