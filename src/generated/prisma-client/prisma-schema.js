module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCurrency {
  count: Int!
}

type AggregatePayment {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Currency {
  id: ID!
  iso4217_currency_numeric_code: String!
  iso4217_currency_alphabetic_code: String!
}

type CurrencyConnection {
  pageInfo: PageInfo!
  edges: [CurrencyEdge]!
  aggregate: AggregateCurrency!
}

input CurrencyCreateInput {
  iso4217_currency_numeric_code: String!
  iso4217_currency_alphabetic_code: String!
}

type CurrencyEdge {
  node: Currency!
  cursor: String!
}

enum CurrencyOrderByInput {
  id_ASC
  id_DESC
  iso4217_currency_numeric_code_ASC
  iso4217_currency_numeric_code_DESC
  iso4217_currency_alphabetic_code_ASC
  iso4217_currency_alphabetic_code_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CurrencyPreviousValues {
  id: ID!
  iso4217_currency_numeric_code: String!
  iso4217_currency_alphabetic_code: String!
}

type CurrencySubscriptionPayload {
  mutation: MutationType!
  node: Currency
  updatedFields: [String!]
  previousValues: CurrencyPreviousValues
}

input CurrencySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CurrencyWhereInput
  AND: [CurrencySubscriptionWhereInput!]
  OR: [CurrencySubscriptionWhereInput!]
  NOT: [CurrencySubscriptionWhereInput!]
}

input CurrencyUpdateInput {
  iso4217_currency_numeric_code: String
  iso4217_currency_alphabetic_code: String
}

input CurrencyUpdateManyMutationInput {
  iso4217_currency_numeric_code: String
  iso4217_currency_alphabetic_code: String
}

input CurrencyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  iso4217_currency_numeric_code: String
  iso4217_currency_numeric_code_not: String
  iso4217_currency_numeric_code_in: [String!]
  iso4217_currency_numeric_code_not_in: [String!]
  iso4217_currency_numeric_code_lt: String
  iso4217_currency_numeric_code_lte: String
  iso4217_currency_numeric_code_gt: String
  iso4217_currency_numeric_code_gte: String
  iso4217_currency_numeric_code_contains: String
  iso4217_currency_numeric_code_not_contains: String
  iso4217_currency_numeric_code_starts_with: String
  iso4217_currency_numeric_code_not_starts_with: String
  iso4217_currency_numeric_code_ends_with: String
  iso4217_currency_numeric_code_not_ends_with: String
  iso4217_currency_alphabetic_code: String
  iso4217_currency_alphabetic_code_not: String
  iso4217_currency_alphabetic_code_in: [String!]
  iso4217_currency_alphabetic_code_not_in: [String!]
  iso4217_currency_alphabetic_code_lt: String
  iso4217_currency_alphabetic_code_lte: String
  iso4217_currency_alphabetic_code_gt: String
  iso4217_currency_alphabetic_code_gte: String
  iso4217_currency_alphabetic_code_contains: String
  iso4217_currency_alphabetic_code_not_contains: String
  iso4217_currency_alphabetic_code_starts_with: String
  iso4217_currency_alphabetic_code_not_starts_with: String
  iso4217_currency_alphabetic_code_ends_with: String
  iso4217_currency_alphabetic_code_not_ends_with: String
  AND: [CurrencyWhereInput!]
  OR: [CurrencyWhereInput!]
  NOT: [CurrencyWhereInput!]
}

input CurrencyWhereUniqueInput {
  id: ID
  iso4217_currency_numeric_code: String
}

scalar Long

