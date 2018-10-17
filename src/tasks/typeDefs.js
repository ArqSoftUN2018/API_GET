export const tasksTypeDef = `
type Task {
    code: Int!
    name: String!
    archivado: String!
    description: String!
}
input TaskInput {
    name: String!
    archivado: String!
    description: String!
}`;

export const tasksQueries = `
    allTasks: [Task]!
    taskByCode(code: Int!): Task!
`;

export const tasksMutations = `
    createTask(task: TaskInput!): Task!
    deleteTask(code: Int!): Int
    updateTask(code: Int!, task: TaskInput!): Task!
`;
