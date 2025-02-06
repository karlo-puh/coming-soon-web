import type { Metadata } from "next";
import {  Inter, Montserrat, Saira } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const saira = Saira({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-saira',
});

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PITSTOP Arena - Coming Soon',
  description: 'Get ready for Croatia\'s premier sim racing experience. PITSTOP Arena is opening soon in Varaždin with state-of-the-art simulators and thrilling racing events.',
  keywords: 'sim racing, racing simulator, sim racing croatia, PITSTOP Arena, Varaždin, Assetto Corsa, Croatia racing, utrke, sim utrkivanje, racing competitions',
  openGraph: {
    title: 'PITSTOP Arena - Coming Soon',
    description: 'Experience the thrill of professional sim racing. Opening Soon in Varaždin, Croatia.',
    url: 'https://pitstop-arena.hr',
    type: 'website',
    locale: 'en_US',
    siteName: 'PITSTOP Arena',
    images: [
      {
        url: 'https://pitstop-arena.hr/og-image.webp',
        width: 3840,
        height: 2160,
        alt: 'PITSTOP Sim Racing Arena'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pitstop-arena',
    title: 'PITSTOP Arena - Coming Soon',
    description: 'Join the ultimate sim racing adventure in Varaždin. Opening Soon in Varaždin, Croatia.',
    images: 'https://pitstop-arena.hr/og-image.webp',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      </head>
      <body
			className={cn(inter.className, saira.variable, montserrat.variable, 'dark')}
      >
        {children}
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  );
}
