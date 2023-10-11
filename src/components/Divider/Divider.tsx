import { ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

type DividerProps = ComponentProps<'div'>;

export const Divider = (props: DividerProps) => {
  return (
    <div
      className={twMerge(
        'relative mt-12 border-b border-zinc-400',
        'before:absolute before:bottom-0 before:h-1 before:w-6 before:bg-zinc-700',
        props.className
      )}
    />
  );
};
