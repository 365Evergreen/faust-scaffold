import { gql } from '@apollo/client'

export default gql`
  query ServicesQuery {
    services {
      nodes {
        title
        content(format: RENDERED)
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`
