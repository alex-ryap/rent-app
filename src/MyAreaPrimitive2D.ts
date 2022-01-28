import { MyGraphicsPrimitive2D } from "./MyGraphicsPrimitive2D.js";

/**
 * Abstract class MyAreaPrimitive2D extends from abstract class MyGraphicsPrimitive2D
 * square - readonly property
 */
export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  abstract readonly square: number;
}
