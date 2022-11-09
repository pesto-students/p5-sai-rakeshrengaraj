import React from 'react';

function NavBar(){
    return(
        <nav className='navBar'>
            <div className='navBar-header'>Shortly</div>
            <div className='navBar-navBtns'>
                <a href='#'>Features</a>
                <a href='#'>Pricing</a>
                <a href='#'>Resources</a>
            </div>
            <div className='navBar-loginBtns'>
                <a href='#'>Login</a>
                <a href='#'>Sign Up</a>
            </div>
        </nav>
    )
}

export default NavBar;