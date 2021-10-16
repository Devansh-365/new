import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home';
import SignIn from './pages/signin';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/divineAutoGas' component={Home}/>
        <Route exact path='/signin' component={SignIn}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
