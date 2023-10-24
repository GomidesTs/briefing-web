'use client';

import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

export type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
};

export const Root = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <select
        {...props}
        ref={ref}
        className="flex w-full animate-slideDownAndFade items-center gap-2 space-y-8 rounded-lg border border-zinc-300 px-3 py-2 text-zinc-600 shadow-sm outline-none focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50"
      >
        {children}
      </select>
    );
  }
);
