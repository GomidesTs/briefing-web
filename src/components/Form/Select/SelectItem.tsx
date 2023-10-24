'use client';

import React from 'react';

export type SelectItemProps = {
  value: string;
  text: string;
};
export const SelectItem = ({ value, text }: SelectItemProps) => {
  return (
    <>
      <option value="" disabled hidden>
        Selecione uma opção
      </option>
      <option value={value} className="text-zinc-600">
        {text}
      </option>
    </>
  );
};
