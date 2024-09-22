import Accordion from '@/components/accordion';
import Input from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { FormSchema } from './formSchema';
import { z } from 'zod';

type FormData = z.infer<typeof FormSchema>;

interface ShippingProps {
  form: UseFormReturn<FormData>;
}

const Shipping = ({ form }: ShippingProps) => {
  const { register } = form;

  return (
    <>
      <hr className="h-[0.5px] border-[#00000033]" />
      <Accordion header="Shipping">
        <div>
          <label
            htmlFor="self"
            className="flex items-center justify-between pb-3"
          >
            <span className="text-sm leading-[1.139375rem] text-[#00000099]">
              Self shipping
            </span>
            <Input
              id="self"
              type="checkbox"
              className="w-max accent-[#8A226F]"
              {...register('selfShipping')}
            />
          </label>
          <label
            htmlFor="instastop"
            className="flex items-center justify-between py-3"
          >
            <span className="text-sm leading-[1.139375rem] text-[#00000099]">
              InstaShop shipping
            </span>
            <Input
              id="instastop"
              type="checkbox"
              className="w-max accent-[#8A226F]"
              {...register('instaShopShipping')}
            />
          </label>
        </div>
        <div className="py-[6px]"></div>
      </Accordion>
    </>
  );
};

export default Shipping;
