import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css"



const inter = Inter({ subsets: ["latin"] });

//clerk
import { ClerkProvider, ClerkLoading, ClerkLoaded } from '@clerk/nextjs'


//loader
import Loading from "../components/Loading"
import Loading2 from "../components/Loading2"


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
            <Loading />
            {/* <Loading2 /> */}
          </ClerkLoading>

          <ClerkLoaded>
            {children}
          </ClerkLoaded>

        </body>
      </html>
    </ClerkProvider>
  );
}
