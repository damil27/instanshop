import Input from '@/components/ui/input';
// import SectionHeader from '../../section-header';
import Accordion from '@/components/accordion';

const Shipping = () => {
  return (
    <>
      <hr className="h-[0.5px] border-[#00000033]" />
      <Accordion header="Shipping">
        <div className="">
          <label
            htmlFor="self"
            className="flex items-center justify-between px-2 pb-3"
          >
            <span className="text-sm leading-[1.139375rem] text-[#00000099]">
              Self shipping
            </span>
            <Input
              id="self"
              type="checkbox"
              className="w-max accent-[#8A226F]"
            />
          </label>
          <label
            htmlFor="instastop"
            className="flex items-center justify-between px-2 py-3"
          >
            <span className="text-sm leading-[1.139375rem] text-[#00000099]">
              InstaShop shipping
            </span>
            <Input
              id="instastop"
              type="checkbox"
              className="w-max accent-[#8A226F]"
            />
          </label>
          <div className="relative">
            <Input placeholder="Inventory stocks" defaultValue={'50'} />
            <span className="absolute left-[18px] top-2 text-[10px] leading-[13.02px] text-[#00000099]">
              Inventory stocks
            </span>
          </div>
        </div>
        <div className="py-[6px]"></div>
      </Accordion>
    </>
  );
};

export default Shipping;
