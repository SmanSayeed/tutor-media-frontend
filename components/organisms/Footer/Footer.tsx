"use client";

import React from "react";
import Image from "next/image";
import Text from "@/components/atoms/Text/Text";
import FooterLink from "@/components/molecules/FooterLink/FooterLink";
import SocialIcon from "@/components/molecules/SocialIcon/SocialIcon";
import ContactItem from "@/components/molecules/ContactItem/ContactItem";
import CompanyInfoItem from "@/components/molecules/CompanyInfoItem/CompanyInfoItem";
import AppDownloadButton from "@/components/molecules/AppDownloadButton/AppDownloadButton";

export default function Footer() {
  return (
    <footer className="bg-brand-footer-bg text-brand-footer-text">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-[92px] gap-y-8">
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <Image
              src="/assets/Icons/Tution_Solution_BD_Logo-white.png"
              alt="Tutor Solution BD"
              width={200}
              height={36}
              className="h-9 w-auto"
            />
            <Text
              as="p"
              variant="others-text-base"
              className="text-brand-footer-text leading-relaxed"
            >
              Tutor Solution BD is bangladesh’s first subscription - based
              tuition platform with zero commission. we’re creating a smarter.
              simple, and more transparent way for tutors and guardians to
              connect fairly and directly.
            </Text>

            <div>
              <Text as="h5" variant="download-app-heading" className="mb-3">
                Download Our App
              </Text>
              <div className="flex gap-3">
                <AppDownloadButton type="appstore" className="flex-1" />
                <AppDownloadButton type="playstore" className="flex-1" />
              </div>
            </div>

            <div>
              <Text as="h4" variant="social-heading" className="mb-4">
                Stay Connected With The Community
              </Text>
              <div className="flex gap-3 items-center">
                <SocialIcon platform="facebook" href="https://facebook.com" />
                <SocialIcon platform="linkedin" href="https://linkedin.com" />
                <SocialIcon platform="youtube" href="https://youtube.com" />
                <SocialIcon platform="instagram" href="https://instagram.com" />
                <SocialIcon platform="tiktok" href="https://tiktok.com" />
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <Text
              as="h3"
              variant="others-text-lg"
              className="text-white font-semibold mb-4"
            >
              Useful Link
            </Text>
            <div className="space-y-1">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/become-tutor" label="Become a Tutor" />
              <FooterLink href="/tutorial" label="Tutorial" />
              <FooterLink href="/hire-tutor" label="Hire a Tutor" />
              <FooterLink href="/faq" label="FAQ" />
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/refund-policy" label="Refund Policy" />
              <FooterLink href="/terms" label="Terms and Conditions" />
              <FooterLink href="/privacy" label="Privacy Policy" />
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <Text
              as="h3"
              variant="others-text-lg"
              className="text-white font-semibold mb-4"
            >
              Contacts
            </Text>
            <div className="space-y-2">
              <ContactItem icon="email">
                <a
                  href="mailto:Support@tutorsolutionbd.com"
                  className="hover:text-brand-primary-500 transition-colors"
                >
                  Support@tutorsolutionbd.com
                </a>
              </ContactItem>
              <ContactItem icon="phone">
                <a
                  href="tel:+8801977460470"
                  className="hover:text-brand-primary-500 transition-colors"
                >
                  +8801977460470
                </a>
              </ContactItem>
              <div>
                <Text
                  as="p"
                  variant="contact-text"
                  className="font-medium mb-1"
                >
                  Office Address
                </Text>
                <ContactItem icon="location">
                  <Text as="p" variant="contact-text">
                    House#14, Road#4, kaderabad housing.
                    <br />
                    mohammadpur, dhaka, PO : 1207
                  </Text>
                </ContactItem>
              </div>
            </div>
          </div>

          {/* Column 4: Company Info */}
          <div>
            <Text
              as="h3"
              variant="others-text-lg"
              className="text-white font-semibold mb-4"
            >
              Company Info
            </Text>
            <div className="space-y-1">
              <CompanyInfoItem
                label="Trade Licence No"
                value="TRAD/DNCC/110/2025"
              />
              <CompanyInfoItem label="E-TIN Number" value="765716190492" />
              <CompanyInfoItem label="BIN Number" value="006541238-0501" />
              <CompanyInfoItem label="DBID ID" value="265487913" />
            </div>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-12 lg:grid-cols-18 gap-3 mb-8">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="h-10 bg-white/10 rounded border border-white/20"
              />
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-4">
            <Text
              as="p"
              variant="others-text-base"
              className="text-brand-footer-text"
            >
              © 2015–2025 Tutor Solution BD Edutech Ltd. All Rights Reserved.
            </Text>
            <Text
              as="p"
              variant="others-text-base"
              className="text-brand-footer-text/70 text-sm max-w-4xl mx-auto"
            >
              <span className="font-semibold">Disclaimer:</span> Tutor Solution
              BD is an online tuition media platform connecting guardians with
              verified tutors. We do not provide tutoring services, assign
              tutors, or endorse individuals. All hiring decisions are solely
              between guardians and tutors. Our role is to offer a secure,
              transparent, technology-driven space to help guardians find the
              right tutor easily.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
