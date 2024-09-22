"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema } from './formSchema'; // Adjust the path accordingly
import { z } from 'zod';
import BasicDetails from './BasicDetails';
import ProductImages from './ProductImages';
import InventoryVariations from './InventoryVariations';
import Shipping from './Shipping';
import Button from '@/components/ui/button';
import { useRouter } from 'next/navigation';


type FormData = z.infer<typeof FormSchema>;

const Sections = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });
  const router = useRouter()

  const { handleSubmit } = form;

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    router.push('/product/1/details');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <BasicDetails form={form} />
      <ProductImages form={form} />
      <InventoryVariations form={form} />
      <Shipping form={form} />
      <footer className="flex gap-[10px] border-t border-[#00000033] px-4 pt-4">
        <Button variant="secondary" type="button">
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </footer>
    </form>
  );
};

export default Sections;





