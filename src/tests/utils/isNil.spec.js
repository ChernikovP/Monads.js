'use strict';

import {expect} from 'chai';

import isNil from '../../main/utils/isNil';

describe('isNil', function() {
  it(`should return 'true' for 'null'`, function() {
    expect(isNil(null)).to.be.true;
  });

  it(`should return 'true' for 'undefined'`, function() {
    expect(isNil(undefined)).to.be.true;
  });

  it(`should return 'false' for a string`, function() {
    expect(isNil('')).to.be.false;
  });

  it(`should return 'false' for zero`, function() {
    expect(isNil(0)).to.be.false;
  });

  it(`should return 'false' for an object`, function() {
    expect(isNil({})).to.be.false;
  });

  it(`should return 'false' for an array`, function() {
    expect(isNil([])).to.be.false;
  });

  it(`should return 'false' for booleans`, function() {
    expect(isNil(true)).to.be.false;
    expect(isNil(false)).to.be.false;
  });

  it(`should return 'false' for Symbol`, function() {
    expect(isNil(Symbol('isNil'))).to.be.false;
  });

  it(`should return 'false' for functions`, function() {
    expect(isNil(() => {})).to.be.false;
  });
});
