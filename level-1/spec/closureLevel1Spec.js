var returnArguments = function(){ return arguments; };

describe("outer", function() {
  it("should console.log person.name", function() {

    expect(outerFunction.name()).to.equal('');
  });

});



