'use strict';

// We using proxyquire with noCallThru option here
// to stop index module from being evaluated.
const proxyquire = require('proxyquire').noCallThru();

/* global beforeEach, describe, sinon */

describe('proxyquire - a dependency in another module', () => {
  let module2;
  let export2Mock;

  let export2 = {
    exportFunc: function() {}
  };

  beforeEach(() => {
    export2Mock = sinon.mock(export2);
    export2Mock
      .expects('exportFunc')
      .once()
      .returns('This is mocked exportFunc');

    module2 = proxyquire('./module2', {
      './export2': export2
    });
  });

  it('exportFunc function should be called', () => {
    module2.myFunc();
    export2Mock.verify();
  });

  afterEach(() => {
    export2Mock.restore();
  });
});
