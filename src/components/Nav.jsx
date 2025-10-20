"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
} from "./ui/resizable-navbar";

export default function Navmenu() {
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
