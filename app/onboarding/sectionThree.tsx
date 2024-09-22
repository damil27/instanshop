import PhotoIcon from '@/components/jsx-icons/photo-icon';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

import Image from 'next/image';
import avatar from '@/public/images/avatar.png';
import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { FormSchema } from './formSchema';
import { useRouter } from 'next/navigation';
type FormData = z.infer<typeof FormSchema>;

interface SectionThreeProps {
  form: UseFormReturn<FormData>;
}

export const SectionThree = ({ form }: SectionThreeProps) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = form;
  const router = useRouter();

  const handleClick = async () => {
    const isValid = await trigger([
      'storeName',
      'storeTag',
      'storePhone',
      'storeEmail',
      'category',
    ]);
    if (isValid) {
       document.cookie = `isAuthenticated=true; path=/;`;
      router.push('/product/create');
    }
  };

  return (
 <>
      <div className="flex flex-col gap-4 px-5">
        <label htmlFor="picture">
          <div className="flex w-full flex-col items-center justify-between gap-3 rounded-xl border-[0.5px] border-[#00000033] py-4">
            <Input id="picture" type="file" className="hidden" />
            <div className="relative h-20 w-20">
              <Image src={avatar} alt="avatar" fill />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <PhotoIcon />
              </div>
            </div>
            <span className="block text-sm leading-[15.62px] text-[#00000066]">
              Upload store logo
            </span>
          </div>
        </label>
        <div>
          <Input placeholder="Store name" {...register('storeName')} />
          {errors.storeName && (
            <p className="text-sm text-red-500">{errors.storeName.message}</p>
          )}
        </div>
        <div>
          <Input placeholder="Store tag name" {...register('storeTag')} />
          {errors.storeTag && (
            <p className="text-sm text-red-500">{errors.storeTag.message}</p>
          )}
        </div>
        <div>
          <Input placeholder="Store phone number" {...register('storePhone')} />
          {errors.storePhone && (
            <p className="text-sm text-red-500">{errors.storePhone.message}</p>
          )}
        </div>
        <div>
          <Input placeholder="Store email" {...register('storeEmail')} />
          {errors.storeEmail && (
            <p className="text-sm text-red-500">{errors.storeEmail.message}</p>
          )}
        </div>
        <div>
          <Input placeholder="Category" {...register('category')} />
          {errors.category && (
            <p className="text-sm text-red-500">{errors.category.message}</p>
          )}
        </div>
      </div>
      <footer className="border-t border-[#00000033] px-4 pt-4">
        <Button onClick={handleClick}>Continue</Button>
      </footer>
 </>
   
  );
};
