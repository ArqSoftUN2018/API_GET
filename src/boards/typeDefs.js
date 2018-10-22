export const boardsTypeDef = `
type Board {
    code: String!
    name: String!
    archived: Boolean!
    description: String!
    created_at: String!
    updated_at: String!
    owner_code: String!
    group: [String]!
}
input BoardInput {
    name: String!
    archived: Boolean!
    description: String!
    group: [String]!
    owner_code: String!
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
