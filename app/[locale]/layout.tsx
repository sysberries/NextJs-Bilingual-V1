import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from '@/app/components/header'
import { NextIntlClientProvider } from "next-intl";

import "../globals.css";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,params,
}: Readonly<{
  children: React.ReactNode;
  params : { locale: string};
}>) {

const {locale} = await params;

 // Determine the text direction based on the locale
 const isRTL = locale === "ar"; // Assuming "ar" is the Arabic locale
 const direction = isRTL ? "rtl" : "ltr";
 const messages = await import(`../messages/${locale}.json`);

  return (
    <NextIntlClientProvider messages={messages.default} locale={locale}>
    <html lang={locale} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Header lang={locale} />
        {children}
      </body>
    </html>
    </NextIntlClientProvider>
  );
}