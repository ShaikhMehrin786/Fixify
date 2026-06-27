import api from "./api";

const authService = {

    async login(data) {

        try {

            const response = await api.post(
                "/auth/login/",
                data
            );

            return response;

        }

        catch (error) {

            throw error;

        }

    },

    async registerCustomer(data) {

        try {

            return await api.post(
                "/auth/register/customer/",
                data
            );

        }

        catch (error) {

            throw error;

        }

    },

    async registerWorker(data) {

        try {

            return await api.post(
                "/auth/register/worker/",
                data
            );

        }

        catch (error) {

            throw error;

        }

    },

    async forgotPassword(data) {

        try {

            return await api.post(
                "/auth/forgot-password/",
                data
            );

        }

        catch (error) {

            throw error;

        }

    },

    async verifyOTP(data) {

        try {

            return await api.post(
                "/auth/verify-otp/",
                data
            );

        }

        catch (error) {

            throw error;

        }

    },

    async resetPassword(data) {

        try {

            return await api.post(
                "/auth/reset-password/",
                data
            );

        }

        catch (error) {

            throw error;

        }

    },

    async logout(refresh) {

        try {

            return await api.post(
                "/auth/logout/",
                {
                    refresh
                }
            );

        }

        catch (error) {

            throw error;

        }

    }

};

export default authService;