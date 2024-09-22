import React from 'react';
import productImage from '@/public/images/product.png';
import vendorAvatar from '@/public/images/vendorAvatar.png';
import Image from 'next/image';
import ShareIcon from '@/components/jsx-icons/share-icon';
import LoveIcon from '@/components/jsx-icons/love-icon';
import HalfStar from '@/components/jsx-icons/half-star';
import FullStarIcon from '@/components/jsx-icons/full-star';
import Accordion from '@/components/accordion';
import BlackStar from '@/components/jsx-icons/black-star';
import PeopleIcon from '@/components/jsx-icons/people-icon';
import Button from '@/components/ui/button';
const PreviewPage = () => {
  return (
    <section>
      <ProducImages />
      <SelectVariants />
      <ProductDescription />
      <AboutVendor />
      <footer className="mb-6">
        <hr className="mb-3 mt-6 h-[0.5px] border-[#00000033]" />

        <Button role="link">Publish</Button>
      </footer>
    </section>
  );
};

export default PreviewPage;

const ProducImages = () => {
  return (
    <div className="w-full">
      <div className="w-full px-4">
        <Image
          alt="product image"
          src={productImage}
          height={200}
          className="w-full"
        />
      </div>
      <div className="sm:-px-2 mt-5 flex items-center justify-between px-4">
        <p>
          Gucci bag – the epitome of luxury <br />
          and sophistication
        </p>
        <div className="flex items-center justify-center gap-2">
          <ShareIcon /> <LoveIcon />
        </div>
      </div>
      <div className="flex items-center justify-between px-4 sm:px-2">
        <div className="flex items-center gap-2">
          <p className="text-[#3B3B3B]">₦18.0</p>
          <p className="text-[12px] text-[#ACACAC]">₦28.0</p>
          <p className="rounded-full bg-[#8A226F] px-2 py-1 text-[11px] text-white">
            25% OFF
          </p>
        </div>
        <div className="mt-5 flex items-center gap-2">
          <div className="flex items-center gap-2">
            {' '}
            {[...Array(4)].map((_, idx) => (
              <FullStarIcon key={idx} />
            ))}{' '}
            <HalfStar />{' '}
            <span className="text-[14px] text-[#ACACAC]">(5 sold)</span>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectVariants = () => {
  return (
    <div className="sm:px-2">
      <hr className="mb-6 mt-3 h-[0.5px] border-[#00000033]" />
      <div className="px-4">
        <h2 className="mb-5 text-sm font-medium leading-[1.139375rem] text-black">
          Select Variants
        </h2>
        <div>
          <div className="mb-5 gap-2 py-2">
            <p className="text-sm font-medium leading-[1.139375rem] text-[#ACACAC]">
              Size: <span> SMALL</span>
            </p>
            <div className="mt-3 flex gap-2">
              <div className="rounded-full border-2 bg-black px-3 py-1 text-center text-[12px] text-white">
                Filter
              </div>
              {[...Array(5)].map((_, idx) => (
                <div
                  key={idx}
                  className="rounded-full border-2 bg-[#f7f7f7] px-3 py-1 text-center text-[12px] text-black"
                >
                  Filter
                </div>
              ))}
            </div>
          </div>
          <div className="mb-5 gap-2">
            <p className="text-sm font-medium leading-[1.139375rem] text-[#ACACAC]">
              Color: <span> White</span>
            </p>
            <div className="mt-3 flex gap-2">
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="rounded-full border-2 bg-[#f7f7f7] px-3 py-1 text-center text-[12px] text-black"
                >
                  Filter
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDescription = () => {
  return (
    <div>
      <hr className="mb-6 mt-3 h-[0.5px] border-[#00000033]" />
      <Accordion header="Product description">
        <div className="flex flex-col gap-3">
          <p>
            Wholesale and drop shipping are both welcomed. For wholesale,we will
            offer discount or free express shipping which only takes 3-7 days to
            arrive...
          </p>
          <p className="font-bold text-[#8A226F]">Read More</p>
        </div>
      </Accordion>
    </div>
  );
};

const AboutVendor = () => {
  return (
    <div>
      <hr className="mb-6 mt-3 h-[0.5px] border-[#00000033]" />
      <Accordion header="About this vendor">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm leading-[1.139375rem] text-[#000000E5]">
            <div className="relative h-[3.75rem] w-[3.75rem]">
              <Image alt="logo" src={vendorAvatar} fill />
            </div>
            <div>
              <p className="text-black">Gucci Store</p>
              <div className="flex items-center gap-1">
                <p>Fashion</p>{' '}
                <p className="h-2 w-2 rounded-full bg-[#666666]" />
                <BlackStar /> <p>5.4</p>{' '}
                <p className="h-2 w-2 rounded-full bg-[#666666]" />{' '}
                <PeopleIcon /> <p>100K</p>
              </div>
            </div>
          </div>
          <div className="font-bold text-[#8A226F]">Follow</div>
        </div>
        <div>
          <p className="mb-4">
            Vendor description: You can track your parcel on the following
            website using your tracking number: www.17trac
          </p>
          <div className="mb-4 flex items-center gap-4">
            <p>Quality goods</p>
            <p>Nice designs</p>
            <p>Quality goods</p>
          </div>
          <div className="flex items-center gap-4">
            <p>Nice designs</p>
            <p>Quality goods</p>
            <p>Nice designs</p>
          </div>
        </div>
      </Accordion>
    </div>
  );
};
