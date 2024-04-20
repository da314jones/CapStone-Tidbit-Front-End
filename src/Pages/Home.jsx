import React, {useContext} from "react";
import "./Home.css";
import { signInWithGoogle } from "../Services/firebase";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div 
      // className="h-screen bg-blue-700 bg-cover bg-center"
      >
        <div 
        className="flex items-center"
        // className="flex items-center justify-center h-full px-6 text-center text-white md:px-12"
        >
          <div>
            <img 
            // className="learner-music" 
            src="/Designer.png" />
          </div>
          <div className="home-page-details">
            <h1 className="go-to-grow">Where Those Who Know <br />Go to <span className="grow">Grow</span></h1>
            <p className="home-page-explain text-lg text-neutral-100">
              Our community addresses this need of bridging the gap by
              demystifying complex concepts and offering straightforward guides,
              making knowledge easily accessible across various subjects.
            </p>
            <div className="button-div">
            <button
              type="button"
              onClick={user ? navigate("/dashboard") : signInWithGoogle}
              // className="start-learning inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
              // data-twe-ripple-init
              // data-twe-ripple-color="light"
            >
              Start Learning
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
