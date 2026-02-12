// function doSomething(){
//     for(var i =0; i<5; i++){
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }

// doSomething();

// interface 
class Point {
    constructor(private _x: number, private _y: number){
    }
    // draw: () => void

    draw(){
        console.log('x: ' + this._x + 'y: ' + this._y);
    }
    get x(){
        return this._x;
    }
    set x(value) {
        if (value<0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }

}
// let drawPoint = (point: Point) => {
//     //...
// }

// let getDistance = (pointA: Point, pointB: Point) => {
//     //...
// }

// drawPoint({
//     x:1,
//     y:2
// }
// )

let point = new Point(1,2);
let x = point.x;
point.x = 10;
// point.x = 1;
// point.y = 2;
point.draw();