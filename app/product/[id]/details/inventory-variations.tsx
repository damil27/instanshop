import Input from '@/components/ui/input';
// import SectionHeader from '../../section-header';
import CloseIcon from '@/components/jsx-icons/close-icon';
import MoreHoriIcon from '@/components/jsx-icons/more-hori-icon';
import AddIcon from '@/components/jsx-icons/add-icon';
import Accordion from '@/components/accordion';

// export interface itemsData{
//   header: string;
//   items: string[];
// }
const InventoryVariations = () => {
  //   const itemsData : itemsData[]= [
  // {header:"Color", items:["Red", "White", "Black"] },
  // {header:"Size", items:["Large", "Small", "XL"] },
  // {header:"Size", items:["Large", "Small", "XL"] }

  // ]
  return (
    <>
      <hr className="h-[0.5px] border-[#00000033]" />
      <Accordion header="Inventory variations">
        <div className="flex flex-col gap-4">
          <label htmlFor="inventory" className="flex gap-2 px-2">
            <Input
              id="inventory"
              type="checkbox"
              className="w-max accent-[#8A226F]"
            />
            <span className="text-sm leading-[1.139375rem] text-[#00000099]">
              This product is variable; has different colors, sizes, weight,
              materials, etc.
            </span>
          </label>
          <div className="flex flex-col gap-[10px]">
            <Options />
            <Options />
            <Options />
          </div>
          <div className="flex items-center justify-center gap-[6px] rounded-[5.625rem] bg-[#00000008] py-[11px]">
            <AddIcon />
            <p className="text-[1.139375rem] text-sm font-medium text-[#8A226F]">
              Add new option
            </p>
          </div>
        </div>
      </Accordion>
    </>
  );
};

export default InventoryVariations;

const Options = () => {
  return (
    <div className="relative rounded-xl border-[0.5px] border-[#00000033] py-2">
      <div className="border-b border-[#00000033] pb-1">
        <div className="flex items-center justify-between px-4">
          <div>
            <p className="text-[10px] leading-[13.02px] text-[#00000099]">
              Option 1
            </p>
            <p className="text-sm font-medium leading-[1.139375rem] text-[#000000E5]">
              Color
            </p>
          </div>
          <MoreHoriIcon />
        </div>
      </div>
      <div className="py-1"></div>
      <div className="flex gap-1 px-4 text-sm leading-[15.62px] text-[#000000E5]">
        <div className="flex items-center gap-[6px] rounded-[5.625rem] bg-[#00000008] py-[3px] pl-[10px] pr-[4px]">
          <p>Red</p>
          <CloseIcon />
        </div>
        <div className="flex items-center gap-[6px] rounded-[5.625rem] bg-[#00000008] py-[3px] pl-[10px] pr-[4px]">
          <p>White</p>
          <CloseIcon />
        </div>
        <div className="flex items-center gap-[6px] rounded-[5.625rem] bg-[#00000008] py-[3px] pl-[10px] pr-[4px]">
          <p>Black</p>
          <CloseIcon />
        </div>
      </div>
      <div className="py-[5px]"></div>
      <span className="px-4 text-sm font-medium leading-[15.62px] text-[#00000099]">
        Enter values
      </span>
    </div>
  );
};
