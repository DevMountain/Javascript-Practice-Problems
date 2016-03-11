$( document ).ready(function() {
  function changeIcon(elem) {
    if(elem) {
      $(elem).addClass('success');
    }

  }

  if(expect(outerFunction.name()).to.equal('Bob')) changeIcon('#problem1');
  if(expect(motivation('Ben', 'Callis')).to.equal('Your doing awesome keep it up Ben  Callis')) changeIcon('#problem2');

  if(expect(module.publicMethod()).to.equal('phillip 29 Utah')) changeIcon('#problem3');




  if(expect(module2.publicMethod('ben', 29, 'UTAH')).to.equal('ben 29 UTAH')) changeIcon('#problem4');



});








