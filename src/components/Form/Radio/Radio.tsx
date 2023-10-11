'use client';

import { ReactNode } from 'react';

import * as RadioGroup from '@radix-ui/react-radio-group';

export interface RadioProps extends RadioGroup.RadioProps {
  children: ReactNode;
  default?: string;
}

export const Radio = ({ children }: RadioProps) => {
  return <RadioGroup.Root className="space-y-2">{children}</RadioGroup.Root>;
};
