import axios from 'axios';

const createUserAPI = (payload, success, error) => {
    axios.post('worker/v1/', payload).then(
        response => success(response.data),
        response => error(response),
    );
};

const getAllUsersAPI = (payload, success, error) => {
    axios.get('worker/v1/', payload).then(
        response => success(response.data),
        response => error(response)
    )
}

export default {
    createUserAPI,
    getAllUsersAPI,
}