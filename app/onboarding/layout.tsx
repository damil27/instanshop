'use client';

import Nav from '@/components/nav';
import { usePageStore } from '@/store/onboarding-control';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { page } = usePageStore();

  return (
    <section className="">
      <div>
        <header className="flex flex-col gap-5 px-4">
          <Nav href="/" title="Get Started" />
          <div className="flex w-full items-center gap-2">
            <div
              className={`relative h-1 basis-full rounded-2xl bg-[#0000001A] before:absolute before:left-0 before:top-0 before:h-full before:rounded-2xl before:bg-[#8A226F] before:transition-all before:duration-1000 ${page >= 0 ? 'before:w-full' : 'before:w-[0%]'}`}
            ></div>
            <div
              className={`relative h-1 basis-full rounded-2xl bg-[#0000001A] before:absolute before:left-0 before:top-0 before:h-full before:rounded-2xl before:bg-[#8A226F] before:transition-all before:duration-1000 ${page >= 1 ? 'before:w-full' : 'before:w-[0%]'}`}
            ></div>
            <div
              className={`relative h-1 basis-full rounded-2xl bg-[#0000001A] before:absolute before:left-0 before:top-0 before:h-full before:rounded-2xl before:bg-[#8A226F] before:transition-all before:duration-1000 ${page >= 2 ? 'before:w-full' : 'before:w-[0%]'}`}
            ></div>
          </div>
        </header>
        <div className="py-[10px]"></div>
        {children}
      </div>
    </section>
  );
}
