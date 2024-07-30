import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Shop from './Shop';
import ShopDetails from './ShopDetails';
import Contact from './contact';
import Page from './PageNotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
       <Route path='/' element={<Layout/>}></Route>
       <Route path='/shop' element={<Shop/>}></Route>
       <Route path='/shop-details' element={<ShopDetails/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='*' element={<Page/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
