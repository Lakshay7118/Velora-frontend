import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 POPUP STATES
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const redirectTo = location.state?.from || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://velora-backend-production-3e79.up.railway.app/api/auth/login",
        { email, password }
      );

      login(res.data);
      navigate(redirectTo, { replace: true });

    } catch (error) {
      const message =
        error.response?.data?.message || "Login failed";

      setPopupMessage(message);
      setShowPopup(true);
    }
  };

  return (
    <>
      {/* ================= POPUP MODAL ================= */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-white w-[90%] max-w-sm p-6 rounded-2xl shadow-2xl text-center animate-fadeIn">

            <h3 className="text-lg font-bold mb-3 text-red-500">
              ⚠ Login Error
            </h3>

            <p className="text-gray-600 mb-6">
              {popupMessage}
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ================= LOGIN FORM ================= */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 shadow-md w-full max-w-md rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* 🔥 FORGOT PASSWORD LINK (NEW) */}
          <div className="text-right mb-4">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
            LOGIN
          </button>

          <p className="text-sm text-center mt-4">
            No account?{" "}
            <Link to="/register" className="underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;