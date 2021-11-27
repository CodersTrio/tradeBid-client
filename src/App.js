
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import SignUp from './components/authentication/SignUp/SignUp';
import Home from './pages/Home/Home';
import SignIn from './components/authentication/SignIn/SignIn';

function App() {
  return (
    <div>

      <AuthProvider>

        <BrowserRouter>


          <Switch>

            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>

            </Route>
            <Route path="/signIn">
              <SignIn></SignIn>

            </Route>



          </Switch>


        </BrowserRouter>


      </AuthProvider>

    

    </div>
  );  
}

export default App;
