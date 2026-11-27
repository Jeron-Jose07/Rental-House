import { Link, useNavigate } from 'react-router-dom';

function UserDashboard() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("loggedUser") || "null");

    function logout() {
        localStorage.removeItem("loggedUser");
        alert("Logout Successful!");
        navigate("/");
    }

    return (
        <div>
            <nav className="navbar">
                <h2>RentEase</h2>
                <button onClick={logout}>Logout</button>
            </nav>

            <div className="page-content">
                <h1>Welcome, {user ? user.name : "User"}!</h1>
                <p>Online Rental House Management System</p>

                <div className="card-grid">
                    <Link className="card nav-card" to="/houses">
                        <h2>Available Houses</h2>
                        <p>Find your rental house</p>
                    </Link>

                    <Link className="card nav-card" to="/mybookings">
                        <h2>My Bookings</h2>
                        <p>View your bookings</p>
                    </Link>

                    <Link className="card nav-card" to="/profile">
                        <h2>My Profile</h2>
                        <p>View your account details</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
