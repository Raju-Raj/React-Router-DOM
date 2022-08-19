import React,{lazy,Suspense} from 'react';
import './App.css';
// import About from './components/About';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import { Authenticate } from './components/auth';
import Profile from './components/Profile';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
const LazyAbout = lazy(()=>import('./components/About'))
function App() {
  return (
    <div className="App">
      <Authenticate>
      <NavBar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<Suspense fallback="Loading..."><LazyAbout/></Suspense>}/>
       <Route path="/ordersummary" element={<OrderSummary/>}/>
       <Route path="/product" element={<Products/>}>
         <Route index element={<NewProduct/>}/>
         <Route path="newproducts" element={<NewProduct/>}/>
         <Route path="featuredproducts" element={<FeaturedProduct/>}/>
       </Route>
       <Route path='/users' element={<Users/>}/>
       <Route path='/users/:userid' element={<UserDetails/>}/>
       <Route path='/users/admin' element={<Admin/>}/>
       <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path="*" element={<PageNotFound/>}/>
     </Routes>
     </Authenticate>
    </div>
  );
}

export default App;
