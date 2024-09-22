import Input from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { FormSchema } from './formSchema';
import Accordion from '@/components/accordion';
import { z } from 'zod';

type FormData = z.infer<typeof FormSchema>;
interface BasicDetailsProps {
  form: UseFormReturn<FormData>;
}

const BasicDetails = ({ form }: BasicDetailsProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <Accordion header="Basic details">
      <div className="flex flex-col gap-[10px]">
        <div>
          <Input placeholder="Product Title" {...register('productTitle')} />
          {errors.productTitle && (
            <p className="text-sm text-red-500">
              {errors.productTitle.message}
            </p>
          )}
        </div>
        <div>
          <textarea
            className="w-full resize-none rounded-xl border-[0.5px] border-[#00000033] px-4 py-5 text-sm leading-[1.139375rem] text-[#00000099] placeholder:text-sm placeholder:leading-[1.139375rem]"
            placeholder="Product description"
            {...register('productDescription')}
          />
          {errors.productDescription && (
            <p className="text-sm text-red-500">
              {errors.productDescription.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Input
              placeholder="Price"
              type="number"
              {...register('price', { valueAsNumber: true })}
            />
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price.message}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="Old price"
              type="number"
              {...register('oldPrice', { valueAsNumber: true })}
            />
            {errors.oldPrice && (
              <p className="text-sm text-red-500">{errors.oldPrice.message}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            className="w-full resize-none rounded-xl border-[0.5px] border-[#00000033] px-4 py-5 text-sm leading-[1.139375rem] text-[#00000099] placeholder:text-sm placeholder:leading-[1.139375rem]"
            placeholder="Product collection"
            {...register('productCollection')}
          />
          {errors.productCollection && (
            <p className="text-sm text-red-500">
              {errors.productCollection.message}
            </p>
          )}
        </div>
        <div>
          <Input
            placeholder="Inventory stocks"
            type="number"
            {...register('inventoryStocks', { valueAsNumber: true })}
          />
          {errors.inventoryStocks && (
            <p className="text-sm text-red-500">
              {errors.inventoryStocks.message}
            </p>
          )}
        </div>
      </div>
      <div className="py-1"></div>
    </Accordion>
  );
};

export default BasicDetails;
