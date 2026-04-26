import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const onSubmit = (e) => {
        e.preventDefault();

        login(userData.username);

        navigate('/');
    };
    
    return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center">
      <form onSubmit={onSubmit} className="bg-white p-10 rounded-2xl shadow-lg border-2 border-pink-500 w-80">
        <h2 className="text-2xl font-bold text-rose-800 mb-6 text-center">Login</h2>
        <input 
          type="text" 
          placeholder="Username"
          className="w-full p-2 mb-4 border-2 border-pink-100 rounded-lg outline-none focus:border-pink-500"
          value={userData.username}
          onChange={(e) => setUserData({...userData, username: e.target.value})}
        />
        <input 
          type="password" 
          placeholder="Password"
          className="w-full p-2 mb-6 border-2 border-pink-100 rounded-lg outline-none focus:border-pink-500"
          value={userData.password}
          onChange={(e) => setUserData({...userData, password: e.target.value})}
        />
        <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-full font-bold hover:bg-rose-600">
          Sign In
        </button>
      </form>
    </div>
  );
}
