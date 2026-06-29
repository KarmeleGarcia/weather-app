import { Size, Align, Weight, Color } from "@/components/shared/types/tokens"; 

export interface TypographyBaseProps {
  size?: Size;
  weight?: Weight;
  align?: Align;
  color?: Color;
  /** If the text should be truncated with ... */
  truncate?: boolean;
  decoration?: "none" | "underline" | "line-left" | "line-center";
  /** Aditional classnames */
  className?: string;
  /** Content */
  children: React.ReactNode;
}
