import logo from './logo.svg';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import {BrowserRouter as Router,
        Switch,
        Route} from  'react-router-dom';

import Registrop from './pages/Hindex';
import Loginp from './pages/Logindex';
import Boardapp from './pages/Boardindex';

function App() {
  return (
    <Router>
       <Switch>
        <Route exact path="/"><Registrop/></Route>
        <Route exact path="/login"><Loginp/></Route>
        <Route path="/boardapp" exact><Boardapp/></Route>
      </Switch>
    </Router>
   
  );
}

export default App;
