import type { Metadata } from "next";
import "./globals.css";
import "@goodmanlabs/react-swipe-row/style.css";

export const metadata: Metadata = {
    title: "react-swipe-row demo",
    description: "Demo for @goodmanlabs/react-swipe-row",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
