import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allLists: (_) =>
			getRequest(URL, ''),
		listById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		listFromBoard: (_, { board }) =>
			generalRequest(`${URL}FromBoard/${board}`, 'GET')
	},
	Mutation: {
		createList: (_, { list }) =>
			generalRequest(`${URL}/`, 'POST', list),
		updateList: (_, { id, list }) =>
			generalRequest(`${URL}/${id}`, 'PUT', list),
		deleteList: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
