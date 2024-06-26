import './App.css'
import Navbars from './components/Navbars'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import AddBrand from './components/AddBrand';
import AddCategory from './components/AddCategory';
import AddProduct from './components/AddProduct';
import BrandList from './components/BrandList';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
     <BrowserRouter>
     <Navbars/>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path='/addbrand' element={<ProtectedRoute><AddBrand/></ProtectedRoute>}/>
        <Route path='/addcategory' element={<ProtectedRoute><AddCategory/></ProtectedRoute>}/>
        <Route path='/addproduct' element={<ProtectedRoute><AddProduct/></ProtectedRoute>}/>
        <Route path='/brandlist' element={<ProtectedRoute><BrandList/></ProtectedRoute>}/>
        <Route path='/categorylist' element={<ProtectedRoute><CategoryList/></ProtectedRoute>}/>
        <Route path='/productlist' element={<ProtectedRoute><ProductList/></ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>

  )
}








export default App
