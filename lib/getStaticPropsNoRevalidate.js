import { getNextStaticProps } from "@faustwp/core";

export async function getStaticPropsNoRevalidate(ctx, cfg) {
  const res = await getNextStaticProps(ctx, cfg);
  if (res && typeof res === "object" && Object.prototype.hasOwnProperty.call(res, "revalidate")) {
    const copy = { ...res };
    delete copy.revalidate;
    return copy;
  }
  return res;
}
