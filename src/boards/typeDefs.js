export const boardsTypeDef = `
type Board {
    code: Int!
    name: String!
    archived: Boolean!
    description: String!
    created_at: Date!
    updated_at: Date!
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
    boardByCode(code: Int!): Board!
`;

export const boardsMutations = `
    createBoard(board: BoardInput!): Board!
    deleteBoard(code: Int!): Int
    updateBoard(code: Int!, board: BoardInput!): Board!
`;
