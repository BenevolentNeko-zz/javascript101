import { expect } from 'chai';
import sinon from 'sinon';

import * as http from './http';
import getUser from './getUser';

describe(__filename, function () {

  let sandbox;
  let getMock;

  before(function () {
    sandbox = sinon.createSandbox({});
    getMock = sandbox.stub(http, 'default').callsFake(function () {
      return ['user1'];
    });
  });

  after(function () {
    sandbox.restore();
  })

  it('should call http get if the user isn\'t in the cache', async function () {
    await getUser(1);
    expect(getMock.calledOnce).to.equal(true);
    expect(getMock.calledWith('https://jsonplaceholder.typicode.com/users?id=1')).to.equal(true);
  });

  it('should fetch the user from the cache after the first request', async function () {
    await getUser(1);
    await getUser(1);
    expect(getMock.calledOnce).to.equal(true);
  });

  it('catch fetches match the initial get', async function () {
    const user1 = await getUser(1);
    const user1again = await getUser(1);
    expect(user1).to.equal(user1again);
  });

});