import React from 'react';
import { Academic__Interface } from '../entities/Period';

interface SelectInputProps {
  options: Academic__Interface[];
  title: string;
  value: string;
  onChange: (e: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  title,
  options,
  value,
  onChange,
}) => {
  return (
    <>
      <label className="text-xs text-gray-600">{title}</label>
      <select
        className="block py-2 rounded px-0 w-full text-sm text-gray-500 bg-transparent border-2 border-gray-400 "
        onChange={(e) => onChange(e.target.value)}
      >
        <option value={value}>Choose a value</option>
        {options.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};
export default SelectInput;
