import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allStatistics: (_) =>
			getRequest(URL, ''),
		statisticByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createStatistic: (_, { statistic }) =>
			generalRequest(`${URL}`, 'POST', statistic),
		updateStatistic: (_, { code, statistic }) =>
			generalRequest(`${URL}/${code}`, 'PUT', statistic),
		deleteStatistic: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;