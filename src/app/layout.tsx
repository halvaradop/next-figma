import type { Metadata } from "next";
import { Work_Sans } from "next/font/google"
import { LayoutProps } from "@/lib/@types/props";

export const metadata: Metadata = {
    title: "Figma Online",
    description: "A powerful collaborative design tool built with Next.js, Liveblocks, and Fabric.js. Create, share, and collaborate on design projects in real-time.",
    authors: {
        name: "halvaradop <hernanvid123@gmail.com>",
    },
    creator: "halvaradop",
    category: "website",
    keywords: "figma web, figma clone, collaboration in real time, web development, nextjs",
    robots: "index, follow",
    applicationName: "Figma clone",
    classification: "website",
    openGraph: {
        title: "Figma Online",
        siteName: "Figma clone",
        description: "A powerful collaborative design tool built with Next.js, Liveblocks, and Fabric.js. Create, share, and collaborate on design projects in real-time.",
        type: "website",
        locale: "es_CO",
        countryName: "Colombia",
    }
};

const workSans = Work_Sans({
    weight: ["300", "400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-work-sans"
})

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body className={`${workSans.style} antialiased`}>
                {children}
            </body>
        </html>
    );
}
