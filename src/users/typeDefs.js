export const sessionsTypeDef = `
type User {
    id: Int!
    email: String!
    provider: String!
    name: String!
    username: String!
}

input SessionInput {
    email: String!
    password: String!
}
input Headers {
    token: String!
    client: String!
    uid: String!
}
type SessionData {
    id: Int!
    email: String!
    name: String!
    username: String!
    image: String
    token: String!
    type: String!
    client: String!
}
`;

export const sessionQueries = `
    validateToken(headers: Headers!): SessionData!
`;

export const sessionsMutations = `
    createSession(session: SessionInput!): SessionData!
`;