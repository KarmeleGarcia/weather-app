import type { ReactNode } from "react";

export type Size        = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type Variant     = 'primary' | 'secondary' | 'outline' | 'ghost';
export type Align       = 'left' | 'center' | 'right';
export type Weight      = 'normal' | 'medium' | 'semibold' | 'bold';
export type Color       = 'primary' | 'muted' | 'error' | 'success' | 'inherit';
export type children    = ReactNode;