'use strict';

import { expect } from 'chai';

import { Some, None, Option } from '../../main/Option';

describe('Option', function() {
  it(`factory method 'none()' should return singleton object 'None'`, function() {
    expect(Option.none()).to.be.equal(None);
  });

  it(`factory method 'some()' should return an instance of class'Some'`, function() {
    expect(Option.some(0)).to.be.an.instanceof(Some);
  });

  it(`factory method 'unit()' should return an instance of class'Some'`, function() {
    expect(Option.unit(0)).to.be.an.instanceof(Some);
    expect(Option.unit('')).to.be.an.instanceof(Some);
    expect(Option.unit({})).to.be.an.instanceof(Some);
    expect(Option.unit([])).to.be.an.instanceof(Some);
    expect(Option.unit(true)).to.be.an.instanceof(Some);
    expect(Option.unit(false)).to.be.an.instanceof(Some);
    expect(Option.unit(() => {})).to.be.an.instanceof(Some);
    expect(Option.unit(Symbol('Option'))).to.be.an.instanceof(Some);
  });

  it(`factory method 'unit()' should return singleton object 'None'`, function() {
    expect(Option.unit(null)).to.be.equal(None);
    expect(Option.unit(undefined)).to.be.equal(None);
  });

  describe('Monad Laws', function() {
    it('Left Identity', function() {
      const positiveIncOption = (i) => (i > 0) ? new Some(i + 1) : None;

      expect(Option.unit(null).flatMap(positiveIncOption)).to.equal(positiveIncOption(null));

      expect(Option.unit(1).flatMap(positiveIncOption).value).to.equal(positiveIncOption(1).value);
      expect(Option.unit(-1).flatMap(positiveIncOption)).to.equal(positiveIncOption(-1));
    });

    it('Right Identity', function() {
      const some = new Some(0);

      expect(None.flatMap(Option.unit)).to.equal(None);

      expect(some.flatMap(Option.unit).value).to.equal(some.value);
    });

    it('Associativity', function() {
      const inc = (x) => Option.unit(x + 1);
      const x2 = (x) => Option.unit(x + 1);

      const none = (x) => None;

      const some = new Some(1);

      expect(None.flatMap(inc).flatMap(x2))
        .to.equal(None.flatMap((x) => inc(x).flatMap(x2)));
      expect(some.flatMap(inc).flatMap(x2).value)
        .to.equal(some.flatMap((x) => inc(x).flatMap(x2)).value);

      expect(some.flatMap(none).flatMap(x2))
        .to.equal(some.flatMap((x) => none(x).flatMap(x2)));
      expect(some.flatMap(inc).flatMap(none))
        .to.equal(some.flatMap((x) => inc(x).flatMap(none)));
    });
  });
});