type Mutation {
  createCurrency(data: CurrencyCreateInput!): Currency!
  updateCurrency(data: CurrencyUpdateInput!, where: CurrencyWhereUniqueInput!): Currency
  updateManyCurrencies(data: CurrencyUpdateManyMutationInput!, where: CurrencyWhereInput): BatchPayload!
  upsertCurrency(where: CurrencyWhereUniqueInput!, create: CurrencyCreateInput!, update: CurrencyUpdateInput!): Currency!
  deleteCurrency(where: CurrencyWhereUniqueInput!): Currency
  deleteManyCurrencies(where: CurrencyWhereInput): BatchPayload!
  createPayment(data: PaymentCreateInput!): Payment!
  updatePayment(data: PaymentUpdateInput!, where: PaymentWhereUniqueInput!): Payment
  updateManyPayments(data: PaymentUpdateManyMutationInput!, where: PaymentWhereInput): BatchPayload!
  upsertPayment(where: PaymentWhereUniqueInput!, create: PaymentCreateInput!, update: PaymentUpdateInput!): Payment!
  deletePayment(where: PaymentWhereUniqueInput!): Payment
  deleteManyPayments(where: PaymentWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Payment {
  id: ID!
  payeeProxyId: String!
  payeeProxyType: String!
  payeeAccountNumber: String!
  payeeName: String!
  payerProxyId: String!
  payerProxyType: String!
  payerAccountNumber: String!
  payerName: String!
  sendingBankCode: String!
  receivingBankCode: String!
  amount: String!
  transactionId: String!
  transactionDateandTime: String!
  billPaymentRef1: String!
  billPaymentRef2: String!
  currencyCode: String!
  currency: String!
}

type PaymentConnection {
  pageInfo: PageInfo!
  edges: [PaymentEdge]!
  aggregate: AggregatePayment!
}

input PaymentCreateInput {
  payeeProxyId: String!
  payeeProxyType: String!
  payeeAccountNumber: String!
  payeeName: String!
  payerProxyId: String!
  payerProxyType: String!
  payerAccountNumber: String!
  payerName: String!
  sendingBankCode: String!
  receivingBankCode: String!
  amount: String!
  transactionId: String!
  transactionDateandTime: String!
  billPaymentRef1: String!
  billPaymentRef2: String!
  currencyCode: String!
  currency: String!
}

type PaymentEdge {
  node: Payment!
  cursor: String!
}

enum PaymentOrderByInput {
  id_ASC
  id_DESC
  payeeProxyId_ASC
  payeeProxyId_DESC
  payeeProxyType_ASC
  payeeProxyType_DESC
  payeeAccountNumber_ASC
  payeeAccountNumber_DESC
  payeeName_ASC
  payeeName_DESC
  payerProxyId_ASC
  payerProxyId_DESC
  payerProxyType_ASC
  payerProxyType_DESC
  payerAccountNumber_ASC
  payerAccountNumber_DESC
  payerName_ASC
  payerName_DESC
  sendingBankCode_ASC
  sendingBankCode_DESC
  receivingBankCode_ASC
  receivingBankCode_DESC
  amount_ASC
  amount_DESC
  transactionId_ASC
  transactionId_DESC
  transactionDateandTime_ASC
  transactionDateandTime_DESC
  billPaymentRef1_ASC
  billPaymentRef1_DESC
  billPaymentRef2_ASC
  billPaymentRef2_DESC
  currencyCode_ASC
  currencyCode_DESC
  currency_ASC
  currency_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PaymentPreviousValues {
  id: ID!
  payeeProxyId: String!
  payeeProxyType: String!
  payeeAccountNumber: String!
  payeeName: String!
  payerProxyId: String!
  payerProxyType: String!
  payerAccountNumber: String!
  payerName: String!
  sendingBankCode: String!
  receivingBankCode: String!
  amount: String!
  transactionId: String!
  transactionDateandTime: String!
  billPaymentRef1: String!
  billPaymentRef2: String!
  currencyCode: String!
  currency: String!
}

type PaymentSubscriptionPayload {
  mutation: MutationType!
  node: Payment
  updatedFields: [String!]
  previousValues: PaymentPreviousValues
}

input PaymentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PaymentWhereInput
  AND: [PaymentSubscriptionWhereInput!]
  OR: [PaymentSubscriptionWhereInput!]
  NOT: [PaymentSubscriptionWhereInput!]
}

input PaymentUpdateInput {
  payeeProxyId: String
  payeeProxyType: String
  payeeAccountNumber: String
  payeeName: String
  payerProxyId: String
  payerProxyType: String
  payerAccountNumber: String
  payerName: String
  sendingBankCode: String
  receivingBankCode: String
  amount: String
  transactionId: String
  transactionDateandTime: String
  billPaymentRef1: String
  billPaymentRef2: String
  currencyCode: String
  currency: String
}

input PaymentUpdateManyMutationInput {
  payeeProxyId: String
  payeeProxyType: String
  payeeAccountNumber: String
  payeeName: String
  payerProxyId: String
  payerProxyType: String
  payerAccountNumber: String
  payerName: String
  sendingBankCode: String
  receivingBankCode: String
  amount: String
  transactionId: String
  transactionDateandTime: String
  billPaymentRef1: String
  billPaymentRef2: String
  currencyCode: String
  currency: String
}

input PaymentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  payeeProxyId: String
  payeeProxyId_not: String
  payeeProxyId_in: [String!]
  payeeProxyId_not_in: [String!]
  payeeProxyId_lt: String
  payeeProxyId_lte: String
  payeeProxyId_gt: String
  payeeProxyId_gte: String
  payeeProxyId_contains: String
  payeeProxyId_not_contains: String
  payeeProxyId_starts_with: String
  payeeProxyId_not_starts_with: String
  payeeProxyId_ends_with: String
  payeeProxyId_not_ends_with: String
  payeeProxyType: String
  payeeProxyType_not: String
  payeeProxyType_in: [String!]
  payeeProxyType_not_in: [String!]
  payeeProxyType_lt: String
  payeeProxyType_lte: String
  payeeProxyType_gt: String
  payeeProxyType_gte: String
  payeeProxyType_contains: String
  payeeProxyType_not_contains: String
  payeeProxyType_starts_with: String
  payeeProxyType_not_starts_with: String
  payeeProxyType_ends_with: String
  payeeProxyType_not_ends_with: String
  payeeAccountNumber: String
  payeeAccountNumber_not: String
  payeeAccountNumber_in: [String!]
  payeeAccountNumber_not_in: [String!]
  payeeAccountNumber_lt: String
  payeeAccountNumber_lte: String
  payeeAccountNumber_gt: String
  payeeAccountNumber_gte: String
  payeeAccountNumber_contains: String
  payeeAccountNumber_not_contains: String
  payeeAccountNumber_starts_with: String
  payeeAccountNumber_not_starts_with: String
  payeeAccountNumber_ends_with: String
  payeeAccountNumber_not_ends_with: String
  payeeName: String
  payeeName_not: String
  payeeName_in: [String!]
  payeeName_not_in: [String!]
  payeeName_lt: String
  payeeName_lte: String
  payeeName_gt: String
  payeeName_gte: String
  payeeName_contains: String
  payeeName_not_contains: String
  payeeName_starts_with: String
  payeeName_not_starts_with: String
  payeeName_ends_with: String
  payeeName_not_ends_with: String
  payerProxyId: String
  payerProxyId_not: String
  payerProxyId_in: [String!]
  payerProxyId_not_in: [String!]
  payerProxyId_lt: String
  payerProxyId_lte: String
  payerProxyId_gt: String
  payerProxyId_gte: String
  payerProxyId_contains: String
  payerProxyId_not_contains: String
  payerProxyId_starts_with: String
  payerProxyId_not_starts_with: String
  payerProxyId_ends_with: String
  payerProxyId_not_ends_with: String
  payerProxyType: String
  payerProxyType_not: String
  payerProxyType_in: [String!]
  payerProxyType_not_in: [String!]
  payerProxyType_lt: String
  payerProxyType_lte: String
  payerProxyType_gt: String
  payerProxyType_gte: String
  payerProxyType_contains: String
  payerProxyType_not_contains: String
  payerProxyType_starts_with: String
  payerProxyType_not_starts_with: String
  payerProxyType_ends_with: String
  payerProxyType_not_ends_with: String
  payerAccountNumber: String
  payerAccountNumber_not: String
  payerAccountNumber_in: [String!]
  payerAccountNumber_not_in: [String!]
  payerAccountNumber_lt: String
  payerAccountNumber_lte: String
  payerAccountNumber_gt: String
  payerAccountNumber_gte: String
  payerAccountNumber_contains: String
  payerAccountNumber_not_contains: String
  payerAccountNumber_starts_with: String
  payerAccountNumber_not_starts_with: String
  payerAccountNumber_ends_with: String
  payerAccountNumber_not_ends_with: String
  payerName: String
  payerName_not: String
  payerName_in: [String!]
  payerName_not_in: [String!]
  payerName_lt: String
  payerName_lte: String
  payerName_gt: String
  payerName_gte: String
  payerName_contains: String
  payerName_not_contains: String
  payerName_starts_with: String
  payerName_not_starts_with: String
  payerName_ends_with: String
  payerName_not_ends_with: String
  sendingBankCode: String
  sendingBankCode_not: String
  sendingBankCode_in: [String!]
  sendingBankCode_not_in: [String!]
  sendingBankCode_lt: String
  sendingBankCode_lte: String
  sendingBankCode_gt: String
  sendingBankCode_gte: String
  sendingBankCode_contains: String
  sendingBankCode_not_contains: String
  sendingBankCode_starts_with: String
  sendingBankCode_not_starts_with: String
  sendingBankCode_ends_with: String
  sendingBankCode_not_ends_with: String
  receivingBankCode: String
  receivingBankCode_not: String
  receivingBankCode_in: [String!]
  receivingBankCode_not_in: [String!]
  receivingBankCode_lt: String
  receivingBankCode_lte: String
  receivingBankCode_gt: String
  receivingBankCode_gte: String
  receivingBankCode_contains: String
  receivingBankCode_not_contains: String
  receivingBankCode_starts_with: String
  receivingBankCode_not_starts_with: String
  receivingBankCode_ends_with: String
  receivingBankCode_not_ends_with: String
  amount: String
  amount_not: String
  amount_in: [String!]
  amount_not_in: [String!]
  amount_lt: String
  amount_lte: String
  amount_gt: String
  amount_gte: String
  amount_contains: String
  amount_not_contains: String
  amount_starts_with: String
  amount_not_starts_with: String
  amount_ends_with: String
  amount_not_ends_with: String
  transactionId: String
  transactionId_not: String
  transactionId_in: [String!]
  transactionId_not_in: [String!]
  transactionId_lt: String
  transactionId_lte: String
  transactionId_gt: String
  transactionId_gte: String
  transactionId_contains: String
  transactionId_not_contains: String
  transactionId_starts_with: String
  transactionId_not_starts_with: String
  transactionId_ends_with: String
  transactionId_not_ends_with: String
  transactionDateandTime: String
  transactionDateandTime_not: String
  transactionDateandTime_in: [String!]
  transactionDateandTime_not_in: [String!]
  transactionDateandTime_lt: String
  transactionDateandTime_lte: String
  transactionDateandTime_gt: String
  transactionDateandTime_gte: String
  transactionDateandTime_contains: String
  transactionDateandTime_not_contains: String
  transactionDateandTime_starts_with: String
  transactionDateandTime_not_starts_with: String
  transactionDateandTime_ends_with: String
  transactionDateandTime_not_ends_with: String
  billPaymentRef1: String
  billPaymentRef1_not: String
  billPaymentRef1_in: [String!]
  billPaymentRef1_not_in: [String!]
  billPaymentRef1_lt: String
  billPaymentRef1_lte: String
  billPaymentRef1_gt: String
  billPaymentRef1_gte: String
  billPaymentRef1_contains: String
  billPaymentRef1_not_contains: String
  billPaymentRef1_starts_with: String
  billPaymentRef1_not_starts_with: String
  billPaymentRef1_ends_with: String
  billPaymentRef1_not_ends_with: String
  billPaymentRef2: String
  billPaymentRef2_not: String
  billPaymentRef2_in: [String!]
  billPaymentRef2_not_in: [String!]
  billPaymentRef2_lt: String
  billPaymentRef2_lte: String
  billPaymentRef2_gt: String
  billPaymentRef2_gte: String
  billPaymentRef2_contains: String
  billPaymentRef2_not_contains: String
  billPaymentRef2_starts_with: String
  billPaymentRef2_not_starts_with: String
  billPaymentRef2_ends_with: String
  billPaymentRef2_not_ends_with: String
  currencyCode: String
  currencyCode_not: String
  currencyCode_in: [String!]
  currencyCode_not_in: [String!]
  currencyCode_lt: String
  currencyCode_lte: String
  currencyCode_gt: String
  currencyCode_gte: String
  currencyCode_contains: String
  currencyCode_not_contains: String
  currencyCode_starts_with: String
  currencyCode_not_starts_with: String
  currencyCode_ends_with: String
  currencyCode_not_ends_with: String
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  AND: [PaymentWhereInput!]
  OR: [PaymentWhereInput!]
  NOT: [PaymentWhereInput!]
}

input PaymentWhereUniqueInput {
  id: ID
}

type Query {
  currency(where: CurrencyWhereUniqueInput!): Currency
  currencies(where: CurrencyWhereInput, orderBy: CurrencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Currency]!
  currenciesConnection(where: CurrencyWhereInput, orderBy: CurrencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CurrencyConnection!
  payment(where: PaymentWhereUniqueInput!): Payment
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment]!
  paymentsConnection(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentConnection!
  node(id: ID!): Node
}

type Subscription {
  currency(where: CurrencySubscriptionWhereInput): CurrencySubscriptionPayload
  payment(where: PaymentSubscriptionWhereInput): PaymentSubscriptionPayload
}
`
      }
    