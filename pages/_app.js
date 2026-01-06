import "../faust.config";
import React from "react";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import { addFilter } from "@wordpress/hooks";
import "../styles/globals.css";

// Remove deprecated/unsupported Apollo InMemoryCache option if present.
// Faust applies `apolloClientInMemoryCacheOptions` filters when creating the client.
// Some Apollo versions no longer accept `canonizeResults` — strip it here.
try {
  addFilter(
    "apolloClientInMemoryCacheOptions",
    "faust/remove-canonize-results",
    (options) => {
      if (options && typeof options === "object" && "canonizeResults" in options) {
        // eslint-disable-next-line no-param-reassign
        delete options.canonizeResults;
      }
      return options;
    }
  );
} catch (e) {
  // If hooks are not available at build time, fail silently — build logs will show if problem persists.
}

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
