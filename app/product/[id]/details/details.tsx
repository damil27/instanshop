"use client"
import Button from '@/components/ui/button';
import BasicDetails from './basic-details';
import Configure from './configure';
import InventoryVariations from './inventory-variations';
import ProductImages from './product-images';
import Shipping from './shipping';
import { useRouter } from 'next/navigation';
const DetailsPage = () => {
const router = useRouter()

  return (
    <section className="flex flex-col gap-3">
      <BasicDetails />
      <ProductImages />
      <InventoryVariations />
      <Configure />
      <Shipping />
      <footer className="flex gap-[10px] border-t border-[#00000033] px-4 pt-4">
        <Button variant="secondary">Cancel</Button>
        <Button onClick={() => router.push("/product/preview")}>Save</Button>
      </footer>
    </section>
  );
};

export default DetailsPage;
