import {gql} from "@apollo/client";

const SEARCH_USER_QUERY = gql(`
  query searchUser($query: String!) {
    search(query: $query, type: USER, first: 20) {
      nodes {
      ... on User {
        id
        avatarUrl(size: 96)
        name
        login
        }
      }
    }
  }
`)

export default SEARCH_USER_QUERY;