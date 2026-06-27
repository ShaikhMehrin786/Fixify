import api from "./api";

const authService = {

    login(data) {

        return api.post(
            "/auth/login/",
            data
        );

    },

    registerCustomer(data) {

        return api.post(
            "/auth/register/customer/",
            data
        );

    },

    registerWorker(data) {

        return api.post(
            "/auth/register/worker/",
            data
        );

    },

    forgotPassword(data) {

        return api.post(
            "/auth/forgot-password/",
            data
        );

    },

    verifyOTP(data) {

        return api.post(
            "/auth/verify-otp/",
            data
        );

    },

    resetPassword(data) {

        return api.post(
            "/auth/reset-password/",
            data
        );

    },

    logout(refresh) {

        return api.post(
            "/auth/logout/",
            {

                refresh

            }

        );

    }

};

export default authService;