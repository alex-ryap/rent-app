import { MyCircle } from "./MyCircle.js";
import { MyRectangle } from "./MyRectangle.js";

const circle = new MyCircle(10, 10, 50);
const rectangle = new MyRectangle(10, 10, 100, 50);

console.log(circle.area);
console.log(rectangle.area);

console.log(circle.square);
console.log(rectangle.square);

circle.move(20, 10);
rectangle.move(10, 30);

console.log(circle.area);
console.log(rectangle.area);
