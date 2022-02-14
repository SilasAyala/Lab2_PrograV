import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
import Ejer2 from './Ejer2/Ejer2';
import Ejer3 from './Ejer3/Ejer3';
import Ejer4 from './Ejer4/Ejer4';

function App() {
  return (
   <Router>
     <MainNavigation />
     <main>
      <Switch>
        <Route path="/" exact>
          <h3> Laboratorio #2: Programación en ReactJS</h3>
          <h3> Silas Ayala - 12002985</h3>
        </Route>
        <Route path="/Ejer2">
          <Ejer2 />
        </Route>
        <Route path="/Ejer3">
          <Ejer3 />
        </Route>
        <Route path="/Ejer4">
          <Ejer4 />
        </Route>
        <Redirect to='/' />
      </Switch>
     </main>
   </Router>
  );
}

export default App;
