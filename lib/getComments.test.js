import { expect } from 'chai';
import sinon from 'sinon';

import * as http from './http';
import getComments from './getComments';

describe(__filename, function () {

  let sandbox;
  let getMock;

  before(function () {
    sandbox = sinon.createSandbox({});
    getMock = sandbox.stub(http, 'default').callsFake(function () {
      return [
        'comment1',
        'comment2',
        'comment3',
        'comment4',
      ];
    });
  })

  after(function () {
    sandbox.restore();
  })

  it('should return the last 3 comments', async function () {
    const comments = await getComments(1);
    expect(getMock.calledOnce).to.equal(true);
    expect(getMock.calledWith('https://jsonplaceholder.typicode.com/posts/1/comments')).to.equal(true);
    expect(comments).to.deep.equal([
      'comment2',
      'comment3',
      'comment4',
    ]);
    sandbox.restore();
    
  });
});