"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button/Button";
import LinkAtom from "@/components/atoms/Link/Link";
import NavLink from "@/components/molecules/NavLink/NavLink";
import IconButton from "@/components/molecules/IconButton/IconButton";
import Icon from "@/components/atoms/Icon/Icon";

export default function Header() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [language, setLanguage] = useState<"ENG" | "বাংলা">("ENG");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ENG" ? "বাংলা" : "ENG"));
  };

  return (
    <header>
      {/* Top Banner - Closable */}
      {bannerVisible && (
        <div className="relative">
          <Image
            src="/assets/Header/banner_image.png"
            alt="Tuition Classes Banner"
            width={1920}
            height={200}
            className="w-full h-auto"
            priority
          />
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition-colors"
            aria-label="Close banner"
          >
            <Icon name="X" size={20} />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Image
                src="/assets/Header/Tution_Solution_BD_Logo.png"
                alt="Tutor Solution BD"
                width={250}
                height={44}
                className="h-8 w-auto sm:h-10 md:h-11 object-contain"
                priority
              />
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <Button variant="outline" size="md">
                Job Board
              </Button>
              <NavLink label="Opportuniteis Hub" hasDropdown />
              <NavLink label="Our Blog" href="/blog" />
            </div>

            <div className="flex items-center gap-4">
              <IconButton
                icon="Globe"
                label={language}
                onClick={toggleLanguage}
              />
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/assets/Header/sun_icon.png"
                  alt="Theme toggle"
                  width={20}
                  height={20}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
              <LinkAtom href="/login" variant="nav">
                Sign In
              </LinkAtom>
              <Button size="md" color="primary">
                Become A Tutor
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
