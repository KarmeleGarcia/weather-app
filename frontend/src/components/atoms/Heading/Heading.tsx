// atoms/Heading/Heading.tsx
import { HeadingProps } from "@/components/atoms/Heading/Heading.types";
import { getTypographyClasses } from "@/components/shared/utils";

export function Heading({
  as: Tag = "h2",
  children,
  size = "md",
  weight = "bold",
  align = "left",
  color = "inherit",
  truncate = false,
  decoration = "none",
  className,
}: HeadingProps) {
  const classNames = getTypographyClasses({
    element: "heading",
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
