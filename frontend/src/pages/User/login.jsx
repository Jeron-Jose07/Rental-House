import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const user = users.find(
            item => item.email === email && item.password === password
        );

        if (user) {
            localStorage.setItem('loggedUser', JSON.stringify(user));
            alert('Login Successful!');
            navigate('/dashboard');
        } else {
            alert('Invalid Email or Password');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 px-4">
            <form onSubmit={handleSubmit}
                className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

                <h1 className="text-3xl font-bold text-blue-600 text-center">RentEase</h1>
                <p className="text-center text-gray-500 mt-2 mb-8">
                    Find your perfect rental home
                </p>

                <h2 className="text-xl font-bold mb-5">User Login</h2>

                <label className="block mb-2">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border p-3 rounded-lg mb-4" required />

                <label className="block mb-2">Password</label>
                <input type="password" value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full border p-3 rounded-lg mb-6" required />

                <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
                    Login
                </button>

                <p className="text-center mt-5">
                    Don't have an account?
                    <button type="button" onClick={() => navigate('/register')}
                        className="text-blue-600 ml-1">Register</button>
                </p>

                <button type="button" onClick={() => navigate('/admin-login')}
                    className="block mx-auto text-sm text-gray-500 mt-5 hover:text-blue-600">
                    Admin Login
                </button>
            </form>
        </div>
    );
}

export default Login;
