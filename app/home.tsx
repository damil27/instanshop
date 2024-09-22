"use client";

import CheckCircleIcon from "@/components/jsx-icons/check-circle-icon";
import Button from "@/components/ui/button";
import Image from "next/image";
import sale from "@/public/images/sale-illustration.png";
import { useRouter } from "next/navigation";
import { usePageStore } from "@/store/onboarding-control";
import { useEffect } from "react";
import { getCookie } from "@/lib/getCookies";

const HomePage = () => {
  const router = useRouter();
  const { setPage } = usePageStore();

  useEffect(() => {
    const isAuthenticated = getCookie("isAuthenticated");
    if (isAuthenticated === "true") {
      document.cookie = `isAuthenticated=false; path=/;`;
    }
    setPage(0);
  }, []);

  return (
    <section className="flex min-h-[calc(100vh-104px)]   flex-col justify-between px-8">
      <div className="">
        <div className="pb-6 pt-3">
          <Image src={sale} alt="sale" />
        </div>
        <div className="py-3"></div>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="text-sm leading-[1.139375rem]">
            The safest platfrom to shop from social media vendors
          </p>
        </div>
        <div className="py-3"></div>
        <ul className="flex flex-col gap-3 rounded-xl border-[0.5px] border-[#8A226F] bg-[#FFEAFA] px-4 py-3">
          <li className="flex items-center gap-2 text-sm font-medium leading-[1.139375rem]">
            <CheckCircleIcon />
            <p>Reach Millions of Shoppers</p>
          </li>
          <li className="flex items-center gap-2 text-sm font-medium leading-[1.139375rem]">
            <CheckCircleIcon />
            <p>Easy Product Listing</p>
          </li>
          <li className="flex items-center gap-2 text-sm font-medium leading-[1.139375rem]">
            <CheckCircleIcon />
            <p>Secure and Fast Payments</p>
          </li>
          <li className="flex items-center gap-2 text-sm font-medium leading-[1.139375rem]">
            <CheckCircleIcon />
            <p>Boost Your Visibility</p>
          </li>
        </ul>
      </div>
      <footer>
        <Button role="link" onClick={() => router.push("/onboarding")}>
          Get started
        </Button>
      </footer>
    </section>
  );
};

export default HomePage;
