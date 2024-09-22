'use client';

import { usePageStore } from '@/store/onboarding-control';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SectionOne } from './sectionOne';
import { SectionTwo } from './sectionTwo';
import { SectionThree } from './sectionThree';
import { FormSchema } from './formSchema';
import { z } from 'zod';

type FormData = z.infer<typeof FormSchema>;

const Sections = () => {
  const { page } = usePageStore();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: '',
      userName: '',
      phone: '',
      email: '',
      storeName: '',
      storeTag: '',
      storePhone: '',
      storeEmail: '',
      category: '',
    },
  });

  const {
    handleSubmit,
    
  } = form;

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-h-[calc(100vh-104px)] flex-col justify-between"
    >
      {page === 0 && <SectionOne form={form} />}
      {page === 1 && (
        <SectionTwo form={form} />
      )}
      {page === 2 && (
        <SectionThree form={form} />
      )}
    
    </form>
  );
};

export default Sections;
