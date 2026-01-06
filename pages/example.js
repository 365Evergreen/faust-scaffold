import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Header from "../components/Header";
import EntryHeader from "../components/EntryHeader";
import Footer from "../components/Footer";
import { getStaticPropsNoRevalidate } from "../wp-templates/getStaticPropsNoRevalidate";

/**
 * Next.js file based page example with Faust helpers.
 */
export default function Page() {
  const { data } = useQuery(Page.query);

  const { title: siteTitle, description: siteDescription } =
    data.generalSettings;
  const menuItems =
    (data.menus && data.menus.nodes && data.menus.nodes[0] && data.menus.nodes[0].menuItems
      ? data.menus.nodes[0].menuItems.nodes
      : []);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title="Next.js Page Example" />
        <p>Next.js pages are still supported!</p>
      </main>

      <Footer />
    </>
  );
}

Page.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;

export function getStaticProps(ctx) {
  return getStaticPropsNoRevalidate(ctx, {
    Page,
  });
}
