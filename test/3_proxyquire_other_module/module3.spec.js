'use strict';

// We using 3_proxyquire_other_module with noCallThru option here
// to stop index module from being evaluated.
const proxyquire = require('proxyquire').noCallThru();

/* global beforeEach, describe, sinon */

describe.skip('proxyquire - a dependency in another module', () => {
  let module1;
  let export1Mock;

  let export1 = {
    export_func1: function() {}
  };

  beforeEach(() => {
    export1Mock = sinon.mock(export1);
    export1Mock
      .expects('exportFunc')
      .once()
      .returns('This is mocked exportFunc');

    module1 = proxyquire('./module3', {
      './export1': export1
    });
  });

  it('exportFunc function should be called', () => {
    module1.function1();
    export1Mock.verify();
  });

  afterEach(() => {
    export1Mock.restore();
  });
});
