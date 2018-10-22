export const boardsTypeDef = `
type Board {
    code: Long!
    name: String!
    archived: Boolean!
    description: String!
    created_at: Date!
    updated_at: Date!
    owner_code: Long!
    group: [Long]!
}
input BoardInput {
    name: String!
    archived: Boolean!
    description: String!
    group: [Long]!
    owner_code: Long!
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
