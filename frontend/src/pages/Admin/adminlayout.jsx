import { Link, Outlet, useNavigate } from 'react-router-dom';

function AdminLayout() {
    const navigate = useNavigate();
    const isAdmin = localStorage.getItem('adminLogin') === 'true';

    if (!isAdmin) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-4">Admin Login Required</h2>
                    <button onClick={() => navigate('/admin-login')}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                        Go to Admin Login
                    </button>
                </div>
            </div>
        );
    }

    function logout() {
        localStorage.removeItem('adminLogin');
        navigate('/admin-login');
    }

    return (
        <div className="min-h-screen bg-slate-100 md:flex">
            <aside className="bg-slate-900 text-white w-full md:w-64 p-6">
                <h1 className="text-2xl font-bold mb-8">RentEase Admin</h1>

                <nav className="flex flex-col gap-3">
                    <Link className="p-3 rounded-lg hover:bg-slate-700" to="/admin">
                        Dashboard
                    </Link>
                    <Link className="p-3 rounded-lg hover:bg-slate-700" to="/admin/addhouse">
                        Add House
                    </Link>
                    <Link className="p-3 rounded-lg hover:bg-slate-700" to="/admin/managehouses">
                        Manage Houses
                    </Link>
                    <Link className="p-3 rounded-lg hover:bg-slate-700" to="/admin/users">
                        User Details
                    </Link>
                    <Link className="p-3 rounded-lg hover:bg-slate-700" to="/admin/settings">
                        Settings
                    </Link>
                </nav>

                <button onClick={logout}
                    className="w-full bg-red-600 p-3 rounded-lg mt-8 hover:bg-red-700">
                    Logout
                </button>
            </aside>

            <main className="flex-1 p-5 md:p-8 min-w-0">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
