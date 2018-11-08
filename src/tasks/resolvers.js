import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allTasks: (_) =>
			getRequest(URL, ''),
		taskByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
		AllTasksuserid:(_,{ userid })=>
			generalRequest(`${URL}/userid/${userid}`, 'GET'),
			AllTaskslist: (_,{ group1 })=>
				generalRequest(`${URL}/group1/${group1}`, 'GET'),
	},
	Mutation: {
		createTask: (_, { task }) =>
			generalRequest(`${URL}`, 'POST', task),
		updateTask: (_, { code, task }) =>
			generalRequest(`${URL}/${code}`, 'PUT', task),
		updateArchived:(_,{ code, task })=>
		     generalRequest(`${URL}/archived/${code}`, 'PUT', task),
		updateBoard:(_,{ code, task })=>
		generalRequest(`${URL}/board/${code}`, 'PUT', task),
		updateTaskgroup:(_,{ code, task })=>
		generalRequest(`${URL}/group2/${code}`, 'PUT', task),
		deleteTask: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
