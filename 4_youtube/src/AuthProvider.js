import React, { useState } from "react"

export default function AuthProvider(props) {
    const AuthContext = props.AuthContext
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    // const [login, setlogin] = useState(false)
    const [login, setlogin] = useState(true)

    // console.log(email)
    // console.log(password)

    function signInEmail(email) {
      setEmail(email)
    }
  
    function signInPaddword(password) {
      setPassword(password)
      setlogin(true)
    }
  
    function signOut() {
      setEmail(null)
      setPassword(null)
      setlogin(false)
    }
    const value= {email, password, login, signInEmail, signInPaddword, signOut}
  
    return (
      <AuthContext.Provider value={value}>
        {props.children}
      </AuthContext.Provider>
    )
  }
  