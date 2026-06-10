import Script from "next/script";

const legacyScripts = [
  "/assets/js/plugins/jquery.min.js",
  "/assets/js/plugins/bootstrap.min.js",
  "/assets/js/plugins/metismenu.js",
  "/assets/js/vendor/jqueryui.js",
  "/assets/js/vendor/waypoint.js",
  "/assets/js/plugins/swiper.js",
  "/assets/js/plugins/smoothscroll.js",
  "/assets/js/vendor/wow.js",
  "/assets/js/plugins/odometer.js",
  "/assets/js/plugins/magnific-popup.js",
  "/assets/js/plugins/isotop.js",
  "/assets/js/plugins/contact-form.js",
  "/assets/js/main.js",
];

export default function LegacyScripts() {
  return (
    <>
      {legacyScripts.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}
    </>
  );
}
