import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allLists: (_) =>
			getRequest(URL, ''),
		listByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createList: (_, { list }) =>
			generalRequest(`${URL}`, 'POST', list),
		updateList: (_, { code, list }) =>
			generalRequest(`${URL}/${code}`, 'PUT', list),
		deleteList: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
