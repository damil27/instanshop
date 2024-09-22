'use client';

import DraftCheckIcon from '@/components/jsx-icons/draft-check-icon';
import MoreIcon from '@/components/jsx-icons/more-icon';
import Nav from '@/components/nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
   const showDraftSection =
     pathname.includes("create") || pathname.includes("details");

  return (
    <section className="flex min-h-[calc(100vh-40px)] flex-col justify-between">
      <div>
        <header className="px-4">
          <div className="flex items-center justify-between">
            <Nav
              href="/"
              title={
                pathname.includes("create")
                  ? "Create a product"
                  : pathname.includes("details")
                    ? "Product details"
                    : "Product preview"
              }
            />
            <div className="py-2">
              <MoreIcon />
            </div>
          </div>
          {showDraftSection && (
            <div className="flex justify-between py-2">
              <div className="flex items-center rounded-[5.625rem] border border-[#0000001A] px-1 pt-0.5">
                <p className="px-[6px] py-[1px] text-sm leading-[15.62px] text-[#00000099]">
                  Draft
                </p>
                <DraftCheckIcon />
              </div>
              <Link
                href={"#"}
                className="text-sm font-medium leading-[15.62px] text-[#8A226F]"
              >
                Preview product
              </Link>
            </div>
          )}
        </header>
        {showDraftSection &&
        <hr className="h-[0.5px] border-[#00000033]" />
         }
        <div className="py-[8px]"></div>
        {children}
      </div>
    </section>
  );
}
