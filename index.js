/* Object literals, Properties, Methods */

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log("Draw");

//     }
// }

/* Factory */

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("Draw by Factory");
        }
    };
}

const factoryCircle = createCircle(1);

/* Constructors */

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw by Constructor");
        
    };
}

// const circle = new Circle(1);

// circle.draw();

// Circle.apply({}, [1]);
// Circle.call({}, 1);

/* Create Object Internally (Function) */

const Circle1 = new Function('radius', `
   this.radius = radius;
    this.draw = function () {
        console.log("Draw by Constructor (Internally)");

    };
`);

const intCircle = new Circle1(1);

// intCircle.draw();

/* Value Types - Primitives
   Reference Types - Objects, Functions, Arrays
*/

let x = {value : 10};
let y = x;

x.value = 20;

// console.log(x);
// console.log(y);

const obj = { val: 52 };

const increase = (obj) => {
    obj.val++;
}

increase(obj);
console.log(obj);
