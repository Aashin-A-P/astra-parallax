import type { Metadata, Viewport } from "next";
import { Geist, Sora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics/analytics";
import { WebVitals } from "@/components/analytics/web-vitals";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { getSearchIndex } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";

const bodyFont = Geist({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: "#030409",
  colorScheme: "dark light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const searchItems = getSearchIndex();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <SiteHeader searchItems={searchItems} />
          <main id="main">{children}</main>
          <SiteFooter />
          <JsonLd data={websiteSchema()} />
          <JsonLd data={organizationSchema()} />
          <Analytics />
          <WebVitals />
        </ThemeProvider>
      </body>
    </html>
  );
}
