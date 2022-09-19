//HOME/ACTIVE GARDENS PAGE

import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

import Garden from '../Garden/Garden';
import GardenForm from '../GardenForm/GardenForm';



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
   
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
:
      <div>
        <Garden />
      </div>

      <div>
        <GardenForm />
      </div>
    </div>
  
    
  
    
  );
}
    
     
 
  

// this allows us to use <App /> in index.js

export default UserPage