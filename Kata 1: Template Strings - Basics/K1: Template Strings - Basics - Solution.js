// 1: template strings - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('a template string, is wrapped in ` (backticks) instead of \' or "', function() {
   
   describe('by default, behaves like a normal string', function() {
      
      it('just surrounded by backticks', function() {
// Added 'like a string'
         var str = `like a string`;
         assert.equal(str, 'like a string');
      });
      
   });
   
   var x = 42;
   var y = 23;
   
   describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
      
      it('e.g. a simple variable "${x}" just gets evaluated', function() {
// Added ${x} to var evaluated
         var evaluated = `x=${x}`;
         assert.equal(evaluated, 'x=' + x);
      });
      
      it('multiple variables get evaluated too', function() {
// Removed the spaces in the string and added ` `
         var evaluated = `${x}+${y}`;
         assert.equal(evaluated, x + '+' + y);
      });
      
   });
   
   describe('can evaluate any expression, wrapped inside "${...}"', function() {
      
      it('all inside "${...}" gets evaluated', function() {
// Brought 'y' inside the brackets
         var evaluated = `${x+y}`;
         assert.equal(evaluated, x+y);
      });
      
      it('inside "${...}" can also be a function call', function() {
         
         function getDomain(){
            return document.domain;
         }
// Added a function call to getDomain()
         var evaluated = `${ getDomain() }`;
         assert.equal(evaluated, 'tddbin.com');
      });
      
   });
   
});