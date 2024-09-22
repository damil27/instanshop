import Input from "@/components/ui/input";
// import SectionHeader from "../../section-header";
import CloseIcon from "@/components/jsx-icons/close-icon";
import Accordion from "@/components/accordion";

const BasicDetails = () => {
    return (
      <>
        <Accordion header="Basic details" >
        <div className="flex flex-col gap-[10px] ">
          <div className="relative">
            <Input placeholder="Product Title" defaultValue={'Placeholder value'} />
            <span className="absolute left-[18px] top-2 text-[10px] leading-[13.02px] text-[#00000099]">
              Product Title
            </span>
          </div>
          <div className="relative">
            <textarea
            defaultValue={'Placeholder value'}
              className="w-full resize-none rounded-xl border-[0.5px] border-[#00000033] px-4 py-5 text-sm font-medium leading-[1.139375rem] text-[#000000E5] placeholder:text-sm placeholder:leading-[1.139375rem] placeholder:text-[#00000099]"
              placeholder="Product description"
            />
            <span className="absolute left-[18px] top-2 text-[10px] leading-[13.02px] text-[#00000099]">
              Product description
            </span>
          </div>
          <div className="flex w-full items-center gap-2">
            <div className="relative w-full">
              <Input placeholder="Price" defaultValue={'Placeholder value'} />
              <span className="absolute left-[18px] top-2 text-[10px] leading-[13.02px] text-[#00000099]">
                Price
              </span>
            </div>
            <div className="relative w-full">
              <Input placeholder="Old price" defaultValue={'Placeholder value'} />
              <span className="absolute left-[18px] top-2 text-[10px] leading-[13.02px] text-[#00000099]">
                Old price
              </span>
            </div>
          </div>
          <div className="relative rounded-xl border-[0.5px] border-[#00000033] p-4">
            <span className="absolute left-[18px] top-2 text-[10px] leading-[13.02px] text-[#00000099]">
              Product collection
            </span>
            <div className="py-1"></div>
            <div className="flex gap-1 text-sm leading-[15.62px] text-[#000000E5]">
              <div className="flex items-center gap-[6px] rounded-[5.625rem] bg-[#00000008] py-[3px] pl-[10px] pr-[4px]">
                <p>Collection</p>
                <CloseIcon />
              </div>
              <div className="flex items-center gap-[6px] rounded-[5.625rem] bg-[#00000008] py-[3px] pl-[10px] pr-[4px]">
                <p>Interests</p>
                <CloseIcon />
              </div>
            </div>
            <div className="py-[5px]"></div>
            <span className="text-sm font-medium leading-[15.62px] text-[#00000099]">
              Search or create collection
            </span>
          </div>
          <div className="relative">
            <Input placeholder="Inventory stocks" defaultValue={'Placeholder value'} />
            <span className="absolute left-[18px] top-2 text-[10px] leading-[13.02px] text-[#00000099]">
              Inventory stocks
            </span>
          </div>
        </div>
        <div className="py-1"></div>
        </Accordion>
      </>
    );
  };

  export default BasicDetails;