import isUndefined from 'lodash/lang/isUndefined';

/**
 * Recursive dispatch, returns a function which iterates a series of commands
 * looking for one to handle the target and return a value. The commands adhere
 * to an interface of (target, fn) where the returned dispatch fn is passed
 * along to each command, where it can be used by the command. If the target
 * cannot be handled by a command the command returns undefined. If none of the
 * supplied commands handle the target, an error is thrown.
 *
 * @param commands
 * @returns {Function}
 */
function dispatch(...commands) {
  return function fn(target) {
    let result;

    for (let command of commands) {
      result = command(target, fn);

      if (!isUndefined(result)) {
        break;
      }
    }

    return result;
  };
}

export default dispatch;
