import {gql} from "@apollo/client";

const GET_USER_REPOSITORIES_QUERY = gql`
  query getUserRepositories($login: String!, $after: String) {
    user(login: $login) {
      id
      repositories(first: 5, isFork: false, ownerAffiliations: OWNER, after: $after) {
        nodes {
          name
          id
          url
          stargazerCount
          watchers {
            totalCount
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          startCursor
          hasPreviousPage
        }
      }
    }
  }
`

export default GET_USER_REPOSITORIES_QUERY;