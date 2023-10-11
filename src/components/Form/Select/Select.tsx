'use client';
import { ReactNode } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode;
  placeholder: string;
}

export const Select = ({ children, placeholder, ...props }: SelectProps) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 data-[placeholder]:text-slate-300">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-zinc-950"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          sideOffset={8}
          position="popper"
          className="z-10 h-60 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
        >
          <SelectPrimitive.ScrollUpButton className="group flex cursor-pointer justify-center bg-transparent">
            <ChevronUp className="h-8 w-8 text-zinc-500 group-hover:text-blue-900" />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="group flex cursor-pointer justify-center bg-transparent">
            <ChevronDown className="h-8 w-8 text-zinc-500 group-hover:text-blue-900" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
