import { Area } from "./Area.js";
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
  constructor(public x: number, public y: number, public r: number) {
    super();
  }

  /**
   * Defines a rectangular area for a circle
   */
  area: Area = this.getArea();

  /**
   * Defines square of the circ
   */
  square = this.getSquare();

  /**
   * Calculate square of the circ
   * @returns square of the circ
   */
  private getSquare(): number {
    return Math.PI * Math.pow(this.r, 2);
  }

  /**
   * Calculate rectangular area for a circle
   * @returns rectangular area for a circle
   */
  private getArea(): Area {
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
  move(offsetX: number, offsetY: number): void {
    this.x = this.x + offsetX;
    this.y = this.y + offsetY;

    this.area = this.getArea();
  }
}
