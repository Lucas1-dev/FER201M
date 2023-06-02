/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';
import "../Navigation/NavigationStyles.css"
import {ThemeContext} from '../ThemeContext'

export default function Navigation() {


    const { theme, toggle, dark } = useContext(ThemeContext);    
    console.log(toggle);
    return (

        <Navbar className='menu'
        alignLinks="right"
        brand={<span className='brand-logo'  style={{ color: theme.color }} >Player Cards</span>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
            <ul className='ul'>
                <li><Link to='/' style={{ color: theme.color }}><Icon left>home</Icon>Home</Link></li>
                <li to='/about'> <Link to='/about' style={{ color: theme.color }}> <Icon left>info_outline</Icon>About</Link></li>
                <li to='/news'> <Link to='/news' style={{ color: theme.color }}> <Icon left>dvr</Icon>News</Link></li>
                <li to='/contact'><Link to='/contact'style={{ color: theme.color }}><Icon left>contacts</Icon>Contact</Link></li>
            </ul>
           
          <button
            className="switch-mode btn" 
            onClick={toggle}
            
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none'
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Nav to { !dark ? 'Dark' : 'Light' } mode
          </button>
        
        </Navbar>
    )
}
