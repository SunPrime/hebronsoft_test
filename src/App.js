import React from 'react'
import {NavLink} from 'react-router-dom'

import './style/app.css'

const logOut = () => {
    localStorage.removeItem('user');
};

const App = ({children}) => (
    <div className="App">
      <div className='menu-bar'>
        <div className='menu-item'>
          <NavLink exact to='/' className='menu-item-link'>Home</NavLink>
        </div>
        <div className='menu-item'>
          <NavLink to='/projects' className='menu-item-link'>Projects</NavLink>
        </div>
        <div className='menu-item' >
          <NavLink to='/' onClick={logOut} className='menu-item-link'>Log out</NavLink>
        </div>
      </div>
      <div className='content'>
        {children}
      </div>
    </div>
);

export default App
