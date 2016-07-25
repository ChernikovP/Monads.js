'use strict';

import Some from '../classes/Some';
import None from '../classes/None';

import isNil from '../../utils/isNil';

const Option = {
  unit: (value) => isNil(value) ? None : new Some(value),
  none: () => None,
  some: (value) => new Some(value)
};

Object.freeze(Option);

export default Option;
