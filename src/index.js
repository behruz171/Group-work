import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card2 from './companent/card2';
import Korzinka from './companent/Korzinka';
import Like from './companent/Like';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/card2/:id' element={<Card2/>}/>
        <Route path='/korzinka' element={<Korzinka/>}/>
        <Route path='/like' element={<Like/>}/>
      </Routes>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);



