import { InputHTMLAttributes, forwardRef } from 'react';

export type ControlProps = InputHTMLAttributes<HTMLInputElement>;

export const Control = forwardRef<HTMLInputElement, ControlProps>(
  (props, ref) => {
    return (
      <>
        <input
          {...props}
          ref={ref}
          className="flex-1 appearance-none border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
        />
      </>
    );
  }
);
