import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Palette,
  Users,
  Cloud,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

export default function SignInPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const userRoles = ["Student", "Speaker", "School"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const message = isSignUp
        ? `Account created successfully! Welcome ${name}!`
        : "Login successful! (This is a demo)";
      alert(message);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4 bg-gradient-to-br from-white via-orange-50/30 to-purple-50/30">
      {/* Back to Home Link */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="z-10 w-full max-w-6xl">
        <div className="bg-white/90 backdrop-blur-sm overflow-hidden rounded-[40px] shadow-2xl border border-gray-100">
          <div className="grid min-h-[700px] lg:grid-cols-2">
            {/* Left Side */}
            <div className="brand-side relative m-4 rounded-3xl bg-gradient-to-br from-orange-100 via-purple-50 to-orange-200 p-12 text-gray-900">
              <div>
                <div className="mb-12 text-lg font-semibold uppercase">
                  Kattalyx Labs
                </div>
                <h1 className="mb-4 text-6xl font-medium">
                  Ignite. Learn. Lead.
                </h1>
                <p className="mb-12 text-xl text-gray-700">
                  Join thousands of students who trust Kattalyx Labs to bring
                  their vision to life
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Palette size={16} />,
                      title: "AI & Technology",
                      desc: "Cutting-edge AI education and innovation",
                    },
                    {
                      icon: <Users size={16} />,
                      title: "Expert Mentorship",
                      desc: "Learn from industry leaders and innovators",
                    },
                    {
                      icon: <Cloud size={16} />,
                      title: "Interactive Learning",
                      desc: "Hands-on experience with real-world projects",
                    },
                    {
                      icon: <ShieldCheck size={16} />,
                      title: "Career Development",
                      desc: "Build skills for future-ready careers",
                    },
                  ].map(({ icon, title, desc }, i) => (
                    <div
                      key={i}
                      className="feature-item animate-fadeInUp flex items-center"
                      style={{ animationDelay: `${0.2 * (i + 1)}s` }}
                    >
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white backdrop-blur-sm">
                        {icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {title}
                        </div>
                        <div className="text-sm text-gray-600">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center p-12">
              <div className="mx-auto w-full max-w-md">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-light uppercase text-gray-900">
                    {isSignUp ? "Create Account" : "Welcome back"}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    {isSignUp
                      ? "Join Kattalyx Labs and start your learning journey"
                      : "Sign in to continue your learning journey"}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {isSignUp && (
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium uppercase text-gray-700"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Users className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="border-gray-300 bg-white block w-full rounded-lg border py-3 pr-3 pl-10 text-sm focus:border-orange-500 focus:ring-orange-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium uppercase text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-gray-300 bg-white block w-full rounded-lg border py-3 pr-3 pl-10 text-sm focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {isSignUp && (
                    <div>
                      <label
                        htmlFor="role"
                        className="mb-2 block text-sm font-medium uppercase text-gray-700"
                      >
                        Role
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <ShieldCheck className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          id="role"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          required
                          className="border-gray-300 bg-white block w-full rounded-lg border py-3 pr-3 pl-10 text-sm focus:border-orange-500 focus:ring-orange-500"
                        >
                          {userRoles.map((userRole) => (
                            <option key={userRole} value={userRole}>
                              {userRole}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium uppercase text-gray-700"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border-gray-300 bg-white block w-full rounded-lg border py-3 pr-12 pl-10 text-sm focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {!isSignUp && (
                    <div className="flex items-center justify-between">
                      <label className="text-gray-600 flex items-center text-sm">
                        <input
                          type="checkbox"
                          className="border-gray-300 text-orange-600 focus:ring-orange-500 h-4 w-4 rounded"
                        />
                        <span className="ml-2">Remember me</span>
                      </label>
                      <a
                        href="#"
                        className="text-orange-600 hover:text-orange-700 text-sm"
                      >
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 relative flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span className="ml-2">
                          {isSignUp ? "Creating account..." : "Signing in..."}
                        </span>
                      </>
                    ) : isSignUp ? (
                      "Create Account"
                    ) : (
                      "Sign in to your account"
                    )}
                  </button>
                </form>

                <div className="text-muted-foreground mt-8 text-center text-sm">
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account?"}{" "}
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    {isSignUp ? "Sign in" : "Sign up for free"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
