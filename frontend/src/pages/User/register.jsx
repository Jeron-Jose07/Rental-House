import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        if (users.some(user => user.email === form.email)) {
            alert('Email already registered!');
            return;
        }

        users.push({
            id: Date.now(),
            name: form.name,
            email: form.email,
            password: form.password
        });

        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration Successful!');
        navigate('/');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
            <form onSubmit={handleSubmit}
                className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

                <h1 className="text-3xl text-blue-600 font-bold text-center">RentEase</h1>
                <h2 className="text-xl font-semibold text-center mt-3 mb-6">Create Account</h2>

                <label className="block mb-2">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border p-3 rounded-lg mb-4" required />

                <label className="block mb-2">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border p-3 rounded-lg mb-4" required />

                <label className="block mb-2">Password</label>
                <input type="password" name="password" value={form.password}
                    onChange={handleChange} placeholder="Create password"
                    className="w-full border p-3 rounded-lg mb-4" required />

                <label className="block mb-2">Confirm Password</label>
                <input type="password" name="confirmPassword"
                    value={form.confirmPassword} onChange={handleChange}
                    placeholder="Confirm password"
                    className="w-full border p-3 rounded-lg mb-6" required />

                <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
