import chai from 'chai';

const { expect } = chai;


describe('object', () =>{
    it('should be empty', function() {
      const arr = [];
      expect(arr.length).to.equal(0)
    });
  });