import React, { useState } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi'
import cn from 'classnames'

const Navbar = () => {
    const dropdownList = [
        {
            label: "Content Visualization",
            path: "/content-visualization"
        },
        {
            label: "Calendar Timeline",
            path: "/content-planner/calendar-timeline"
        },
        {
            label: "Content Management",
            path: "/content-management"
        },
        {
            label: "AI analytic suggestions",
            path: "",
            disabled: true
        },
        {
            label: "Cross-platform content optimization",
            path: "",
            disabled: true
        },
        {
            label: "Asset library and content version control",
            path: "",
            disabled: true
        },
        {
            label: "Automation",
            path: "",
            disabled: true
        },
        {
            label: "Custom labeling",
            path: "",
            disabled: true
        },
        
    ]

    const [isOpenProduct, setIsOpenProduct] = useState(false);

    return (
        <div className={styles.navbar}>
            <div className={styles.navigation}>
                <Link to="/" className={styles.logo}>
                    CONTENTPLAN
                </Link>
                <div className={styles.list}>
                    {isOpenProduct && <div className={styles.backdrop} onClick={() => {
                        setIsOpenProduct(state => !state)
                    }} />}
                    <div className={styles.dropdown} onClick={() => {
                        setIsOpenProduct(state => !state)
                    }}>
                        <span>Products</span>
                        <BiChevronDown size={'20'} className={cn(styles.chevron, isOpenProduct && styles.active)} />
                        <div className={cn(styles.dropdown_list, isOpenProduct && styles.active)}>
                            {dropdownList.map((item) => (
                                <Link to={item.path} className={cn(styles.dropdown_list_item, item.disabled && styles.disabled)}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="">About Us</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar