import { useState } from "react";
import axios from "axios";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log(response.data); // Assuming backend sends a JWT token
      console.log("token", response.data.token);
      let token = response.data.token;
      navigate("/home");
      // Optionally, you can store the token in localStorage or sessionStorage
      // and redirect the user to another page upon successful login
      if (token) {
        
      }
    } catch (error) {
      navigate("/home");
      console.error("Error logging in:", error);
      // Handle error, show user-friendly message, etc.
    }
  };

  // GSAP animation example
  const animateForm = () => {
    gsap.from(".login-form", {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power3.out",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div
        className="max-w-md w-full px-6 py-12 bg-white shadow-md rounded-md login-form"
        onLoad={animateForm}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-md mb-4 placeholder-gray-500 border border-gray-300 focus:outline-none focus:border-green-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full px-4 py-3 rounded-md mb-6 placeholder-gray-500 border border-gray-300 focus:outline-none focus:border-green-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
