'use strict';

import chai, { expect } from 'chai';
import spies from 'chai-spies';

import { None, Some } from '../../main/Option';

chai.use(spies);

describe('Some', function() {
  let some;

  beforeEach(function() {
    some = new Some(0);
  });

  afterEach(function() {
    some = null;
  });

  it(`'isEmpty' property should be 'false'`, function() {
    expect(some.isEmpty).to.be.false;
  });

  it(`'isDefined' property should be 'true'`, function() {
    expect(some.isDefined).to.be.true;
  });

  it(`'value' property should return a wrapped value`, function() {
    expect(some.value).to.equal(0);
  });

  it(`'flatMap()' method should return 'None'`, function() {
    const noneFn = (val) => None;

    expect(some.flatMap(noneFn)).to.equal(None);
  });

  it(`'flatMap()' method should return 'Some'`, function() {
    const someFn = (val) => new Some('');

    expect(some.flatMap(someFn).value).to.equal('');
  });

  it(`'map()' method should return 'None'`, function() {
    const noneFn = (val) => null;

    expect(some.map(noneFn)).to.equal(None);
  });

  it(`'map()' method should return 'Some'`, function() {
    const someFn = (val) => '';

    expect(some.map(someFn).value).to.equal('');
  });

  it(`'forEach()' method should trigger a callback`, function() {
    const callback = (val) => {};

    const spy = chai.spy(callback);

    some.forEach(spy);

    expect(spy).to.have.been.called();
    expect(spy).to.have.been.called.once;
    expect(spy).to.have.been.called.with(0);
  });

  it(`'filter()' method should return 'None'`, function() {
    const falsyFn = (val) => false;

    expect(some.filter(falsyFn)).to.equal(None);
  });

  it(`'filter()' method should return 'Some'`, function() {
    const truthyFn = (val) => true;

    expect(some.filter(truthyFn).value).to.equal(some.value);
  });

  it(`'getOrElse()' method should return wrapped value`, function() {
    expect(some.getOrElse('')).to.equal(0);
  });

  it(`'orElse()' method should return this 'Option'`, function() {
    expect(some.orElse(some)).to.equal(some);
  });

  it(`'orNull()' method should return wrapped value`, function() {
    expect(some.orNull()).to.be.equal(0);
  });

  it(`'toString()' method should return "Some()" string`, function() {
    expect(some.toString()).to.equal('Some(0)');
  });
});
