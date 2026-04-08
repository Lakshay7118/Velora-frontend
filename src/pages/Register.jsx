import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, User, Lock, ArrowRight, ShieldCheck } from "lucide-react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      // OPTIONAL: Save user/token
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Account created successfully!");
      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tighter mb-2">
            VELORA
          </h1>
          <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-bold">
            Create your member account
          </p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border">
          <form onSubmit={handleRegister} className="space-y-5">
            {/* NAME */}
            <div>
              <label className="text-xs uppercase text-gray-400 font-bold">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  name="name"
                  required
                  onChange={handleChange}
                  className="w-full bg-gray-50 rounded-xl py-4 pl-12 pr-4"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-xs uppercase text-gray-400 font-bold">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full bg-gray-50 rounded-xl py-4 pl-12 pr-4"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-xs uppercase text-gray-400 font-bold">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                  className="w-full bg-gray-50 rounded-xl py-4 pl-12 pr-4"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-5 rounded-xl uppercase tracking-widest"
            >
              {loading ? "Creating..." : "Create Account"}
              <ArrowRight className="inline ml-2" size={14} />
            </button>
          </form>

          <p className="text-center text-sm mt-6 text-gray-400">
            Already a member?{" "}
            <Link to="/login" className="font-bold text-black">
              Sign In
            </Link>
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4 text-xs text-gray-400">
          <ShieldCheck size={14} /> Secure Data
        </div>
      </div>
    </div>
  );
}

export default Register;
