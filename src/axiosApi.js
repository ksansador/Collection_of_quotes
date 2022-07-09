import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://exam-8-zanokha-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;