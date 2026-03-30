import type { Metadata } from "next";
import { Roboto_Slab, Fugaz_One } from "next/font/google";
import "./globals.css";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageBackground from "@/components/PageBackground";

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Whitaker Trebella",
    description: "Portfolio of games, apps, music, and websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${robotoSlab.className} antialiased flex min-h-screen flex-col`}>
                <div className="page-bg">
                    <PageBackground/>

                    <Header/>
                    <div className="h-12 md:h-20" />
                    <main className="grow">
                        {children}
                    </main>
                    {/*<Footer/>*/}
                </div>
            </body>
        </html>
    );
}