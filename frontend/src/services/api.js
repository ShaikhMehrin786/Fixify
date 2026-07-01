import axios from "axios";
import tokenService from "./tokenService";

const api = axios.create({

    baseURL: import.meta.env.VITE_API_URL

});

api.interceptors.response.use(

    response=>response,

    async(error)=>{

    const originalRequest=error.config;

    if(

    error.response?.status===401 &&

    !originalRequest._retry

    ){

        originalRequest._retry=true;

        try{

            const refresh=tokenService.getRefreshToken();

            const response=await axios.post(

            `${import.meta.env.VITE_API_URL}/auth/refresh/`,

            {

                refresh

            }

            );

            tokenService.saveTokens(

                response.data.access,

                refresh

            );

            originalRequest.headers.Authorization=

            `Bearer ${response.data.access}`;

            return api(originalRequest);

        }

        catch{

            tokenService.removeTokens();

            window.location.href="/login";

        }

    }

    return Promise.reject(error);

    }

    );
api.interceptors.request.use((config) => {

    const token = tokenService.getAccessToken();

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});
export default api;