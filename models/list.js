const fs = require('fs');
const path = require('path');

const pth = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'lists.json'
);

const getListsFromFile = cb => {
    fs.readFile(pth, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
};

module.exports = class List {
    constructor(l) {
      this.title = l;
    }
  
    save() {
      getListsFromFile(lists => {
        lists.push(this);
        fs.writeFile(pth, JSON.stringify(lists), err => {
          console.log(err);
        });
      });
    }
  
    static fetchAll(cb) {
      getListsFromFile(cb);
    }
};