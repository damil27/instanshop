import { cn } from '@/lib/utils';
import { ChangeEvent, forwardRef } from 'react';

const Input = forwardRef<
  HTMLInputElement,
  {
    className?: string;
    placeholder?: string;
    type?: string;
    id?: string;
    defaultValue?: string | number;
    value?: string | number;
    checked?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  }
>(
  (
    {
      className,
      placeholder,
      type = 'text',
      id,
      value,
      onChange,
      checked,
      ...rest
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        className={cn(
          `w-full rounded-xl border-[0.5px] border-[#00000033] px-4 py-5 text-sm font-medium leading-[1.139375rem] text-[#000000E5] placeholder:text-sm placeholder:leading-[1.139375rem] placeholder:text-[#00000099]`,
          className,
        )}
        type={type}
        id={id}
        value={value}
        checked={checked}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input'; // Required for display name in case of forwardRef

export default Input;
