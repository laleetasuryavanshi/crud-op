import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import InsertEntry from './component/InsertEntry';
import UserComponent from './component/UserComponent';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    
    <Router>
    <div className="container">
               <UserComponent/>
                    <Switch> 
                          <Route path = "/" exact component = {UserComponent}></Route>
                          <Route path = "/books" component = {UserComponent}></Route>
                          <Route path = "/add-books" component = {InsertEntry}></Route>
                          
                           {/*<Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
              
            </div>
        </Router>
      
   



    
    </div>
  );
}

export default App;
