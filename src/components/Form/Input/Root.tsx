import { ComponentProps, HTMLAttributes, ReactNode } from 'react';

import { VariantProps, tv } from 'tailwind-variants';

const input = tv({
  base: ['flex w-full gap-2'],

  variants: {
    variant: {
      input:
        'items-center rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50',
      radio: 'flex-col items-start justify-start'
    }
  },

  defaultVariants: {
    variant: 'input'
  }
});

export type RootProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
} & ComponentProps<'input'> &
  VariantProps<typeof input>;

export const Root = ({ variant, ...props }: RootProps) => {
  return <div {...props} className={input({ variant })} />;
};
