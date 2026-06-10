import Script from "next/script";
import Footer from "@/components/layout/Footer";
import { homepageHtml } from "@/lib/homepage-html";

export default function Home() {
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: homepageHtml }} />
      <Footer />
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </>
  );
}
