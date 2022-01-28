import { MyAreaPrimitive2D } from "./MyAreaPrimitive2D.js";
/**
 * Class MyCircle extends from abstract class MyAreaPrimitive2D
 */
export class MyCircle extends MyAreaPrimitive2D {
    /**
     * Create instance of MyCircle
     * @param x - X coordinate of center
     * @param y - Y coordinate of center
     * @param r - circle radius
     */
    constructor(x, y, r) {
        super();
        this.x = x;
        this.y = y;
        this.r = r;
        /**
         * Defines a rectangular area for a circle
         */
        this.area = this.getArea();
        /**
         * Defines square of the circ
         */
        this.square = this.getSquare();
    }
    /**
     * Calculate square of the circ
     * @returns square of the circ
     */
    getSquare() {
        return Math.PI * Math.pow(this.r, 2);
    }
    /**
     * Calculate rectangular area for a circle
     * @returns rectangular area for a circle
     */
    getArea() {
        return {
            x1: this.x - this.r,
            y1: this.y - this.r,
            x2: this.x + this.r,
            y2: this.y + this.r,
        };
    }
    /**
     * Move the circ
     * @param offsetX - x offset
     * @param offsetY - y offset
     */
    move(offsetX, offsetY) {
        this.x = this.x + offsetX;
        this.y = this.y + offsetY;
        this.area = this.getArea();
    }
}
