// --- Common reusable properties ---

import type { ReactNode } from "react";

export interface StylableProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface WithChildren {
  children: ReactNode;
}

export interface CommonProps extends StylableProps, WithChildren {
  id?: string;
  'data-testid'?: string;
}