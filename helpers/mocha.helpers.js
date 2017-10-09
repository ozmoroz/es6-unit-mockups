import chai, { expect } from 'chai';
import sinon, { spy } from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.should();

global.expect = expect;
global.spy = spy;
global.sinon = sinon;

module.exports = {
  chai: chai,
  expect: expect,
  sinon: sinon,
  spy: spy,
};
