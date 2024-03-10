import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import './NavBar.css'

import {
  signInWithGoogle,
  signOut
} from "../Services/firebase"

export default function NavBar() {
const [dropDown, setDropdown] = useState(false);
const user = useContext(AuthContext);

const handleToggleDropdown = () => {
  setDropdown(!dropDown);
};

return (
  <div className='navbar-container'>
    <img className='brand-logo' src={"/tidbitsBrandLogo.png"} alt="Tidbits Brand Logo"/>   
    <div className='profile-menu'>
      {user ? ( 
        <img
        src={user.photoURL}
        alt="Profile Picture"
        onClick={() => setDropdown(!dropDown)}
        />
      ) : (
        <img
        src={"/profileIcon.jpg"} 
        alt="Profile Icon"
        onClick={() => setDropdown(!dropDown)}
      />
      )}
      {dropDown && (
        <ul className='dropdown'>
          {user ? (
            <li><a onClick={signOut} >Sign Out</a></li>
          ) : (
            <>
              <li><a onClick={signInWithGoogle}>Sign Up</a></li>
              <li><a href="/login">Login</a></li>
            </>
          )}
        </ul>
      )}
    </div>
  </div>
);
}

