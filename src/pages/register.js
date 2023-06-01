import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import auth from '../config/firebase'
import { navigate } from "gatsby";

export default function Register() {
    const [input, setInput] = useState({
        email : '',
        password : '',
       });   
    function HandleChange (e) {
        const target = e.target
        const value = e.currentTarget.value
        const name = target.name
        setInput({
            ...input,
            [name] : value
        })
    }

    function HandleSubmit(e) {
        e.preventDefault();
        const email = input.email
        const pass = input.password

      const get_auth = getAuth();
      createUserWithEmailAndPassword(get_auth,email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log({success : user})
        alert('register success')
        navigate('/login')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({errorCode,errorMessage})
        // ..
      });
  }

  return (
    <div className="layout_login">
      <h1>Register Page</h1>

      <form onSubmit={(e)=>HandleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="input_login"
          name="email"
          type="email"
          placeholder="name"
          onChange={(e) => HandleChange(e)}
        />{" "}
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="input_login"
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) => HandleChange(e)}
        />{" "}
        <br />
        <button type="submit" value="Submit" className="btn_login2">
          Submit
        </button>
      </form>
    </div>
  );
}
