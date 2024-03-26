import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css"



const inter = Inter({ subsets: ["latin"] });

//clerk
import { ClerkProvider, ClerkLoading, ClerkLoaded } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Workafy",
  description: "Freelancing web platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClerkLoading>
            <div className="flex flex-col items-center text-center  mt-32">
              Loading...
            </div>
          </ClerkLoading>

          <ClerkLoaded>
            {children}
          </ClerkLoaded>

        </body>
      </html>
    </ClerkProvider>
  );
}
