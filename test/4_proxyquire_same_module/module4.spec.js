'use strict';
const proxyquire = require('proxyquire').noCallThru();

/* global beforeEach, describe, sinon */

describe.skip('proxyquire - a dependency in the same module', () => {
  let module1;
  let mock;

  beforeEach(() => {
    module1 = proxyquire('./module1');

    mock = sinon.mock(module1);
    mock
      .expects('function2')
      .once()
      .returns('This is mocked function2');
  });

  it('function2 function should be called', () => {
    module1.function1();
    mock.verify();
  });

  afterEach(() => {
    mock.restore();
  });
});
