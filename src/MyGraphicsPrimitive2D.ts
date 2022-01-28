import { Area } from "./Area";

/**
 * Abstract class MyGraphicsPrimitive2D
 * area - readonly property
 * move - method to moving primitive
 */
export abstract class MyGraphicsPrimitive2D {
  protected abstract area: Area;
  protected abstract move(offsetX: number, offsetY: number): void;
}
