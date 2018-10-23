export const listsTypeDef = `

scalar String

type List {
    id: Int!
    nombre: String!
    archivado: String!
    tablero: String!
}
input ListInput {
    id: Int
    nombre: String!
    archivado: String!
    tablero: String!
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
