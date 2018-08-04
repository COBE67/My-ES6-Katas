// 2: template strings - multiline
// To do: make all tests pass, leave the asserts unchanged!

describe('template string, can contain multiline content', function() {
   
   it('a normal string can`t span across multiple lines', function() {
      var normalString = 'line1' +
         '\n' +
         'line2';
      assert.equal(normalString, 'line1\nline2');
   });
   
   it('wrapped in backticks it can span over multiple lines', function() {
// Carriage return line2 to exactly at the beginning of line 16.
// No spaces between the end of line1 and beginning of line2
      var templateString = `line1
line2`;
      assert.equal(templateString, 'line1\nline2');
   });
   
   it('even over more than two lines', function() {
// Added a line 4 and 3 `\n`
      var multiline = `line 1` +
         `\n` +
         `line 2` +
         `\n` +
         `line 3` +
         `\n` +
         `line 4`;
      assert.equal(multiline.split('\n').length, 4);
   });
   
   describe('and expressions inside work too', function() {
      
      var x = 42;
      
      it('like simple variables', function() {
// Removed the space between $ and {
         var multiline = `line 1
          ${x}`;
         assert.equal(multiline, 'line 1\n          42');
      });
      
      it('also here spaces matter', function() {
// Took out the spaces and added \n
         var multiline = `\n${x}`;
         assert.equal(multiline, '\n42');
      });
      
   });
   
});