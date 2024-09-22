'use client';
import Input from '@/components/ui/input';
import AltPhotoIcon from '@/components/jsx-icons/alt-photo-icon';
import { UseFormReturn } from 'react-hook-form';
import Accordion from '@/components/accordion';
import { FormSchema } from './formSchema';
import { z } from 'zod';

type FormData = z.infer<typeof FormSchema>;
interface ProductImagesProps {
  form: UseFormReturn<FormData>;
}

const ProductImages = ({ form }: ProductImagesProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <hr className="h-[0.5px] border-[#00000033]" />
      <Accordion header="Product images">
        <div>
          <label htmlFor="picture">
            <Input
              id="picture"
              type="file"
              className="hidden"
              {...register('picture')}
            />
            <div className="px-2">
              <div className="flex items-center justify-center gap-[6px] rounded-[5.625rem] bg-[#00000008] py-[10px]">
                <span className="text-sm font-medium leading-[1.139375rem] text-[#8A226F]">
                  Add image
                </span>
                <AltPhotoIcon />
              </div>
            </div>
          </label>
          {errors.picture && (
            <p className="text-sm text-red-500">
              {errors.picture.message as string}
            </p>
          )}
        </div>
        <div className="py-1"></div>
      </Accordion>
    </>
  );
};

export default ProductImages;
