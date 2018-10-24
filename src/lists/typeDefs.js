export const listsTypeDef = `

type List {
    id: Int!
    nombre: String!
    archivado: Boolean!
    tablero: String!
}

input ListInput {
    nombre: String
    archivado: Boolean @default(value: false)
    tablero: String
}`;

export const listsQueries = `
    allLists: [List]!
    listByCode(id: Int!): List!
`;

export const listsMutations = `
    createList(list: ListInput!): List!
    deleteList(id: Int!): Int
    updateList(id: Int!, list: ListInput!): List!
`;
