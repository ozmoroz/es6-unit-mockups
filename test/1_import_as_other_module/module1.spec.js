'use strict';
import { myFunc } from './module1';
import * as export1 from './export1';

/* global beforeEach, describe, sinon */

describe('import * from - a dependency in another module', () => {
  let export1Mock;

  beforeEach(() => {
    export1Mock = sinon.mock(export1);
    export1Mock
      .expects('exportFunc')
      .once()
      .returns('This is mocked exportFunc');
  });

  it('exportFunc function should be called', () => {
    myFunc();
    export1Mock.verify();
  });

  afterEach(() => {
    export1Mock.restore();
  });
});
