const fs = require('fs');
function readFileJson() {
    var data = null;
    fs.readFile('skills.json', 'utf8', function (err, result) {
        if (err) {
          console.error(err);
        } else {
          data = JSON.parse(result);
        }
    });
    return data;
}


module.exports = readFileJson;