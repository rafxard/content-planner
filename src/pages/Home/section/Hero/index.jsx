import React from 'react'
import styles from './index.module.scss'

import heroImage from '../../../../assets/img/hero.png'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_text}>
      "Plan, Post, Perform – Simplify Your Content Workflow"
      </div>
      <div className={styles.hero_image}>
      <img src={heroImage} alt="hero" />
      </div>
    </div>
  )
}

export default Hero