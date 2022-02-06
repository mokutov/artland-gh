import {gql} from "@apollo/client";

const GET_USER_REPOSITORIES_PAGES_CURSORS_QUERY = gql`
  query getUserRepositoriesCursors($login: String!, $after: String) {
    user(login: $login) {
      id
      repositories(first: 50, isFork: false, ownerAffiliations: OWNER, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
            node {
              id
          }
        }
      }
    }
  }
`

export default GET_USER_REPOSITORIES_PAGES_CURSORS_QUERY;