import { HTMLAttributes, ReactNode } from 'react';

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Root = (props: RootProps) => {
  return (
    <div
      {...props}
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50"
    />
  );
};
