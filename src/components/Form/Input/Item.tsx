'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

export type ItemProps = InputHTMLAttributes<HTMLInputElement> & {
  text: string;
};

export const Item = forwardRef<HTMLInputElement, ItemProps>(
  ({ text, ...props }, ref) => {
    return (
      <label htmlFor={text} className="flex cursor-pointer items-center gap-4">
        <input
          id={text}
          value={text}
          {...props}
          ref={ref}
          className="h-6 w-6 flex-1 cursor-pointer text-zinc-900 outline-none"
        />
        {text}
      </label>
    );
  }
);
