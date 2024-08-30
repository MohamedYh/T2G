"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store/reduxStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <meta name="viewport"></meta>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Provider store={store}>{children}</Provider>
            </body>
        </html>
    );
}
