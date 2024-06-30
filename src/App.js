import ResponsiveAppBar from './AppBar';
import ProductList from './ProductList';
import { Routes, Route } from "react-router-dom";
import LoginComp from './features/user/LoginComp';
import { Pagination } from '@mui/material';




function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<LoginComp/>}></Route>
        <Route path='/cars' element={<ProductList/>}></Route>
        <Route path="/2" component={<Pagination/>} />
        <Route path="/3" component={<Pagination/>} />

      </Routes>
      {/* <ProductList/>
      <Login/> */}
    
    </div>
  );
}

export default App;
