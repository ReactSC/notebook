import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h2 className="page-err">404 : Page Note Found !</h2>
      <h2>Please go back to <Link className="" style={{"color":"#3504a8"}} to="/">Home Page</Link>.</h2>
  </div>
  )
}

export default NotFound