export const tasksTypeDef = `
type Task {
    code: Int!
    userid: Int!
    name: String!
    archived: Boolean!
    completed:Boolean!
    group1: Int!
    board: Int!
    description: String!
    created: String!
    updated: String!
    dead: String!
    group2:[Int]

}
input TaskInput {
  code: Int!
  userid: Int!
  name: String!
  archived: Boolean!
  completed:Boolean!
  group1: Int!
  board: Int!
  description: String!
  created: String!
  updated: String!
  dead: String!
  group2:[Int]
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
