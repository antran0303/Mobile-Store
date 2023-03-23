import axiosClient from "./axiosClient";

const catagoryApi = {

    getAll(params) {
        const url = '/catagories';
        return axiosClient.get(url, { params: params });
    },

    get(id) {
        const url = `/catagories/${id}`;
        return axiosClient.get(url)

    },

    add(data) {
        const url = '/catagories'
        return axiosClient.post(url, data)

    },

    update(data) {

        const url = `/catagories/${data.id}`;
        return axiosClient.get(url, data)

    },

    remove(id) {
        const url = `/catagories/${id}`;
        return axiosClient.delete(url)

    }




};

export default catagoryApi;