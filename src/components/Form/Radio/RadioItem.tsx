'use client';

import * as Radio from '@radix-ui/react-radio-group';

export type RadioItemProps = {
  metrics: string;
  text: string;
};

export const RadioItem = ({ metrics, text }: RadioItemProps) => {
  return (
    <div className="group flex items-center gap-1">
      <Radio.Item
        className="h-6 w-6 cursor-pointer rounded-full border bg-white outline-none focus:shadow-black group-hover:border-blue-300"
        value={text}
        id={metrics}
      >
        <Radio.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-4  after:w-4 after:rounded-full after:bg-blue-900 after:content-['']" />
      </Radio.Item>
      <label
        className="w-full cursor-pointer pl-4 text-base leading-none"
        htmlFor={metrics}
      >
        {text}
      </label>
    </div>
  );
};
