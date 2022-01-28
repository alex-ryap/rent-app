import { Area } from "./Area.js";
import { MyAreaPrimitive2D } from "./MyAreaPrimitive2D.js";

/**
 * Class MyRectangle  extends from abstract class MyAreaPrimitive2D
 */
export class MyRectangle extends MyAreaPrimitive2D {
  /**
   * Create instance of MyRectangle
   * @param x - X coordinate of begin
   * @param y - Y coordinate of begin
   * @param width - width
   * @param height - height
   */
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {
    super();
    this.width = width;
    this.height = height;
  }

  /**
   * Defines a rectangular area for a rectangle
   */
  area: Area = this.getArea();

  /**
   * Defines square of the rectangle
   */
  square = this.getSquare();

  /**
   * Calculate square of the rectangle
   * @returns square of the rectangle
   */
  private getSquare(): number {
    return this.width * this.height;
  }

  /**
   * Calculate rectangular area for a rectangle
   * @returns rectangular area for a rectangle
   */
  private getArea(): Area {
    return {
      x1: this.x,
      y1: this.y,
      x2: this.x + this.width,
      y2: this.y + this.height,
    };
  }

  /**
   * Move the rectangle
   * @param offsetX - x offset
   * @param offsetY - y offset
   */
  move(offsetX: number, offsetY: number): void {
    this.x = this.x + offsetX;
    this.y = this.y + offsetY;

    this.area = this.getArea();
  }
}
