import axiosClient from "./axiosClient";

const catagoryApi = {

    getAll(params) {
        const url = '/categories';
        return axiosClient.get(url, { params: params });
    },

    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url)

    },

    add(data) {
        const url = '/categories'
        return axiosClient.post(url, data)

    },

    update(data) {

        const url = `/categories/${data.id}`;
        return axiosClient.get(url, data)

    },

    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url)

    }




};

export default catagoryApi;