import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allBoards: (_) =>
			getRequest(URL, ''),
		boardByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createBoard: (_, { board }) =>
			generalRequest(`${URL}`, 'POST', board),
		updateBoard: (_, { code, board }) =>
			generalRequest(`${URL}/${code}`, 'PUT', board),
		deleteBoard: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
