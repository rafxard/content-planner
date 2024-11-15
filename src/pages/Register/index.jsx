import React, { useState } from 'react'
import TextInput from '../../components/TextInput'

import styles from './index.module.scss'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Register = () => {
  const [passwordType, setPasswordType] = useState("password")


  return (
    <div className={styles.register}>
      <div className={styles.register_container}>
        <div className={styles.title}>Let’s get set up first</div>
        <div className={styles.register_container_form}>
          <div className={styles.name}>
            <TextInput name="first_name" placeholder="First name" />
            <TextInput name="last_name" placeholder="Last name" />
          </div>
          <TextInput name="email" placeholder="Email" />
          <TextInput name="password" type={passwordType} placeholder="Password" rightIcon={passwordType === 'password' ? <FaEyeSlash /> : <FaEye />}
            rightIconOnClick={() => {
              setPasswordType(passwordType === 'password' ? "text" : "password")
            }} />

          <div className={styles.have_account}>Already have account? <Link to={"/login"}>Login</Link> </div>
          <Link to={"/"} className={styles.btn_submit}>
            Create account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register