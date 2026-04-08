import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 SEND OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://velora-backend-production-3e79.up.railway.app/api/auth/send-otp",
        { email }
      );

      setMessage(res.data.message);
      setStep(2);

    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 VERIFY OTP + RESET
  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://velora-backend-production-3e79.up.railway.app/api/auth/verify-otp",
        { email, otp, password }
      );

      setMessage(res.data.message);

      // 🔥 SUCCESS → redirect after 2 sec
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      setMessage(err.response?.data?.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={step === 1 ? handleSendOtp : handleReset}
        className="bg-white p-8 shadow-md w-full max-w-md rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {step === 1 ? "Forgot Password" : "Enter OTP"}
        </h2>

        {/* STEP 1: EMAIL */}
        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {/* STEP 2: OTP + PASSWORD */}
        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border p-3 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-60"
            >
              {loading ? "Updating..." : "Reset Password"}
            </button>

            {/* 🔥 BACK BUTTON */}
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full mt-3 text-sm text-gray-500 underline"
            >
              Change Email
            </button>
          </>
        )}

        {/* MESSAGE */}
        {message && (
          <p className="text-sm text-center mt-4 text-gray-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}