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

// const circle = createCircle(1);

/* Constructors */

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw by Constructor");
        
    };
}

const circle = new Circle(1);

circle.draw();