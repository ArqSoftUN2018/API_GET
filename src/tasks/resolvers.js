import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allTasks: (_) =>
			getRequest(URL, ''),
		taskByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createTask: (_, { task }) =>
			generalRequest(`${URL}`, 'POST', task),
		updateTask: (_, { code, task }) =>
			generalRequest(`${URL}/${code}`, 'PUT', task),
		deleteTask: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
