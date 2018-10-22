export const statisticsTypeDef = `
type Statistic {
    code: Int!
    name: String!
}

input StatisticInput {
    name: String!
}`;

export const statisticsQueries = `
    allStatistics: [Statistic]!
    statisticByCode(code: Int!): Statistic!
`;

export const statisticsMutations = `
    createStatistic(statistic: StatisticInput!): Statistic!
    deleteStatistic(code: Int!): Int
    updateStatistic(code: Int!, statistic: StatisticInput!): Statistic!
`;
