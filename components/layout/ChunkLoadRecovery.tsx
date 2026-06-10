"use client";

import { useEffect } from "react";

const reloadFlag = "suntrail:chunk-reload";

function shouldRecover(error: unknown) {
  if (error instanceof Event && error.target instanceof HTMLScriptElement) {
    return error.target.src.includes("/_next/static/chunks/");
  }

  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : "";

  return /ChunkLoadError|Loading chunk .* failed|_next\/static\/chunks/i.test(
    message,
  );
}

function reloadOnce() {
  if (sessionStorage.getItem(reloadFlag) === "1") {
    return;
  }

  sessionStorage.setItem(reloadFlag, "1");
  window.location.reload();
}

export default function ChunkLoadRecovery() {
  useEffect(() => {
    sessionStorage.removeItem(reloadFlag);

    const onError = (event: ErrorEvent | Event) => {
      if (shouldRecover(event instanceof ErrorEvent ? event.error || event : event)) {
        reloadOnce();
      }
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (shouldRecover(event.reason)) {
        reloadOnce();
      }
    };

    window.addEventListener("error", onError, true);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.removeEventListener("error", onError, true);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
