export const statisticsTypeDef = `
type Statistic {
}

input StatisticInput {
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
