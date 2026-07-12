import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="page-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <div className="avatar">{user?.username?.charAt(0).toUpperCase()}</div>
          <div>
            <h1>
              Welcome, <span className="highlight">{user?.username}</span>
            </h1>
            <p className="subtitle">You are logged in.</p>
          </div>
        </div>

        <div className="user-details">
          <h2>Your Profile</h2>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Username</span>
              <span className="detail-value">{user?.username}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value">{user?.email}</span>
            </div>
            {user?.address && (
              <div className="detail-item">
                <span className="detail-label">Address</span>
                <span className="detail-value">{user.address}</span>
              </div>
            )}
          </div>
        </div>

        <button className="btn btn-outline" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}
