import Accordion from '@/components/accordion';
import Input from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { FormSchema } from './formSchema';
import { z } from 'zod';

type FormData = z.infer<typeof FormSchema>;

interface InventoryVariationsProps {
  form: UseFormReturn<FormData>;
}

const InventoryVariations = ({ form }: InventoryVariationsProps) => {
  const { register } = form;

  return (
    <Accordion header="Inventory variations">
      <div>
        <label htmlFor="inventory" className="flex gap-2">
          <Input
            id="inventory"
            type="checkbox"
            className="w-max accent-[#8A226F]"
            {...register('inventoryVariation')}
          />
          <span className="text-sm leading-[1.139375rem] text-[#00000099]">
            This product is variable; has different colors, sizes, weight,
            materials, etc.
          </span>
        </label>
      </div>
    </Accordion>
  );
};

export default InventoryVariations;
