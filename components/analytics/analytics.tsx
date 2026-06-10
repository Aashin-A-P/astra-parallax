import Script from "next/script";
import { gaScriptSrc } from "@/lib/analytics";

export function Analytics() {
  const src = gaScriptSrc();
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!src || !id) return null;

  return (
    <>
      <Script src={src} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
