'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { usePageStore } from '@/store/onboarding-control';
import { UseFormReturn } from 'react-hook-form';
import { FormSchema } from './formSchema';
import { z } from 'zod';

type FormData = z.infer<typeof FormSchema>;

interface SectionOneProps {
  form: UseFormReturn<FormData>;
}

export const SectionOne = ({ form }: SectionOneProps) => {
  const { setPage, page } = usePageStore();

  const {
    register,
    formState: { errors },
    trigger,
  } = form;

  const handleClick = async () => {
    const isValid = await trigger(['email']); // Validate the email field
      if (isValid) {
        console.log(isValid)
      setPage(page + 1); // Only set the page if validation passes
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 px-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-medium leading-[1.65rem]">
            Enter your phone number or email to get started
          </h1>
          <p className="text-sm leading-[1.139375rem] text-[#00000099]">
            We will send you a verification code for confirmation
          </p>
        </div>
        <Input
          placeholder="Enter phone number or email"
          {...register('email')} // Register the 'email' field from formSchema
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <footer className="border-t border-[#00000033] px-4 pt-4">
        <Button onClick={handleClick}>Continue</Button>
      </footer>
    </>
  );
};
