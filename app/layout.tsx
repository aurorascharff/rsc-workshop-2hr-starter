import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import ContactList from '@/components/ContactList';
import Search from '@/components/Search';
import Button from '@/components/ui/Button';
import Logo from '@/public/next-js.svg';
import { routes } from '@/validations/routeSchema';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

// Tell Next.js to always generate this page on the server (dynamic rather than static)
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  description: 'React Server Components, Server Actions, and Forms in the Next.js App Router',
  title: 'Next Contacts',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full flex-col sm:flex-row">
          <div className="flex h-1/3 w-full flex-col border-r border-gray bg-gray-light sm:h-auto sm:w-[18rem] md:w-[22rem]">
            <div className="flex items-center gap-2 border-b border-gray px-8 py-4">
              <Search />
              <Button type="submit" theme="secondary">
                New
              </Button>
            </div>
            <ContactList />
            <div className="m-0 hidden flex-row items-center gap-2 border-t border-t-gray px-8 py-4 font-medium sm:flex">
              <Link className="flex items-center gap-2 text-black no-underline" href={routes.home()}>
                <Image priority width={30} height={30} src={Logo} alt="" />
                Contacts
              </Link>
            </div>
            <div className="flex border-t border-t-gray sm:hidden" />
          </div>
          <div className="w-full flex-1 px-16 py-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
