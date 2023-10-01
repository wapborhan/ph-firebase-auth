import { NavLink } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase/firebase-init";
import { useState } from "react";

const ForgotPass = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  const handleForgotPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="signup-1 flex items-center relative h-screen">
      <div className="overlay absolute inset-0 z-0 bg-black opacity-75"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
          <div className="box bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600 rounded-[2rem] border-t-[10px]">
            <h2 className="text-3xl text-gray-800 text-center">
              Forgot Password
            </h2>

            <form onSubmit={handleForgotPass}>
              <div className="signup-form mt-6 md:mt-12">
                <div className="border-2 border-solid rounded flex items-center mb-4">
                  <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                    <span className="far fa-envelope text-gray-500">
                      <svg
                        viewBox="0 0 8 6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#888"
                        width="20px"
                      >
                        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      className="h-10 py-1 pr-3 w-full"
                    />
                  </div>
                </div>

                <div className="text-center mt-6 md:mt-12">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300">
                    Send Password Reset Mail{" "}
                    <span className="far fa-paper-plane ml-2"></span>
                  </button>
                </div>
              </div>
            </form>

            <div className="border-t border-solid mt-6 md:mt-12 pt-4">
              <p className="text-gray-500 text-center">
                Have account?{" "}
                <NavLink
                  to="/login"
                  className="text-indigo-600 hover:underline"
                >
                  Login
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
