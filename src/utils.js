import _ from "lodash";

export function NilCheck(it) {
  if (_.isArray(it)) {
    return it.length === 0 || it.filter((v) => NilCheck(v)).length > 0;
  } else if (_.isPlainObject(it)) {
    return Object.values(it).filter((v) => NilCheck(v)).length > 0;
  }
  return _.isNil(it);
}
