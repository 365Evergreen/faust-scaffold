import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const HeaderFragmentFragmentDoc = gql`
    fragment HeaderFragment on RootQuery {
  generalSettings {
    title
    description
  }
  primaryMenuItems: menuItems(where: {location: PRIMARY}) {
    nodes {
      id
      uri
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  }
}
    `;
export const GetHomePageDocument = gql`
    query GetHomePage {
  ...HeaderFragment
}
    ${HeaderFragmentFragmentDoc}`;

/**
 * __useGetHomePageQuery__
 *
 * To run a query within a React component, call `useGetHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomePageQuery(baseOptions?: Apollo.QueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
      }
export function useGetHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
        }
// @ts-ignore
export function useGetHomePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>): Apollo.UseSuspenseQueryResult<GetHomePageQuery, GetHomePageQueryVariables>;
export function useGetHomePageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>): Apollo.UseSuspenseQueryResult<GetHomePageQuery | undefined, GetHomePageQueryVariables>;
export function useGetHomePageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
        }
export type GetHomePageQueryHookResult = ReturnType<typeof useGetHomePageQuery>;
export type GetHomePageLazyQueryHookResult = ReturnType<typeof useGetHomePageLazyQuery>;
export type GetHomePageSuspenseQueryHookResult = ReturnType<typeof useGetHomePageSuspenseQuery>;
export type GetHomePageQueryResult = Apollo.QueryResult<GetHomePageQuery, GetHomePageQueryVariables>;
export const ExampleQueryDocument = gql`
    query ExampleQuery {
  posts(first: 5) {
    nodes {
      id
      title
      slug
    }
  }
}
    `;

/**
 * __useExampleQueryQuery__
 *
 * To run a query within a React component, call `useExampleQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useExampleQueryQuery(baseOptions?: Apollo.QueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
      }
export function useExampleQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
        }
// @ts-ignore
export function useExampleQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>): Apollo.UseSuspenseQueryResult<ExampleQueryQuery, ExampleQueryQueryVariables>;
export function useExampleQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>): Apollo.UseSuspenseQueryResult<ExampleQueryQuery | undefined, ExampleQueryQueryVariables>;
export function useExampleQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
        }
export type ExampleQueryQueryHookResult = ReturnType<typeof useExampleQueryQuery>;
export type ExampleQueryLazyQueryHookResult = ReturnType<typeof useExampleQueryLazyQuery>;
export type ExampleQuerySuspenseQueryHookResult = ReturnType<typeof useExampleQuerySuspenseQuery>;
export type ExampleQueryQueryResult = Apollo.QueryResult<ExampleQueryQuery, ExampleQueryQueryVariables>;
export const GetHeaderMenuDocument = gql`
    query GetHeaderMenu {
  primaryMenuItems: menuItems(where: {location: PRIMARY}) {
    nodes {
      id
      uri
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetHeaderMenuQuery__
 *
 * To run a query within a React component, call `useGetHeaderMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHeaderMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHeaderMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHeaderMenuQuery(baseOptions?: Apollo.QueryHookOptions<GetHeaderMenuQuery, GetHeaderMenuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHeaderMenuQuery, GetHeaderMenuQueryVariables>(GetHeaderMenuDocument, options);
      }
export function useGetHeaderMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHeaderMenuQuery, GetHeaderMenuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHeaderMenuQuery, GetHeaderMenuQueryVariables>(GetHeaderMenuDocument, options);
        }
// @ts-ignore
export function useGetHeaderMenuSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetHeaderMenuQuery, GetHeaderMenuQueryVariables>): Apollo.UseSuspenseQueryResult<GetHeaderMenuQuery, GetHeaderMenuQueryVariables>;
export function useGetHeaderMenuSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHeaderMenuQuery, GetHeaderMenuQueryVariables>): Apollo.UseSuspenseQueryResult<GetHeaderMenuQuery | undefined, GetHeaderMenuQueryVariables>;
export function useGetHeaderMenuSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHeaderMenuQuery, GetHeaderMenuQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHeaderMenuQuery, GetHeaderMenuQueryVariables>(GetHeaderMenuDocument, options);
        }
export type GetHeaderMenuQueryHookResult = ReturnType<typeof useGetHeaderMenuQuery>;
export type GetHeaderMenuLazyQueryHookResult = ReturnType<typeof useGetHeaderMenuLazyQuery>;
export type GetHeaderMenuSuspenseQueryHookResult = ReturnType<typeof useGetHeaderMenuSuspenseQuery>;
export type GetHeaderMenuQueryResult = Apollo.QueryResult<GetHeaderMenuQuery, GetHeaderMenuQueryVariables>;
export const GetSiteDataDocument = gql`
    query GetSiteData {
  generalSettings {
    title
    description
  }
}
    `;

/**
 * __useGetSiteDataQuery__
 *
 * To run a query within a React component, call `useGetSiteDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSiteDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSiteDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSiteDataQuery(baseOptions?: Apollo.QueryHookOptions<GetSiteDataQuery, GetSiteDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSiteDataQuery, GetSiteDataQueryVariables>(GetSiteDataDocument, options);
      }
export function useGetSiteDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSiteDataQuery, GetSiteDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSiteDataQuery, GetSiteDataQueryVariables>(GetSiteDataDocument, options);
        }
// @ts-ignore
export function useGetSiteDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSiteDataQuery, GetSiteDataQueryVariables>): Apollo.UseSuspenseQueryResult<GetSiteDataQuery, GetSiteDataQueryVariables>;
export function useGetSiteDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSiteDataQuery, GetSiteDataQueryVariables>): Apollo.UseSuspenseQueryResult<GetSiteDataQuery | undefined, GetSiteDataQueryVariables>;
export function useGetSiteDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSiteDataQuery, GetSiteDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSiteDataQuery, GetSiteDataQueryVariables>(GetSiteDataDocument, options);
        }
export type GetSiteDataQueryHookResult = ReturnType<typeof useGetSiteDataQuery>;
export type GetSiteDataLazyQueryHookResult = ReturnType<typeof useGetSiteDataLazyQuery>;
export type GetSiteDataSuspenseQueryHookResult = ReturnType<typeof useGetSiteDataSuspenseQuery>;
export type GetSiteDataQueryResult = Apollo.QueryResult<GetSiteDataQuery, GetSiteDataQueryVariables>;