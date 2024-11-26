"use client";
import { useEffect } from "react";

const JqueryClient = () => {

    useEffect(() => {
        require("jquery/dist/jquery.min.js");
      }, []);
    
      return null
};

export default JqueryClient