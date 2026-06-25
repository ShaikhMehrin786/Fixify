import { Routes, Route, Navigate } from "react-router-dom";

// Authentication Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Customer Pages
import Dashboard from "../pages/customer/Dashboard";

// Worker Pages
import WorkerDashboard from "../pages/worker/WorkerDashboard";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";

function AppRoutes() {
    return (
        <Routes>

            {/* Default Route */}
            <Route
                path="/"
                element={<Navigate to="/login" />}
            />

            {/* Authentication */}
            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            {/* Customer */}
            <Route
                path="/customer/dashboard"
                element={<Dashboard />}
            />

            {/* Worker */}
            <Route
                path="/worker/dashboard"
                element={<WorkerDashboard />}
            />

            {/* Admin */}
            <Route
                path="/admin/dashboard"
                element={<AdminDashboard />}
            />

        </Routes>
    );
}

export default AppRoutes;