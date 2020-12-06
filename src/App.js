
import './App.css';
import HomePage from './pages/home-page/home-page';
import {Route,Switch} from 'react-router-dom'
import LogIn from './pages/login/login'
import SignUp from './pages/sign-up/sign-up'
import UserPage from './pages/userPage/userPage'
function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/login' component={LogIn}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exact path='/user' component={UserPage}/>
      </Switch>
       
    </div>
  );
}

export default App;
