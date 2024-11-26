"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { ButtonDropdown } from "@/app/js/button-dropdown";
import $ from "jquery";
import * as bootstrap from "bootstrap";

const Header = () => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    ButtonDropdown();
    setState((prev) => {
      return !prev;
    });
  }, []);
  return (
    <main className="">
      <div>Header</div>
    </main>
  );
};

export default Header;
