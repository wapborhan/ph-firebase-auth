import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase-init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSIgnIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const handleGoogleLogOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithubSIgnIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // console.log(user);

  return (
    <div className="flex justify-center gap-8">
      <div className="data space-y-8">
        {user ? (
          <button
            className="mt-10 bg-blue-600 px-4 py-2 rounded-md text-white"
            onClick={handleGoogleLogOut}
          >
            Log Out
          </button>
        ) : (
          <div className="flex gap-6">
            <button
              className="mt-10 bg-blue-600 px-4 py-2 rounded-md text-white"
              onClick={handleGoogleSIgnIn}
            >
              Google Login
            </button>
            <button
              className="mt-10 bg-blue-600 px-4 py-2 rounded-md text-white"
              onClick={handleGithubSIgnIn}
            >
              github Login
            </button>
          </div>
        )}

        {user && (
          <div className="border-2 p-8 rounded flex flex-col gap-4 ">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="rounded-full w-40 mx-auto"
            />
            <h1>Name : {user.displayName}</h1>
            <h1> Email : {user.email}</h1>
            <h1>Registered: {user?.metadata?.creationTime}</h1>
            <h1>Last Login: {user?.metadata?.lastSignInTime}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
