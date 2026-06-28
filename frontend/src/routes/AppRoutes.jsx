import { Routes, Route } from "react-router-dom";

// Auth
import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import CustomerRegister from "../pages/auth/CustomerRegister";
import WorkerRegister from "../pages/auth/WorkerRegister";
import ForgotPassword from "../pages/auth/ForgotPassword";
import OtpVerification from "../pages/auth/OtpVerification";
import ResetPassword from "../pages/auth/ResetPassword";
import CustomerDashboard from "../pages/customer/CustomerDashboard";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/register/customer"
        element={<CustomerRegister />}
      />

      <Route
        path="/register/worker"
        element={<WorkerRegister />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword/>}
        />

        <Route
        path="/verify-otp"
        element={<OtpVerification/>}
        />

        <Route
        path="/reset-password"
        element={<ResetPassword/>}
        />

        <Route
            path="/customer/dashboard"
            element={
                <ProtectedRoute>
                    <CustomerDashboard />
                </ProtectedRoute>
            }
        />

    </Routes>
  );
}

export default AppRoutes;