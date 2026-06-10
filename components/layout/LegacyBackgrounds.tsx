"use client";

import { useEffect } from "react";

function normalizeAssetPath(path: string) {
  return path.startsWith("assets/") ? `/${path}` : path;
}

export default function LegacyBackgrounds() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-bg-src]").forEach((element) => {
      const background = element.getAttribute("data-bg-src");

      if (!background) {
        return;
      }

      element.style.backgroundImage = `url("${normalizeAssetPath(background)}")`;
      element.style.backgroundSize = element.style.backgroundSize || "cover";
      element.style.backgroundPosition =
        element.style.backgroundPosition || "center";
    });
  });

  return null;
}
