import {gql} from "@apollo/client";

const CREATE_ISSUE_MUTATION = gql`
  mutation createIssueMutation($id: String!, $title: String!, $body: String = "") {
    createIssue(input: {repositoryId: $id, title: $title, body: $body}) {
      issue {
        number
        body
        repository {
        id
          issues(first: 5, orderBy: {field: CREATED_AT, direction: DESC}) {
            nodes {
              author {
                login
                avatarUrl(size: 48)
              }
              createdAt
              body
              id
              title
            }
          }
        }
      }
    }
  }
`

export default CREATE_ISSUE_MUTATION;