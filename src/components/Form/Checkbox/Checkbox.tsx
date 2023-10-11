'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

export type CheckboxProps = {
  text: string;
  complement?: string;
  checked?: boolean;
};

export const Checkbox = ({
  text,
  complement,
  checked = false
}: CheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        defaultChecked={checked}
        id={text}
        className="flex h-6 w-6 appearance-none rounded border border-zinc-300 hover:border-blue-300"
      >
        <CheckboxPrimitive.Indicator>
          <Check className="text-blue-950" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <label htmlFor={text} className="flex cursor-pointer items-center gap-1">
        {text}
        <span className="text-sm text-zinc-400">{complement}</span>
      </label>
    </div>
  );
};
