import React, { useState } from "react"

export default function AuthProvider(props) {
    const AuthContext = props.AuthContext
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [login, setlogin] = useState(false)

    console.log(email)
    console.log(password)
    console.log(login)

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
    const value= {email, password, signInEmail, signInPaddword, signOut}
  
    return (
      <AuthContext.Provider value={value}>
        {props.children}
      </AuthContext.Provider>
    )
  }
  