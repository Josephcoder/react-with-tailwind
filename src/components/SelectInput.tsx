import React from "react";

interface SelectInputProps {
  options: {
    title: string;
    value: string;
  }[];
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option selected>Choose a value</option>
        {options.map(({ title, value }, i) => (
          <option key={i} value={value}>
            {title}
          </option>
        ))}
      </select>
    </>
  );
};
export default SelectInput;
