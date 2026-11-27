
import { Routes, Route } from 'react-router-dom';

import Login from './pages/User/login';
import Register from './pages/User/register';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;
