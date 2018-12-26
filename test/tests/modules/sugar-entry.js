import Sugar from '../../../src/core';
import * as Exports from '../../../src';

describe('Entry Module', function() {

  it('should export the core as default', function() {
    assertEqual(Exports.default, Sugar);
  });

  it('should have named exports equal to those of the core', function() {
    assertEqual(Exports.VERSION, Sugar.VERSION);
    assertEqual(Exports.extend, Sugar.extend);
    assertEqual(Exports.restore, Sugar.restore);
    assertEqual(Exports.createNamespace, Sugar.createNamespace);
  });

  it('should have exported namespaces', function() {
    assertInstanceOf(Exports.Number, Function);
  });

  it('should not have defined methods', function() {
    assertUndefined(Exports.Number.abs);
    assertUndefined(Exports.Number.prototype.abs);
  });

});