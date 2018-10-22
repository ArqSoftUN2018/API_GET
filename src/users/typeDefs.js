export const usersTypeDef = `
type User {
    id: Int!
    email: String!
    provider: String!
    name: String!
    username: String!
}

input userInput {
    email: String!
    password: String!
}
input Headers {
    token: String!
    client: String!
    uid: String!
}
type userData {
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

export const usersQueries = `
    validateToken(headers: Headers!): userData!
`;

export const usersMutations = `
    createuser(user: userInput!): userData!
`;