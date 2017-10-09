'use strict';
import * as module1Module from './module1';
import { function1 } from './module1';

/* global beforeEach, describe, sinon */

describe('module1', () => {
  let module1Mock;

  beforeEach(() => {
    module1Mock = sinon.mock(module1Module);
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
