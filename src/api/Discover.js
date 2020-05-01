import axios from 'axios';
import urls from './base_urls.json';
const getAllPositionsAPI = (success, error) => {
	axios.get(urls.url + 'position/v1/').then(
		(response) => success(response.data),
		(response) => error(response.data)
	);
};

export default {
	getAllPositionsAPI,
};
