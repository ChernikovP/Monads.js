'use strict';

import _Option from './Option';
import None from './None';

class Some extends _Option {
  constructor(value) {
    super();

    this._value = value;

    Object.freeze(this);
  }

  get isDefined() {
    return true;
  }

  map(func) {
    const mappedValue = func(this.value);

    return isNil(mappedValue) ? None : new Some(mappedValue);
  }

  toString() {
    return `Some(${this.value})`;
  }
}

export default Some;