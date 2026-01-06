import { gql } from '@apollo/client'

export default gql`
  query ExampleQuery {
    posts(first: 5) {
      nodes {
        id
        title
        slug
      }
    }
  }
`
