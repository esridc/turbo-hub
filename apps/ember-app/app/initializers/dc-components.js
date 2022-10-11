import { defineCustomElements } from 'dc-components/dist/esm/loader';

// define hub components' custom elements on the window
// define the resource Url as well
defineCustomElements(window, {
  resourcesUrl: `/assets/dc-components/`,
});

export function initialize() {}

export default {
  initialize,
};
