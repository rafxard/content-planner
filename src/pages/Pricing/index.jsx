import React from 'react'

import freeImage from '../../assets/img/free.png'
import advanceImage from '../../assets/img/advance.png'
import proImage from '../../assets/img/pro.png'

import styles from './index.module.scss'

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <div className={styles.title}>
        Choose your plan
      </div>
      <div className={styles.content}>
        <div className={styles.content_item}>
          <img src={freeImage} alt="free" />
        </div>
        <div className={styles.content_item}>
          <img src={advanceImage} alt="advance" />
        </div>
        <div className={styles.content_item}>
          <img src={proImage} alt="pro" />
        </div>
      </div>
    </div>
  )
}

export default Pricing