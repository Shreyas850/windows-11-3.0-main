import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  
  const navigate = useNavigate();
  const CORRECT_PASSWORD = "shreyuu@19"; 

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (password === CORRECT_PASSWORD) {
      navigate("/Shreyuu"); 
    } else {
      setIsError(true);
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-white">
      
      {/* Profile Picture */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg bg-gray-800 flex items-center justify-center">
         <img 
           src="/profile.jpg" 
           alt="Profile" 
           className="w-full h-full object-cover" 
         />
      </div>

      {/* Hardcoded Profile Name */}
      <h2 className="text-3xl font-semibold mb-6">Shreyuu</h2>

      {/* The Password Form */}
      <form onSubmit={handleLogin} className="flex flex-col items-center w-full max-w-xs">
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsError(false); 
          }}
          className={`w-full px-4 py-2 bg-white/20 border-b-2 outline-none text-white placeholder-gray-300 transition-all text-center ${
            isError ? "border-red-500" : "border-white/50 focus:border-blue-400"
          }`}
          autoFocus
        />
        
        {/* Error Feedback */}
        {isError && (
          <p className="text-red-400 text-sm mt-2 font-medium">
            Incorrect password. Try again.
          </p>
        )}

        <button type="submit" className="hidden">Submit</button>
      </form>
    </div>
  );
}

export default Login;