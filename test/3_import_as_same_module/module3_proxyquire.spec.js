'use strict';
const proxyquire = require('proxyquire').noCallThru();

/* global beforeEach, describe, sinon */

describe('proxyquire - a dependency in the same module', () => {
  let module3
  let mock;

  beforeEach(() => {
    module3 = proxyquire('./module3');

    mock = sinon.mock(module3);
    mock
      .expects('function2')
      .once()
      .returns('This is mocked function2');
  });

  it('function2 function should be called', () => {
    module3.function1();
    mock.verify();
  });

  afterEach(() => {
    mock.restore();
  });
});
