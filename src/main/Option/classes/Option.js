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
    if (this.isEmpty) throw new TypeError('None.get()');

    return this._value;
  }

  flatMap(func) {
    return this.isEmpty ? this : func(this.value);
  }

  filter(pred) {
    if (this.isEmpty) return this;

    return pred(this.value) ? this : None;
  }

  forEach(func) {
    if (this.isDefined) func(this.value);
  }

  getOrElse(defaultValue) {
    return this.isEmpty ? defaultValue : this.value;
  }

  orElse(defaultOption) {
    return this.isEmpty ? defaultOption : this;
  }

  orNull() {
    return this.isEmpty ? null : this.value;
  }
}

export default _Option;
