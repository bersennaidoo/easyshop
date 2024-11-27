"use client";
import Script from "next/script";

const JSLib = () => {
  return (
    <>
      <Script strategy="beforeInteractive" src="/js/jquery-3.3.1.min.js" onLoad={() => console.log("jq")}/>
      <Script strategy="beforeInteractive" src="/js/bootstrap.bundle.min.js" onLoad={() => console.log("bs")}/>
      <Script strategy="beforeInteractive" src="/js/easing/easing.min.js" onLoad={() => console.log("easing")}/>
      <Script strategy="beforeInteractive" src="/js/waypoints/waypoints.min.js" onLoad={() => console.log("way")}/>
      <Script strategy="beforeInteractive" src="/js/lightbox/js/lightbox.min.js" onLoad={() => console.log("light")}/>
      <Script
        src="/js/owlcarousel/owl.carousel.min.js"
        strategy="beforeInteractive"
        onLoad={() => console.log("owl")}
      />
      <Script
        src="/js/main.js"
        strategy="beforeInteractive"
        onLoad={() => console.log("main")}
      />
    </>
  );
};

export default JSLib;
