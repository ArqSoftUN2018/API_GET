export const listsTypeDef = `

type List {
    id: Int!
    name: String!
    archived: Boolean!
    board: String!
}

input ListInput {
    name: String
    archived: Boolean @default(value: false)
    board: String
}`;

export const listsQueries = `
    allLists: [List]!
    listByCode(id: Int!): List!
`;

export const listsMutations = `
    createList(list: ListInput!): String!
    deleteList(id: Int!): Int
    updateList(id: Int!, list: ListInput!): List!
`;
