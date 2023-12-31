import React from 'react';
import styles from '../css modules/HomeNav.module.css';
import logo from '../asset/Group 28.svg';
import { NavLink } from 'react-router-dom';

const HomeNav = () => {
    return (
        <div className= {styles.navContainer}>
            <img src={logo} alt="" />
            <nav className={styles.nav}>

                <NavLink to='/' className={styles.navItem} style={({isActive})=>({color: isActive? "#432CDC" : "#8C9093"}) }>Home</NavLink>
                <NavLink to='/about' style={({isActive})=>({color: isActive? "#432CDC" : "#8C9093"})}>About Us</NavLink>
                <NavLink to='/services' style={({isActive})=>({color: isActive? "#432CDC" : "#8C9093"})}>Services</NavLink>


            </nav>
            
        </div>
    );
}

export default HomeNav;
