
import './App.css';
import HomePage from './pages/home-page/home-page';
import {Route,Switch} from 'react-router-dom'
import LogIn from './pages/login/login'
import SignUp from './pages/sign-up/sign-up'
import UserPage from './pages/userPage/userPage'
import NavBar from './components/nav-bar/nav-bar';
import PrivateRoute from './util/privat-route/privat-route'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/login' component={LogIn}/>
        <Route exact path='/signUp' component={SignUp}/>
        <PrivateRoute exact path='/user' component={UserPage}/>
      </Switch>
       
    </div>
  );
}

export default App;
