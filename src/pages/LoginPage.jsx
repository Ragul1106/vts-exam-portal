import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/images/Img 5.png';
import './LoginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validUsers = {
    'kavya.uiux@vts.in': {
      password: 'kavya123',
      name: 'Kavya',
      image: profileImg
    },
    'ramesh.uiux@vts.in': {
      password: 'ramesh123',
      name: 'Ramesh',
      image: profileImg
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = validUsers[email];

    if (user && user.password === password) {
      localStorage.setItem('userName', user.name);
      localStorage.setItem('userImage', user.image); // Save image path
      navigate('/overview');
    } else {
      setError('Invalid email or password. Only Kavya or Ramesh can login.');
    }
  };

  return (
    <div className="login-container">
      <div className="particles-background"></div>
      <div className="login-form">
        <h1>Login</h1>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
