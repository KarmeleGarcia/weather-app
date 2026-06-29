import { TypographyBaseProps } from '@/components/shared/types/typography';

export interface HeadingProps extends TypographyBaseProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}