export const boardsTypeDef = `
type Board {
    code: String!
    name: String!
    archived: Boolean!
    description: String!
    created_at: String!
    updated_at: String!
    owner_code: Int!
    group: [Int]!
}
input BoardInput {
    name: String!
    archived: Boolean!
    description: String!
    group: [Int]!
    owner_code: Int!
}`;

export const boardsQueries = `
    allBoards: [Board]!
    boardByCode(code: String!): Board!
`;

export const boardsMutations = `
    createBoard(board: BoardInput!): Board!
    deleteBoard(code: String!): String
    updateBoard(code: String!, board: BoardInput!): Board!
`;
