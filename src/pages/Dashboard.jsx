import { useEffect, useState } from "react";
import { fetchPosts } from "../api/dataApi";
import { useAuth } from "../auth/AuthContext";

function Dashboard() {
  const { logout } = useAuth();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchPosts();
      setPosts(data.slice(0, 10));
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>

      {loading && <p>Loading...</p>}

      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={loadData}>Retry</button>
        </div>
      )}

      {!loading &&
        !error &&
        posts.map((post) => (
          <div key={post.id} style={{ marginBottom: 20 }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default Dashboard;
