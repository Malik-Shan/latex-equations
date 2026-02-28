export type LineStyle = "solid" | "dotted" | "dashed";

export type ArrowHead = "none" | "arrow" | "dot" | "circle";

export type ShapeType = "rectangle" | "circle" | "triangle" | "rounded-triangle" | "spinner" | "wave" | "sine";

export interface Point {
  x: number;
  y: number;
}

export interface WaveConfig {
  id: string;
  loops: number;
  amplitude: number;
  wavelength: number;
  phase: number;
  stretch: number; // NEW: horizontal stretch factor
  inverted: boolean;
  lineStyle: LineStyle;
  strokeWidth: number;
  strokeColor: string;
  fillColor?: string;
  x: number;
  y: number;
  width: number;
}

export interface ShapeConfig {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  strokeWidth: number;
  strokeColor: string;
  fillColor: string;
  lineStyle: LineStyle;
  cornerRadius?: number;
  inwardCurve?: number;
}

export interface LineConfig {
  id: string;
  start: Point;
  end: Point;
  strokeWidth: number;
  strokeColor: string;
  lineStyle: LineStyle;
  arrowHead: ArrowHead;
  startHead: ArrowHead;
  constrainAngle: boolean;
  angleConstraint: 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315 | null;
}

export type CanvasElement = 
  | { type: "wave"; data: WaveConfig }
  | { type: "shape"; data: ShapeConfig }
  | { type: "line"; data: LineConfig };

export type Tool = "select" | "wave" | "rectangle" | "circle" | "triangle" | "rounded-triangle" | "spinner" | "line";