import React from 'react'

import styles from './index.module.scss'

const TextInput = (props) => {
    const {name, type = "text", placeholder, rightIcon, rightIconOnClick = () => {}} = props
  return (
    <div className={styles.container}>
        <input name={name} type={type} placeholder={placeholder} className={styles.text_input} />
        {rightIcon && <div className={styles.right_icon} onClick={rightIconOnClick}>{rightIcon}</div>}
    </div>
  )
}

export default TextInput