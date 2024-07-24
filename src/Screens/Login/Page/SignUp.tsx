import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import gsap from "gsap";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login", // Adjusted path
        {
          email,
          password,
        }
      );
      console.log(response.data); // Log response data
      // Optionally, handle success or redirect user
      navigate("login");
    } catch (error: any) {
      console.error("Error signing up:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
      // Handle error, show user-friendly message, etc.
    }
  };

  const animateForm = () => {
    gsap.from(".signup-form", {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power3.out",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div
        className="max-w-md w-full px-6 py-12 bg-white shadow-md rounded-md signup-form"
        onLoad={animateForm}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
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
            Sign Up
          </button>
          <button onClick={() => navigate("login")}>login</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
