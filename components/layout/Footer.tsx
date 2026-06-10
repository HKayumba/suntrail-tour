import { footerHtml } from "@/lib/homepage-html";

export default function Footer() {
  const html = footerHtml.replace(
    "__SUNTRAIL_CURRENT_YEAR__",
    String(new Date().getFullYear()),
  );

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
