export const listsTypeDef = `
type List {
    code: Long!
    name: String!
    archived: Boolean!
    description: String!
    created_at: Date!
    updated_at: Date!
    board_code: Long!

}
input ListInput {
    name: String!
    archived: Boolean!
    description: String!
    board_code: Long!
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
