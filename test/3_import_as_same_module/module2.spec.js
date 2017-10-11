'use strict';
import * as module2 from './module2';
import { function1 } from './module2';

/* global beforeEach, describe, sinon */

describe('import * from - a dependency in the same module', () => {
  let module2Mock;

  beforeEach(() => {
    module2Mock = sinon.mock(module2);
    module2Mock
      .expects('function2')
      .once()
      .returns('This is mocked function2');
  });

  it('function2 should be called', () => {
    console.log(function1());
    module2Mock.verify();
  });

  afterEach(() => {
    module2Mock.restore();
  });
});
