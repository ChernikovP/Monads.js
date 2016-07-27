'use strict';

import _Option from './Option';

class None extends _Option {
  constructor() {
    super();

    Object.freeze(this);
  }

  get isEmpty() {
    return true;
  }

  map(func) {
    return this;
  }

  filter(pred) {
    return this;
  }

  toString() {
    return 'None';
  }
}

export default new None();
