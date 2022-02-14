
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Components/Home';
import Dashbord from './Components/Dashbord';
import myProfile from './Components/myProfile';
import UserProfile from './Components/UserProfile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path={'/UserProfile/:id/:FullName/:Email/:Mobile/:Skills'}component={UserProfile}/>
        <Route path={'/myProfile'}component={myProfile}/>
        <Route path={'/Dashbord'}component={Dashbord}/>
        <Route path={'/signUp'}component={SignUp}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/'} component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
