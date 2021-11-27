
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import SignUp from './components/authentication/SignUp/SignUp';

import Home from './pages/Home/Home';

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

      <Home /> 

    </div>
  );  
}

export default App;
