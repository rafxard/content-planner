import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

import styles from './index.module.scss'

const MainLayout = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout