'use strict';
import * as module3 from './module3';
import { function1 } from './module3';

/* global beforeEach, describe, sinon */

describe('import * from - a dependency in the same module', () => {
  let module3Mock;

  beforeEach(() => {
    module3Mock = sinon.mock(module3);
    module3Mock
      .expects('function2')
      .once()
      .returns('This is mocked function2');
  });

  it('function2 should be called', () => {
    console.log(function1());
    module3Mock.verify();
  });

  afterEach(() => {
    module3Mock.restore();
  });
});
