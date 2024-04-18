import { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AcceptOffer from './AcceptOffer';

function App() {

  return (
    <>  
      <BrowserRouter>
        <Route exact path='/'  />
      </BrowserRouter> 
    </>
  )
}

export default App
