import axios from 'axios';

class ApiServicesClass {
	async get(url: string) {
		return await axios({
			method: 'get',
			url: url,
		});
	}
}

const ApiServices = new ApiServicesClass();
export default ApiServices;
