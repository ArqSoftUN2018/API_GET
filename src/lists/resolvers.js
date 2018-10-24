import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allLists: (_) =>
			getRequest(URL, ''),
		listByCode: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createList: (_, { List }) =>
			generalRequest(`${URL}`, 'POST', List),
		updateList: (_, { id, list }) =>
			generalRequest(`${URL}/${id}`, 'PUT', List),
		deleteList: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
