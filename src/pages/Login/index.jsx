import React, { useState } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import TextInput from '../../components/TextInput'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
  const [passwordType, setPasswordType] = useState("password")

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.title}>Login</div>
        <div className={styles.form_container}>
          <TextInput name="username" placeholder="Username / email" />
          <TextInput name="password" type={passwordType} placeholder="Password" rightIcon={passwordType === 'password' ? <FaEyeSlash /> : <FaEye />}
          rightIconOnClick={() => {
            setPasswordType(passwordType === 'password' ? "text" : "password")
          }} />
          <Link to="/" className={styles.btn_submit}>
            Login
          </Link>
        </div>
        <div className={styles.other_container}>
          <Link to={"/register"}>
            Create an account
          </Link>

          <div>
            Forgot password?
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login