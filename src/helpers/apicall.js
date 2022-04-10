import axios from "./axios";

// get Stadium data
export const getMaps = () => {
    return axios.get('/map',)
        .then(response => {
                return response.data.data
        })
        .catch(error => {
                console.log("error",error);
                return error.response
        })
}
export const getMapData = (id) => {
    return axios.get(`/map/${id}`,)
        .then(response => {
                return response.data
        })
        .catch(error => {
                console.log("error",error);
                return error.response
        })
}
