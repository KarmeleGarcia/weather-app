// shared/utils/typography.ts
import { type Size, type Align, type Weight, type Color } from "@/components/shared/types/tokens";

interface GetTypographyClassesParams {
  /** Base class to differentiate heading vs text */
  element: "heading" | "text";
  size: Size;
  weight: Weight;
  align: Align;
  color: Color;
  truncate: boolean;
  decoration: "none" | "underline" | "line-left" | "line-center";
  className?: string;
}

/**
 * Builds the CSS class string for typography components
 */
export function getTypographyClasses({
  element,
  size,
  weight,
  align,
  color,
  truncate,
  decoration,
  className,
}: GetTypographyClassesParams): string {
  return [
    "typography",
    `typography--${element}`,
    `typography--${size}`,
    `typography--${weight}`,
    `typography--${align}`,
    `typography--${color}`,
    truncate ? "typography--truncate" : "",
    decoration !== "none" ? `typography--decoration-${decoration}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}
