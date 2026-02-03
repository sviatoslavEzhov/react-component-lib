import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

const TYPE_TEXT = 'text' as const;
const TYPE_PASSWORD = 'password' as const;

const Input: React.FC<InputProps> = ({ clearable, ...props }) => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  const isPasswordType = props.type === TYPE_PASSWORD;
  const computedType = isPasswordType ? (show ? TYPE_TEXT : TYPE_PASSWORD) : props.type;

  const togglePassword = () => setShow((prevValue) => !prevValue);
  const clearInput = () => setValue('');

  return (
    <div className="relative w-full">
      <input
        {...props}
        type={computedType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full rounded border py-2 pr-12 pl-3 outline-none focus:ring-2 focus:ring-blue-500`}
      />

      <div className="absolute top-1/2 right-2 flex -translate-y-1/2">
        {isPasswordType && (
          <button
            type="button"
            onClick={togglePassword}
            className="cursor-pointer p-1 text-gray-500 transition-colors hover:text-gray-700"
          >
            {show ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        )}

        {clearable && value && (
          <button
            type="button"
            onClick={clearInput}
            className="cursor-pointer p-1 text-gray-500 transition-colors hover:text-gray-700"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
