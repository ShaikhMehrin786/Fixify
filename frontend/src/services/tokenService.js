const tokenService = {

    getAccessToken() {

        return localStorage.getItem("access");

    },

    getRefreshToken() {

        return localStorage.getItem("refresh");

    },

    saveTokens(access, refresh) {

        localStorage.setItem("access", access);

        localStorage.setItem("refresh", refresh);

    },

    removeTokens() {

        localStorage.removeItem("access");

        localStorage.removeItem("refresh");

        localStorage.removeItem("user");

    }

};

export default tokenService;