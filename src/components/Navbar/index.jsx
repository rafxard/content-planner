import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    CONTENTPLAN
                </div>
                <div className={styles.list}>
                    <Link to="">Products</Link>
                    <Link to="">Pricing</Link>
                    <Link to="">About Us</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar