import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';


import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './users/typeDefs';

import {
	boardsMutations,
	boardsQueries,
	boardsTypeDef
} from './boards/typeDefs';

import {
	listsMutations,
	listsQueries,
	listsTypeDef
} from './lists/typeDefs';


import {
	tasksMutations,
	tasksQueries,
	tasksTypeDef
} from './tasks/typeDefs';

//import {
//	statisticsMutations,
//	statisticsQueries,
//	statisticsTypeDef
//} from './statistics/typeDefs';



import usersResolvers from './users/resolvers';
import boardsResolvers from './boards/resolvers';
import listsResolvers from './lists/resolvers';
import tasksResolvers from './tasks/resolvers';
import statisticsResolvers from './statistics/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		usersTypeDef,
		boardsTypeDef,
		listsTypeDef,
		tasksTypeDef,
//		statisticsTypeDef,
	],
	[
		usersQueries,
		boardsQueries,
		listsQueries,
		tasksQueries,
//		statisticsQueries
	],
	[
   	usersMutations,
		boardsMutations,
		listsMutations,
		tasksMutations,
//		statisticsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
  	usersResolvers,
		boardsResolvers,
		listsResolvers,
		tasksResolvers,
//		statisticsResolvers,
	)
});
