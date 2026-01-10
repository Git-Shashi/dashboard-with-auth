import { useState,useEffect } from "react";
import { loginApi } from "../api/authApi";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login,token } = useAuth();
  const navigate = useNavigate();

useEffect(() => {
  if (token) {
    navigate("/dashboard");
  }
}, [token]);
  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await loginApi(email, password);
      login(res.token, res.expiresIn);
      navigate("/dashboard");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

 return (
  <div
    style={{
      maxWidth: 360,
      margin: "120px auto",
      padding: 30,
      borderRadius: 8,
      background: "#1f1f1f",
      textAlign: "center",
    }}
  >
    <h2 style={{ marginBottom: 20 }}>Login</h2>

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{
        width: "100%",
        padding: 10,
        marginBottom: 12,
        borderRadius: 4,
        border: "1px solid #333",
        background: "#111",
        color: "#fff",
      }}
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={{
        width: "100%",
        padding: 10,
        marginBottom: 20,
        borderRadius: 4,
        border: "1px solid #333",
        background: "#111",
        color: "#fff",
      }}
    />

    <button
      onClick={handleLogin}
      disabled={loading}
      style={{
        width: "100%",
        padding: 10,
        borderRadius: 6,
        border: "none",
        background: "#3b82f6",
        color: "#fff",
        cursor: "pointer",
      }}
    >
       
      {loading ? "Logging in..." : "Login"}
    </button>

    {error && (
      <p style={{ color: "tomato", marginTop: 15 }}>
        {error}
      </p>
    )}
  </div>
);

}

export default Login;
