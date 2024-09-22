import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const Button = ({
  children,
  className,
  onClick,
  variant = 'primary',
  type = 'button',
  role = 'button',
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | undefined;
  role?: string | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      role={role}
      className={cn(
        `w-full rounded-[5.625rem] border py-[10px] text-sm font-medium leading-[1.139375rem] tracking-[0.005em] ${variant === 'secondary' ? 'border-[#8A226F] bg-white text-[#8A226F] hover:bg-white/80' : 'border-transparent bg-[#8A226F] text-white shadow-[4px_8px_24px_0px_#FE2C5533] hover:bg-[#8A226F]/80'}`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
