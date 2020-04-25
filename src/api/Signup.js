import axios from 'axios';
import urls from './base_urls.json'

const createUserAPI = (payload, success, error) => {
    axios.post(urls.url + 'worker/v1/', payload).then(
        response => success(response.data),
        response => error(response),
    );
};

const getAllUsersAPI = (payload, success, error) => {
    axios.get(urls.url + 'worker/v1/', payload).then(
        response => success(response.data),
        response => error(response)
    )
};
const addSkillsAPI = (payload, success, error) => {
    axios.post(urls.mock_url + 'worker/skills/v1/', payload).then(
        response => success(response.data),
        response => error(response),
    )
};

const addLocationAPI = (payload, success, error)=> {
    axios.post(urls.mock_url + 'worker/location/v1/', payload).then(
        response => success(response.data),
        response => success(response.data),
    )
};

export default {
    createUserAPI,
    getAllUsersAPI,
    addSkillsAPI,
    addLocationAPI,
};