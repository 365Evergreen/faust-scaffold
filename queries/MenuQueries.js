import { gql } from "@apollo/client";

export const HEADER_MENU_QUERY = gql`
  query Menu {
    menus(where: {location: PRIMARY}) {
      nodes {
        menuItems {
          nodes {
            label
            url
          }
        }
      }
    }
  }
`;
