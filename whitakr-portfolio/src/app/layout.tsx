import type { Metadata } from "next";
import { Raleway, Roboto_Slab } from "next/font/google";
import "./globals.css";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageBackground from "@/components/PageBackground";

const raleway = Raleway({
    subsets: ["latin"],
})

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Whitaker Trebella's Portfolio",
    description: "Portfolio of work, music, and games",
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
                    <main className="grow">
                        {children}
                    </main>
                    {/*<Footer/>*/}
                </div>
            </body>
        </html>
    );
}