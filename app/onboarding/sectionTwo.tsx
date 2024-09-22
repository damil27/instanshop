"use client";
import GoogleIcon from "@/components/jsx-icons/google-icon";
import InstagramIcon from "@/components/jsx-icons/Instagram-icon";
import TiktokIcon from "@/components/jsx-icons/tiktok-icon";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { usePageStore } from "@/store/onboarding-control";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { FormSchema } from "./formSchema";

type FormData = z.infer<typeof FormSchema>;

interface SectionTwoProps {
  form: UseFormReturn<FormData>;
}

export const SectionTwo = ({ form }: SectionTwoProps) => {
  const { setPage, page } = usePageStore();
  const {
    register,
    formState: { errors },
    trigger,
  } = form;

  const handleClick = async () => {
    const isValid = await trigger(["fullName", "userName", "phone", "email"]);
    if (isValid) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 px-5">
        <div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-medium leading-[1.65rem]">
              Complete profile setup
            </h1>
            <p className="text-sm leading-[1.139375rem] text-[#00000099]">
              Connect your socials for quick setup
            </p>
          </div>
          <div className="py-2"></div>
          <div className="flex gap-2">
            <div className="flex basis-full items-center justify-center rounded-xl bg-[#00000008] py-[14px]">
              <InstagramIcon />
            </div>
            <div className="flex basis-full items-center justify-center rounded-xl bg-[#00000008] py-[14px]">
              <TiktokIcon />
            </div>
            <div className="flex basis-full items-center justify-center rounded-xl bg-[#00000008] py-[14px]">
              <GoogleIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm leading-[1.139375rem]">Or enter manually</p>
          <div className="flex flex-col gap-3">
            <div>
              <Input placeholder="Full name" {...register("fullName")} />
              {errors.fullName && (
                <p className="text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <Input placeholder="Username" {...register("userName")} />
              {errors.userName && (
                <p className="text-sm text-red-500">
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div>
              <Input
                placeholder="Phone number"
                type="number"
                {...register("phone", { valueAsNumber: true })}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <Input placeholder="Email" {...register("email")} />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t border-[#00000033] px-4 pt-4">
        <Button onClick={handleClick}>Continue</Button>
      </footer>
    </>
  );
};
