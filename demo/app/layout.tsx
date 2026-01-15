import type { Metadata } from "next";
import "./globals.css";

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
