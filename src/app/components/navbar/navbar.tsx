"use client";
import "./navbar.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarProps = {
  variant?: "scrolled"; // optional variant to force styles
};

export default function Navbar({ variant }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // Check if on desktop
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1060);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Scroll logic
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      setShowNavbar(currentScrollY < 10 || currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isForcedScrolled = variant === "scrolled";

  const navbarClass = [
    "navbar",
    isDesktop
      ? isForcedScrolled || scrolled
        ? "desktopScrolled"
        : "desktop"
      : isForcedScrolled || scrolled
        ? "mobileScrolled"
        : "mobile",
    showNavbar ? "visible" : "hidden",
  ].join(" ");

  return (
    <nav className={navbarClass}>
      <div className="navbarContent">
        {/* Logo */}
        <Link href={"/"}>
            <div className="navbarLogoImageContainer">
            <Image
                src={
                isDesktop && !(isForcedScrolled || scrolled)
                    ? "/home/evermondLogoWhite.svg"
                    : "/home/evermondLogoBlack.svg"
                }
                alt="Evermond"
                fill
                className="evermondLogo"
            />
            </div>
        </Link>

        {/* Hamburger */}
        <div
          className={`navbarMobileMenuHamburger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></div>

        {/* Desktop Menu */}
        <div className="navbarDesktopMenu">
            <a href="/" className="directLink"><div className="navbarDesktopLink"><p>Home</p></div></a>
            <a href={"/disclaimer"} className="directLink"><div className="navbarDesktopLink"><p>Gallery</p></div></a>
            <a href={"/disclaimer"} className="directLink"><div className="navbarDesktopLink"><p>Shop</p></div></a>
            <a href={"/disclaimer"} className="directLink"><div className="navbarDesktopLink"><p>Careers</p></div></a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbarMobileMenuOpen ${isMenuOpen ? "open" : ""}`}>
        <a href="/" className="directLink"><div className="navbarMobileLink"><p>Home<span className="arrow">→</span></p></div></a>
        <a href={"/disclaimer"} className="directLink"><div className="navbarMobileLink"><p>Gallery<span className="arrow">→</span></p></div></a>
        <a href={"/disclaimer"} className="directLink"><div className="navbarMobileLink"><p>Shop<span className="arrow">→</span></p></div></a>
        <a href={"/disclaimer"} className="directLink"><div className="navbarMobileLink"><p>Careers<span className="arrow">→</span></p></div></a>
      </div>
    </nav>
  );
}
