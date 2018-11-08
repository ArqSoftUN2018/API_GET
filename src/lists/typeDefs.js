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
    allLists: [List]
    listById(id: Int!): List!
    listFromBoard(board: String!): List!
`;

export const listsMutations = `
    createList(list: ListInput!): String!
    deleteList(id: Int!): Int
    updateList(id: Int!, list: ListInput!): List!
`;
