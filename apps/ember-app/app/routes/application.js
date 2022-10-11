import Route from '@ember/routing/route';
import { add } from 'dc-util';
export default class ApplicationRoute extends Route {
  model() {
    return {
      value: add(3, 5),
    };
  }
}
