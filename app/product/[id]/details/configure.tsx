import AddPhotoAltIcon from '@/components/jsx-icons/add-photo-alt-icon';
// import SectionHeader from '../../section-header';
import EllipseIcon from '@/components/jsx-icons/ellipse-icon';
import MoreHoriIcon from '@/components/jsx-icons/more-hori-icon';
import Input from '@/components/ui/input';
import Accordion from '@/components/accordion';

const Configure = () => {
  return (
    <>
      <hr className="h-[0.5px] border-[#00000033]" />
      <Accordion header="Configure variant prices and stocks">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <ConfigItem />
            <div className="flex gap-2">
              <div className="relative basis-full">
                <Input defaultValue={'20'} className="px-2 py-[9.5px]" />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-medium leading-[1.139375rem] text-[#000000E5]">
                  ₦
                </span>
              </div>
              <div className="relative basis-full">
                <Input defaultValue={'20'} className="px-2 py-[9.5px]" />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-medium leading-[1.139375rem] text-[#000000E5]">
                  Units
                </span>
              </div>
            </div>
          </div>
          <ConfigItem />
          <ConfigItem />
          <ConfigItem />
          <ConfigItem />
        </div>
      </Accordion>
    </>
  );
};

export default Configure;

const ConfigItem = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-max rounded-[5.33px] border-[0.67px] border-[#0000000D] bg-[#0000001A] p-[10px]">
          <AddPhotoAltIcon />
        </div>
        <div className="flex flex-col gap-1 text-xs leading-[15.62px] text-[#00000099]">
          <p className="text-sm leading-[1.139375rem] text-[#000000E5]">
            Red - L - leather
          </p>
          <div className="flex items-center gap-2">
            <p>₦20</p>
            <EllipseIcon />
            <p>20X</p>
          </div>
        </div>
      </div>
      <MoreHoriIcon />
    </div>
  );
};
