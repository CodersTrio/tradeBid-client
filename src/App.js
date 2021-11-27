
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import SignUp from './components/authentication/SignUp/SignUp';

function App() {
  return (
    <div>

      <AuthProvider>

        <BrowserRouter>


          <Switch>

            {/* <Route exact path="/">
              <Home></Home>

            </Route> */}
            <Route path="/signUp">
              <SignUp></SignUp>

            </Route>



          </Switch>


        </BrowserRouter>


      </AuthProvider>

    </div>
  );
}

export default App;
