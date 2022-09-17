import React from 'react';
import user from '../../images/user.png';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <img src={user} alt="user" width="60" height="45" class="d-inline-block align-text-top"/>
          
        </div>
      </nav>
    </div>
  )
}
export default Header;