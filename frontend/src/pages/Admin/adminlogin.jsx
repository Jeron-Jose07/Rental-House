import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('adminLogin', 'true');
            navigate('/admin');
        } else {
            alert('Invalid Admin Username or Password');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <form onSubmit={handleSubmit}
                className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

                <h1 className="text-3xl font-bold text-center text-blue-600">
                    RentEase
                </h1>
                <h2 className="text-xl font-semibold text-center mt-3 mb-8">
                    Admin Login
                </h2>

                <label className="block mb-2 font-medium">Username</label>
                <input
                    className="w-full border rounded-lg p-3 mb-5"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Enter admin username"
                    required
                />

                <label className="block mb-2 font-medium">Password</label>
                <input
                    type="password"
                    className="w-full border rounded-lg p-3 mb-6"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                />

                <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
                    Login as Admin
                </button>

                <button type="button"
                    onClick={() => navigate('/')}
                    className="w-full mt-4 text-blue-600">
                    Back to User Login
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;
