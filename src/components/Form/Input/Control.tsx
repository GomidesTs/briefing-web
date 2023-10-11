import { InputHTMLAttributes } from 'react';

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Control = (props: ControlProps) => {
  return (
    <input
      {...props}
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-slate-300 outline-none focus:ring-0"
    />
  );
};
