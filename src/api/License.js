import axios from 'axios';
import urls from './base_urls.json';
const verifyLicenseAPI = (payload, success, error) => {
    axios.post(urls.mock_url + 'license', payload).then(
        response => success(response.data),
        response => error(response.data),
    );
};



export default {
    verifyLicenseAPI
}