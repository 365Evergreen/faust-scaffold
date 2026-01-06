import { WordPressTemplate } from "@faustwp/core";
import { getWordPressPropsNoRevalidate } from "../wp-templates/getWordPressPropsNoRevalidate";

export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export function getStaticProps(ctx) {
  return getWordPressPropsNoRevalidate(ctx);
}
