export const saveTokens = (access, refresh) => {
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
};

export const getAccessToken = () => {
    return localStorage.getItem("access_token");
};

export const getRefreshToken = () => {
    return localStorage.getItem("refresh_token");
};

export const clearTokens = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
};