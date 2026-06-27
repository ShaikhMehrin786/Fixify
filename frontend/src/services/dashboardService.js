import api from "./api";

export const getStatistics = async () => {

    const response = await api.get(
        "/dashboard/statistics/"
    );

    return response.data;

};