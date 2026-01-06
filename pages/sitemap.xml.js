import { getSitemapProps } from "@faustwp/core";

export default function Sitemap() {}

export function getStaticProps(ctx) {
  // Static export: skip server-side sitemap generation during static build.
  // Returning empty props so the page is statically generated.
  return {
    props: {},
  };
}
