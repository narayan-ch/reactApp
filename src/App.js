import React from 'react';
import About from './About';
import Contact from './Contact'
import './App.css';
import User from './User'
import {
  BrowserRouter as Router,
  Route,Switch,
  Link
} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/about">About</Link></Nav.Link>
      <Nav.Link href="#features"> <Link to="/about">About Us</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/about">About Us</Link></Nav.Link>
    </Nav>
   
  </Navbar>
  <Switch>
          <Route path="/about">
            <User />
          </Route>
          <Route path="/about">
            <User />
          </Route>
          <Route path="/about">
            <User />
          </Route>
        </Switch>

        </Router>
    </div>
  );
}

export default App;
