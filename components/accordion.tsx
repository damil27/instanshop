'use client';

import { ReactNode, useState, useRef } from 'react';
import ChevronDownIcon from '@/components/jsx-icons/chevron-down-icon';
import ChevronUpIcon from './jsx-icons/chevron-up-icon';

interface HeaderProps {
  header?: string;
  children: ReactNode;
}

const Accordion = ({ header, children }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null); // Reference to the content div

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className="flex cursor-pointer justify-between px-4 pb-2"
        onClick={toggleAccordion}
      >
        <p className="text-sm font-medium leading-[1.139375rem] text-black">
          {header}
        </p>
        <button>{isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}</button>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.4s ease',
        }}
      >
        <div className="px-4 pt-2">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
