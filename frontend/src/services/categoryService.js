import api from "./api";

export const getCategories = async () => {

    const response = await api.get(
        "/services/categories/"
    );

    return response.data;

};