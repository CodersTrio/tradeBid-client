
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
// import SignIn from './components/authentication/SignIn/SignIn';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import SignUp from './components/authentication/SignUp/SignUp';
import Home from './pages/Home/Home';
import SignIn from './components/authentication/SignIn/SignIn';
import AddProduct from './components/AddProduct/AddProduct';
import ProductCard from './components/ProductCard/ProductCard';


function App() {
  return (
    <div>
      {/* <BrowserRouter>
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
      </BrowserRouter> */}

      <AuthProvider>

        <BrowserRouter>


          <Switch>

            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/addProduct">
              <AddProduct></AddProduct>

            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>

            </Route>
            <Route path="/signIn">
              <SignIn></SignIn>

            </Route>
            <Route path="/products">
              <ProductCard></ProductCard>

            </Route>



          </Switch>


        </BrowserRouter>


      </AuthProvider>

    </div>
  );
}

export default App;
