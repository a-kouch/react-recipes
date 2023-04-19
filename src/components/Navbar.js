import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  // Setting state 
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);;

  const handleClick = () =>  setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Function to remove or show button based on screen size 
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Stops the Sign up button from appearing when refreshing page 
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  kouchy's kitchen 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fa-solid fa-xmark': 'fa-solid fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Category' className='nav-links' onClick={closeMobileMenu}>
                            category
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                            about
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
            </div>
        </nav> 
    </>
  )
}

export default Navbar