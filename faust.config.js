import { setConfig } from "@faustwp/core";
import { addFilter } from "@wordpress/hooks";
import templates from "./wp-templates";
import possibleTypes from "./possibleTypes.json";

// Remove deprecated `canonizeResults` option from Apollo cache options
// so builds with newer @apollo/client versions do not warn/fail.
addFilter(
  "faust.apolloClientInMemoryCacheOptions",
  "faust-scaffold/remove-canonizeResults",
  (options) => {
    if (options && Object.prototype.hasOwnProperty.call(options, "canonizeResults")) {
      // eslint-disable-next-line no-param-reassign
      delete options.canonizeResults;
    }
    return options;
  }
);

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates,
  experimentalPlugins: [],
  possibleTypes,
});
