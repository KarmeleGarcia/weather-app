// atoms/Text/Text.tsx
import { TextProps } from "@/components/atoms/Text/Text.types";
import { getTypographyClasses } from "@/components/shared/utils";

export function Text({
  as: Tag = "p",
  children,
  size = "md",
  weight = "normal",
  align = "left",
  color = "inherit",
  truncate = false,
  decoration = "none",
  className,
}: TextProps) {
  const classNames = getTypographyClasses({
    element: "text",
    size,
    weight,
    align,
    color,
    truncate,
    decoration,
    className,
  });

  return <Tag className={classNames}>{children}</Tag>;
}
