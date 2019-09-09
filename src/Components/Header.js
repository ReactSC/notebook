import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="left">
      <Link className="brand" to="/" >NoteBook</Link>
      </div>
      <div className="right">
        <NavLink activeClassName="active" to= "/" exact >Home</NavLink>
        <NavLink activeClassName="active" to= "/add" >Add Note</NavLink>
        <NavLink activeClassName="active" to= "/about" >About</NavLink>
      </div>
    </header>
  )
}
export default Header