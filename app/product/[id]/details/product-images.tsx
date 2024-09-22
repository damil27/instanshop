'use client';

import Input from '@/components/ui/input';
// import SectionHeader from '../../section-header';
import AltPhotoIcon from '@/components/jsx-icons/alt-photo-icon';
import Image from 'next/image';
import logo from '@/public/images/logo-img.png';
import MoreHoriIcon from '@/components/jsx-icons/more-hori-icon';
import { useState } from 'react';
import Accordion from '@/components/accordion';

const ProductImages = () => {
  return (
    <>
      <hr className="h-[0.5px] border-[#00000033]" />
      <Accordion header="Product images">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5">
            {[...Array(4)].map((_, idx) => (
              <ProductItems key={idx} id={`${idx +1}`} />
            )) }
            {/* <ProductItems id="1" />
            <ProductItems id="2" />
            <ProductItems id="3" />
            <ProductItems id="4" /> */}
          </div>
          <label htmlFor="picture">
            <Input id="picture" type="file" className="hidden" />
            <div className="px-2">
              <div className="flex items-center justify-center gap-[6px] rounded-[5.625rem] bg-[#00000008] py-[10px]">
                <span className="text-sm font-medium leading-[1.139375rem] text-[#8A226F]">
                  Add image
                </span>
                <AltPhotoIcon />
              </div>
            </div>
          </label>
        </div>
        <div className="py-1"></div>
      </Accordion>
    </>
  );
};

export default ProductImages;

const ProductItems = ({ id }: { id: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm leading-[1.139375rem] text-[#000000E5]">
        <div className="relative h-[3.75rem] w-[3.75rem]">
          <Image alt="logo" src={logo} fill />
        </div>
        <p>logo.Img</p>
      </div>
      <div className="flex items-center">
        <MoreHoriIcon />
        <div className="p-[10px]">
          <label htmlFor={`check-${id}`}>
            <Input
              id={`check-${id}`}
              type="checkbox"
              className="hidden"
              checked={checked}
              onChange={e => setChecked(e.target.checked)}
            />
            <div
              className={`relative h-5 w-[2.03125rem] rounded-[7.8125rem] bg-[#8A226F] before:absolute before:right-[2.5px] before:top-[2.5px] before:h-[15px] before:w-[15px] before:rounded-full before:bg-white before:transition-all ${checked && 'before:-translate-x-3'}`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
};
