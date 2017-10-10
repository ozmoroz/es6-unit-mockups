'use strict';
import * as module1 from './module2';
import { function1 } from './module2';

/* global beforeEach, describe, sinon */

describe.skip('import * from - a dependency in the same module', () => {
  let module1Mock;

  beforeEach(() => {
    module1Mock = sinon.mock(module1);
    module1Mock
      .expects('function2')
      .once()
      .returns('This is mocked function2');
  });

  it('function2 function should be called', () => {
    console.log(function1());
    module1Mock.verify();
  });

  afterEach(() => {
    module1Mock.restore();
  });
});
