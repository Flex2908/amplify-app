/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      text
      createdAt
      updatedAt
      owner
      temp_nachlauf
      temp_raum
      temp_vorlauf
      temp_aussen
      zeitstempel
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        owner
        temp_nachlauf
        temp_raum
        temp_vorlauf
        temp_aussen
        zeitstempel
      }
      nextToken
    }
  }
`;
