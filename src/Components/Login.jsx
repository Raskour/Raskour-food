import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import USERS from "../users";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [open, setIsOpen] = useState(false);

  const { user, setUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const user = USERS.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      // user is in authenticated,
      setUser({ email, name: user.name });
    } else {
      // invalid auth credentials
      setError(true);
    }
  };

  if (user) {
    // already logged in
    return <Navigate to="/" />;
  }

  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <p>Welcome!</p>
              <p>Enter your email address and password to log in.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    placeholder="Your password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit">Sign In</button>
            </form>
            {error && (
              <div>
                <p>
                  Invalid Credentials. Check your email or password and try
                  again!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
