"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
} from "./ui/resizable-navbar";
import { useState } from "react";

export default function Navmenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative p-4 w-full bg-zinc-200">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
          </MobileNavHeader>
        </MobileNav>
      </Navbar>
    </div>
  );
}
