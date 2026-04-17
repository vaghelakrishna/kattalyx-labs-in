import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2, User, ArrowLeft, ChevronRight } from "lucide-react";
import { authAPI } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Import your logo here
// import logo from "../assets/kattalyx-logo.png"; 

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await authAPI.register({ name, email, role, password });
      navigate("/login");
    } catch (error: any) {
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#f8fafc] relative overflow-hidden font-sans">

      {/* Brand Aesthetic Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-yellow-100/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Back to Home */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-all text-xs font-bold uppercase tracking-wider"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      {/* Glassmorphism Card */}
      <div className="w-full max-w-[460px] bg-white/60  rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-white/80 p-8 md:p-12 relative z-10">

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="mb-6">
            {/* If you have a logo image, use this: */}


            {/* If you don't have the image file ready yet, 
                this is a styled text-based logo fallback:  */}
            <div className="flex items-center gap-2">
              <div className="rounded-lg flex items-center justify-center font-bold text-white text-xl">
                <img
                  src="./src/assets/logo.png"
                  alt="Kattalyx Labs Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              {/* <span className="text-xl font-black text-slate-900 tracking-tighter">kattalyx<span className="text-blue-600">labs</span></span> */}
            </div>

          </div>

          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Create account</h2>
          <p className="text-slate-500 text-sm mt-1 text-center">Start your innovative journey today</p>
        </div>

        {error && (
          <div className="bg-red-50/50 backdrop-blur-md border border-red-100 text-red-600 rounded-2xl p-3 text-xs font-medium mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-[11px] uppercase tracking-widest font-bold text-slate-400 ml-1">Full Name</Label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="pl-11 h-12 bg-white/40 border-slate-200/60 rounded-2xl focus-visible:ring-blue-600/20 focus-visible:border-blue-600 placeholder:text-slate-300"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
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
                className="pl-11 h-12 bg-white/40 border-slate-200/60 rounded-2xl focus-visible:ring-blue-600/20 focus-visible:border-blue-600 placeholder:text-slate-300"
                placeholder="you@email.com"
              />
            </div>
          </div>

          {/* Role */}
          <div className="space-y-1.5">
            <Label htmlFor="role" className="text-[11px] uppercase tracking-widest font-bold text-slate-400 ml-1">Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="h-12 bg-white/40 border-slate-200/60 rounded-2xl focus:ring-blue-600/20 w-full">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-slate-100 shadow-xl">
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Speaker">Speaker</SelectItem>
                <SelectItem value="School">School</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-[11px] uppercase tracking-widest font-bold text-slate-400 ml-1">Password</Label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-11 pr-11 h-12 bg-white/40 border-slate-200/60 rounded-2xl focus-visible:ring-blue-600/20 focus-visible:border-blue-600 placeholder:text-slate-300"
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

          <Button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-4"
            disabled={loading}
          >
            {loading ? (
              <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Creating...</>
            ) : (
              <span className="flex items-center gap-2">Create Account <ChevronRight size={16} /></span>
            )}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500 font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 decoration-yellow-400/60 decoration-2 transition-all">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}