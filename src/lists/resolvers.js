import { generalRequest, getRequest } from '../utilities';

const URL = `http://35.231.75.77:3002/lists-ms/resources/lists`;

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
