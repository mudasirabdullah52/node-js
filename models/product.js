const fs = require('fs');
const path = require('path');

// path for file system 
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

// Helper function 
const getProductFromFile = (cb) => {
    fs.readFile(p, (err, fileCotent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileCotent));
        }

    });

}
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save() {
        // products.push(this); // instead of storing in array we will store it in the file
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        })
    }

    static fetchAll(cb) {
        getProductFromFile(cb);
    }
}