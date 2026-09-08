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

const circle = new Circle(1);

circle.draw();

/* Create Object Internally (Function) */

const Circle1 = new Function('radius', `
   this.radius = radius;
    this.draw = function () {
        console.log("Draw by Constructor (Internally)");

    };
`);

const intCircle = new Circle1(1);

intCircle.draw();