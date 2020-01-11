$('a.yourlink').click(function(e) {
  var fs = require('fs');
var stream = fs.createWriteStream("logging.txt");
stream.once('open', function(fd) {
  stream.write("Someone Clicked Link");
  stream.end();
});
});
