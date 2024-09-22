import ChevronDownIcon from '@/components/jsx-icons/chevron-down-icon';

const SectionHeader = ({ header }: { header: string }) => {
  return (
    <div className="flex justify-between px-4 pb-2">
      <p className="text-sm font-medium leading-[1.139375rem] text-black">
        {header}
      </p>
      <ChevronDownIcon />
    </div>
  );
};

export default SectionHeader;
