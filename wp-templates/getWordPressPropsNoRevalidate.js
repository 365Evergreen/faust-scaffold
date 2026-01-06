import { getWordPressProps } from "@faustwp/core";

export async function getWordPressPropsNoRevalidate(ctx) {
  const res = await getWordPressProps({ ctx });
  if (res && typeof res === "object" && Object.prototype.hasOwnProperty.call(res, "revalidate")) {
    const copy = { ...res };
    delete copy.revalidate;
    return copy;
  }
  return res;
}
