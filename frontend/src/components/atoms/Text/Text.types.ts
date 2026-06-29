import { TypographyBaseProps } from "@/components/shared/types/typography";

export interface TextProps extends TypographyBaseProps {
  as?:
    | "p"
    | "span"
    | "small"
    | "strong"
    | "em"
    | "blockquote"
    | "figcaption"
    | "cite"
    | "q"
    | "mark"
    | "del"
    | "ins"
    | "sub"
    | "sup";
}
