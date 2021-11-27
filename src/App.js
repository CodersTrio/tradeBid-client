import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import SignIn from './components/authentication/SignIn/SignIn';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
