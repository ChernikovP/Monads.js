'use strict';

import chai, { expect } from 'chai';
import spies from 'chai-spies';

import { None, Some } from '../../main/Option';

chai.use(spies);

describe('None', function() {
  it(`'isEmpty' property should be 'true'`, function() {
    expect(None.isEmpty).to.be.true;
  });

  it(`'isDefined' property should be 'false'`, function() {
    expect(None.isDefined).to.be.false;
  });

  it(`'value' property should throw a TypeError`, function() {
    expect(function() { return None.value; }).to.throw(TypeError, 'None.value');
  });

  it(`'flatMap()' method should return 'None'`, function() {
    const noneFn = (val) => None;
    const someFn = (val) => new Some(val);

    expect(None.flatMap(noneFn)).to.equal(None);
    expect(None.flatMap(someFn)).to.equal(None);
  });

  it(`'map()' method should return 'None'`, function() {
    const noneFn = (val) => null;
    const someFn = (val) => val;

    expect(None.map(noneFn)).to.equal(None);
    expect(None.map(someFn)).to.equal(None);
  });

  it(`'forEach()' method should not trigger a callback`, function() {
    const callback = (val) => {};

    const spy = chai.spy(callback);

    None.forEach(spy);

    expect(spy).not.to.have.been.called();
  });

  it(`'filter()' method should return 'None'`, function() {
    const truthyFn = (val) => true;
    const falsyFn = (val) => false;

    expect(None.filter(truthyFn)).to.equal(None);
    expect(None.filter(falsyFn)).to.equal(None);
  });

  it(`'getOrElse()' method should return passed value`, function() {
    expect(None.getOrElse(0)).to.equal(0);
  });

  it(`'orElse()' method should return passed 'Option'`, function() {
    const some = new Some(0);

    expect(None.orElse(some).value).to.equal(some.value);
    expect(None.orElse(None)).to.equal(None);
  });

  it(`'orNull()' method should return passed 'null'`, function() {
    expect(None.orNull()).to.be.null;
  });

  it(`'toString()' method should return "None" string`, function() {
    expect(None.toString()).to.equal('None');
  });
});
