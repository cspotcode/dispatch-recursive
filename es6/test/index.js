import assert from 'assert';
import noop from 'lodash/utility/noop';
import identity from 'lodash/utility/identity';
import {spy} from 'sinon';
import dispatch from '../index';

describe('dispatch', () => {
  it(
    'should return a function which iterates through commands until one' +
    'returns a value', () => {
      const uncalledCmd = spy();
      const fn = dispatch(noop, noop, identity, uncalledCmd);
      assert.equal(fn('foo'), 'foo');
      assert(!uncalledCmd.called);
    }
  );
});
