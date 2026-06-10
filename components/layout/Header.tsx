import { headerHtml } from "@/lib/homepage-html";

export default function Header() {
  return <div dangerouslySetInnerHTML={{ __html: headerHtml }} />;
}
