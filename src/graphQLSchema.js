import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	tasksMutations,
	tasksQueries,
	tasksTypeDef
} from './tasks/typeDefs';

import tasksResolvers from './tasks/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		tasksTypeDef
	],
	[
		tasksQueries
	],
	[
		tasksMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		tasksResolvers
	)
});
