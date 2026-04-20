import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowLeft, ChevronRight } from "lucide-react";
// import { authAPI } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // try {
    //   // const response = await authAPI.login({ email, password });
    //   // const { token, user } = response.data.data;
    //   // localStorage.setItem("token", token);
    //   // localStorage.setItem("user", JSON.stringify(user));

    //   // Role-based navigation logic
    //   if (user.role === "Admin" || user.role === "SuperAdmin") {
    //     navigate("/admin-dashboard");
    //   } else if (user.role === "Student") {
    //     navigate("/student-dashboard");
    //   } else if (user.role === "School") {
    //     navigate("/school-dashboard");
    //   } else if (user.role === "Speaker") {
    //     navigate("/speaker-dashboard");
    //   } else {
    //     navigate("/");
    //   }
    //   window.location.reload();
    // } catch (error: any) {
    //   setError(error.response?.data?.message || "Login failed");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    /* Root container with Kattalyx Labs Light Theme Background */
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#f8fafc] relative overflow-hidden font-sans">

      {/* Brand Aesthetic Blobs (Blue & Yellow Glow) */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-yellow-100/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Back to Home Link */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-all text-xs font-bold uppercase tracking-wider"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      {/* Glassmorphism Card (Ebolt Inspired) */}
      <div className="w-full max-w-[460px] bg-white/60 backdrop-blur-2xl rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-white/80 p-8 md:p-12 relative z-10 flex flex-col">

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="mb-6">
            <img
              src="./src/assets/logo.png" // Ensure this path is correct
              alt="Kattalyx Labs Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h2>
          <p className="text-slate-500 text-sm mt-1 text-center">Sign in to continue your journey</p>
        </div>

        {error && (
          <div className="bg-red-50/50 backdrop-blur-md border border-red-100 text-red-600 rounded-2xl p-3 text-xs font-medium mb-6 text-center animate-in fade-in zoom-in duration-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-[11px] uppercase tracking-widest font-bold text-slate-400 ml-1">Email address</Label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-11 h-12 bg-white/40 border-slate-200/60 rounded-2xl focus-visible:ring-blue-600/20 focus-visible:border-blue-600 transition-all placeholder:text-slate-300 shadow-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center px-1">
              <Label htmlFor="password" className="text-[11px] uppercase tracking-widest font-bold text-slate-400">Password</Label>
              <Link to="/forgot-password" className="text-[11px] font-bold text-blue-600 hover:text-blue-700">Forgot?</Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-11 pr-11 h-12 bg-white/40 border-slate-200/60 rounded-2xl focus-visible:ring-blue-600/20 focus-visible:border-blue-600 transition-all placeholder:text-slate-300 shadow-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-4"
            disabled={loading}
          >
            {loading ? (
              <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Signing in...</>
            ) : (
              <span className="flex items-center gap-2">Sign in <ChevronRight size={16} /></span>
            )}
          </Button>
        </form>

        {/* Footer Link */}
        <p className="mt-10 text-center text-sm text-slate-500 font-medium">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 decoration-yellow-400/60 decoration-2 transition-all">
            Sign up free
          </Link>
        </p>
      </div>
    </div>
  );
}