import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css"

// import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

//clerk
import { ClerkProvider, ClerkLoading, ClerkLoaded } from '@clerk/nextjs'


//loader
import Loading from "../components/Loading"
import Loading2 from "../components/Loading2"


//globel context
import { GlobalProvider } from "../GlobalContext"


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
      <GlobalProvider>
        <html lang="en">
          {/* <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head> */}
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
      </GlobalProvider>
    </ClerkProvider>
  );
}
