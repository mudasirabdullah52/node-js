// console.log("Hello from node js")
// const fs = require('fs');

// fs.writeFileSync('hello.text', 'hello from node js')

// const add = (a, b) => {
//     return a + b;
// }
// console.log(add(10, 20))
// const person = {
//     name: 'Mudasir',
//     age: 24,
//     getinto() {
//         return `${this.name}, ${this.age}`;
//     }
// }
// console.log(person.getinto())
// const array = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

// const transformedArray = array.map(item => {
//     if (item.trim() === '') {
//         return 'empty string';
//     } else {
//         return item;
//     }
// });

// console.log(transformedArray);
// const obj1 = { 'key1': 1 }

// const obj2 = { ...obj1 }

// if (obj2 === obj1) {

//     console.log('same objects')

// }

// else {

//     console.log('different objects')

// }

console.log('a');
console.log('b');

const testUserForm = async () => {

    const c = new Promise((resolve, reject) => {
        setTimeout(() => resolve("c"), 1000);
    })
    const d = new Promise((resolve, reject) => {
        setTimeout(() => resolve("d"), 3000);
    })
    const e = () => {
        return "e";
    }

    let output1 = await c;
    console.log(output1);
    let output2 = await d;
    console.log(output2);

    const testResult = e();
    return testResult;

};
testUserForm().then((m) => console.log(`${m}`))