const fs = require('fs');
const path = require('path');


module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        // products.push(this); // instead of storing in array we will store it in the file
        const p = path.join(path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );

    }

    static fetchAll() {
        return products;
    }
}