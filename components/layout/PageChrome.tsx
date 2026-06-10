import { pageChromeHtml } from "@/lib/homepage-html";

export default function PageChrome() {
  return <div dangerouslySetInnerHTML={{ __html: pageChromeHtml }} />;
}
