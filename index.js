/* Object literals, Properties, Methods */

const literalCircle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log("Draw");

    }
}

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

const constCircle = new Circle(10);

// constCircle.draw();

constCircle.location = { x: 1 };
// constCircle['location'] = { x : 2};
const propertyName = "center-location"; // Brackets Notation Needed
constCircle[propertyName] = { x: 5 };
delete constCircle.location;
console.log(constCircle);

// Circle.apply({}, [1]);
// Circle.call({}, 1);

/* Enumerating Properties */
for (let key in constCircle) {
    if (typeof constCircle[key] != "function") {
        console.log(key, constCircle[key]);
    }
}

const keys = Object.keys(constCircle);
console.log(keys);

if ("radius" in  constCircle) {
    console.log("It has a radius");
    
}


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

let x = { value: 10 };
let y = x;

x.value = 20;

// console.log(x);
// console.log(y);

const obj = { val: 52 };

const increase = (obj) => {
    obj.val++;
}

increase(obj);
// console.log(obj);
