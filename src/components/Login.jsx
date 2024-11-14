import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
  const Navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then(result =>{
        console.log(result.user);
        e.target.reset();
        Navigate('/');
    })
    .catch(error =>{
        console.log(error.message);
    })
  };

  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
      Navigate('/')
    })
    .catch(error => console.log(error.message))
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mx-auto mb-4 text-sm">
            New to this website? please
            <Link
              to="/register"
              className="underline font-semibold text-lg text-blue-800"
            >
              Register
            </Link>
          </p>
          <p className="flex mb-8 justify-center items-center">
            <button onClick={handleGoogleSignIn} className="btn  hover:btn-primary shadow-lg">Google</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
