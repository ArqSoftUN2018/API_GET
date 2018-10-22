export const listsTypeDef = `

scalar String

type List {
    code: Int!
    name: String!
    archived: Boolean!
    description: String!
    created_at: String!
    updated_at: String!
    board_code: Int!

}
input ListInput {
    name: String!
    archived: Boolean!
    description: String!
    board_code: Int!
}`;

export const listsQueries = `
    allLists: [List]!
    listByCode(code: Int!): List!
`;

export const listsMutations = `
    createList(list: ListInput!): List!
    deleteList(code: Int!): Int
    updateList(code: Int!, list: ListInput!): List!
`;
