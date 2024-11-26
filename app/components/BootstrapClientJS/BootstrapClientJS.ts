"use client";
import { useEffect } from "react";

const BootstrapClientJS = () => {
  useEffect(() => {
    require("../../../public/js/jquery-3.7.0.slim.min.js");
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    //require("../../../public/js/bootstrap.bundle.min.js");
    //require("../../../public/js/easing/easing.min.js");
    //require("../../../public/js/waypoints/waypoints.min.js");
    //require("../../../public/js/lightbox/js/lightbox.min.js");
    //require("../../../public/js/owlcarousel/owl.carousel.min.js");
    //require("../../../public/js/main.js");
  }, []);

  return null
};

export default BootstrapClientJS
