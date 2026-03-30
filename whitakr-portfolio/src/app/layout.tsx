import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import React from "react";
{/*import Footer from "@/components/Footer";*/}
import Header from "@/components/Header";
import PageBackground from "@/components/PageBackground";

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
});

const titleText = "Whitaker Trebella"
const descriptionText =  "Portfolio of games, apps, music, and websites"

export const metadata: Metadata = {
    title: titleText,
    description: descriptionText,
    openGraph: {
        title: titleText,
        description: descriptionText,
        images: [
            {
                url: "/icon-open-graph.jpg",
                width: 256,
                height: 256,
                alt: "Whitaker Trebella"
            }
        ]
    }
    icons: {
        icon: "/icon.png"
    }
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