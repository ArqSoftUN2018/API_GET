export const boardsTypeDef = `

scalar Date

type Board {
    board_id: ID
    name: String
    description: String
    group: [ID]
    user_id: ID
    archived: Boolean
    create_at: Date
    update_at: Date
}

input BoardInput {
    name: String!
    description: String!
    archived : Boolean | false
    group: [ID]!
    user_id: ID!
}`;

export const boardsQueries = `
    allBoards: [Board]!
    boardByCode(id: ID!): Board!
`;

export const boardsMutations = `
    createBoard(board: BoardInput!): Board!
    deleteBoard(code: String!): String
    updateBoard(code: String!, board: BoardInput!): Board!
`;
