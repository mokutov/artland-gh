import {gql} from "@apollo/client";

const GET_REPOSITORY_ISSUES_QUERY = gql`
  query getRepositoryIssues($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
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
`;

export default GET_REPOSITORY_ISSUES_QUERY;