import React, { useState, useEffect } from "react";

const Login_Form = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState(null);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 90) + 10; // 10–99
    const num2 = Math.floor(Math.random() * 10) + 1;  // 1–10
    setCaptchaQuestion(`${num1} + ${num2} = ?`);
    setCaptchaAnswer(num1 + num2);
  };

  useEffect(() => {
    generateCaptcha(); // generate on initial mount
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-md border-4 border-yellow-400 md:p-6 p-2 relative">
        <button
          className="absolute top-3 right-3 text-black text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-xl font-bold text-center">Login</h2>
        <p className="text-center text-sm mt-1">
          Not a member yet?{" "}
          <span className="text-red-600 font-semibold cursor-pointer">Sign Up</span>
        </p>

        <div className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="User id"
            className="w-full border rounded px-4 py-2 text-sm"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded px-4 py-2 text-sm"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer select-none text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
            <a
              href="#"
              className="text-xs text-blue-600 absolute right-0 mt-1 underline top-full"
            >
              Forgot Password
            </a>
          </div>

          <div className="flex items-center text-sm">
            <input id="remember" type="checkbox" className="mr-2" />
            <label htmlFor="remember">Remember me</label>
          </div>

          {/* Captcha */}
          <div className="flex items-center bg-gray-100 p-2 rounded md:space-x-2 space-x-1">
            <div className="bg-white px-3 py-2 border rounded text-sm font-mono">
              {captchaQuestion}
            </div>
            <input
              type="text"
              placeholder="Solve captcha"
              className="flex-1 md:px-3 px-1 py-2 rounded border text-sm"
            />
            <button
              className="text-xl md:px-2 px-0"
              onClick={generateCaptcha}
              title="Refresh Captcha"
            >
              🔄
            </button>
          </div>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-semibold">
            Login
          </button>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-semibold">
            Demo ID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login_Form;
