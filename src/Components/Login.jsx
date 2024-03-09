import React, { useContext, useEffect, useState } from "react";
import { useAuth, AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import {
    signInWithGoogle,
    signOut
  } from "../Services/firebase"

  export const Login = () => {
    const user   = useContext(AuthContext);
    const navigate = useNavigate();

     useEffect(() => {
      if (user) {
       navigate("/loggedin");
      }
    }, [user, navigate]);

      return (
      <div>
        <section>
          <div>
            <div> login works</div>
            <button onClick={signInWithGoogle}>Sign in With google</button>
            <button onClick={signOut}> sign out</button>
        </div>
        </section>
      </div>
    );
  };