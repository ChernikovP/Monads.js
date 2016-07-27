'use strict';

class _Option {
  constructor() {
    if (this.constructor === _Option)
      throw new TypeError('new _Option()');
  }

  get isEmpty() {
    return false;
  }

  get isDefined() {
    return false;
  }

  get value() {
    if (this.isEmpty) throw new TypeError('None.value');

    return this._value;
  }

  flatMap(func) {
    return this.isEmpty ? this : func(this.value);
  }

  forEach(func) {
    if (!this.isEmpty) func(this.value);
  }

  getOrElse(alternativeValue) {
    return this.isEmpty ? alternativeValue : this.value;
  }

  orElse(alternativeOption) {
    return this.isEmpty ? alternativeOption : this;
  }

  orNull() {
    return this.getOrElse(null);
  }
}

export default _Option;
