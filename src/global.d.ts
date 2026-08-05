declare module "qrcode.react" {
  import * as React from "react";

  export interface QRCodeCanvasProps {
    value: string;
    size?: number;
    bgColor?: string;
    fgColor?: string;
  }

  export const QRCodeCanvas: React.FC<QRCodeCanvasProps>;
}

declare module "html-to-image" {
  export function toPng(node: HTMLElement): Promise<string>;
}
