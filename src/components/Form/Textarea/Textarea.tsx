import { ComponentProps, forwardRef } from 'react';

export type TextareaProps = ComponentProps<'textarea'>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <textarea
        className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 placeholder-slate-300 shadow-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
        ref={ref}
        {...props}
      />
    );
  }
);
