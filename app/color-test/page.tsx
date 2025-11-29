/**
 * Color Test Page - Tutor Solution BD
 *
 * This page demonstrates all brand colors in action
 * Visit: http://localhost:3000/color-test
 */

import Button from "@/components/atoms/Button/Button";
import { BRAND_COLORS } from "@/config/colors.config";
import { ArrowRight, Check, Plus, Heart, Download, Search } from "lucide-react";

export default function ColorTestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-brand-primary-500 text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">
            Tutor Solution BD - Color System Test
          </h1>
          <p className="text-brand-primary-50">
            Primary Brand Color: Teal Cyan (#00b3b3)
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* === COLOR PALETTE === */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-black">
            Brand Color Palette
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Primary Main */}
            <div className="text-center space-y-2">
              <div
                className="h-24 rounded-lg shadow-md bg-brand-primary-500"
                style={{ backgroundColor: BRAND_COLORS.primary.main }}
              />
              <p className="text-sm font-semibold text-brand-black">
                Primary Main
              </p>
              <p className="text-xs text-gray-600 font-mono">#00b3b3</p>
              <p className="text-xs text-gray-500">brand-primary-500</p>
            </div>

            {/* Hover State */}
            <div className="text-center space-y-2">
              <div
                className="h-24 rounded-lg shadow-md bg-brand-primary-600"
                style={{ backgroundColor: BRAND_COLORS.primary.dark }}
              />
              <p className="text-sm font-semibold text-brand-black">Hover</p>
              <p className="text-xs text-gray-600 font-mono">#009999</p>
              <p className="text-xs text-gray-500">brand-primary-600</p>
            </div>

            {/* Active State */}
            <div className="text-center space-y-2">
              <div className="h-24 rounded-lg shadow-md bg-brand-primary-700" />
              <p className="text-sm font-semibold text-brand-black">Active</p>
              <p className="text-xs text-gray-600 font-mono">#007f7f</p>
              <p className="text-xs text-gray-500">brand-primary-700</p>
            </div>

            {/* Light Background */}
            <div className="text-center space-y-2">
              <div
                className="h-24 rounded-lg shadow-md bg-brand-primary-50 border-2 border-brand-primary-500"
                style={{ backgroundColor: BRAND_COLORS.primary.light }}
              />
              <p className="text-sm font-semibold text-brand-black">Light BG</p>
              <p className="text-xs text-gray-600 font-mono">#e6f7f7</p>
              <p className="text-xs text-gray-500">brand-primary-50</p>
            </div>

            {/* Footer Dark */}
            <div className="text-center space-y-2">
              <div
                className="h-24 rounded-lg shadow-md bg-brand-footer-bg"
                style={{ backgroundColor: BRAND_COLORS.footer.background }}
              />
              <p className="text-sm font-semibold text-brand-black">Footer</p>
              <p className="text-xs text-gray-600 font-mono">#003333</p>
              <p className="text-xs text-gray-500">brand-footer-bg</p>
            </div>
          </div>
        </section>

        {/* === PRIMARY BUTTONS === */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-black">
            Primary Buttons (Teal Background)
          </h2>

          <div className="bg-gray-50 p-8 rounded-xl space-y-6">
            <div className="flex flex-wrap gap-4">
              <Button variant="filled" color="primary" size="sm">
                Small Primary
              </Button>
              <Button variant="filled" color="primary" size="md">
                Medium Primary
              </Button>
              <Button variant="filled" color="primary" size="lg">
                Large Primary
              </Button>
              <Button variant="filled" color="primary" size="xl">
                XL Primary
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="filled"
                color="primary"
                iconLeft={<Plus size={16} />}
              >
                With Left Icon
              </Button>
              <Button
                variant="filled"
                color="primary"
                iconRight={<ArrowRight size={16} />}
              >
                With Right Icon
              </Button>
              <Button variant="filled" color="primary" isLoading>
                Loading State
              </Button>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-brand-black">
                Full Width:
              </p>
              <Button variant="filled" color="primary" fullWidth>
                Full Width Primary Button
              </Button>
            </div>
          </div>
        </section>

        {/* === SECONDARY BUTTONS === */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-black">
            Secondary Buttons (White BG + Teal Border)
          </h2>

          <div className="bg-gray-50 p-8 rounded-xl space-y-6">
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" color="primary" size="sm">
                Small Outline
              </Button>
              <Button variant="outline" color="primary" size="md">
                Medium Outline
              </Button>
              <Button variant="outline" color="primary" size="lg">
                Large Outline
              </Button>
              <Button variant="outline" color="primary" size="xl">
                XL Outline
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                color="primary"
                iconLeft={<Heart size={16} />}
              >
                Favorite
              </Button>
              <Button
                variant="outline"
                color="primary"
                iconRight={<Download size={16} />}
              >
                Download
              </Button>
            </div>
          </div>
        </section>

        {/* === GHOST & OTHER VARIANTS === */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-black">
            Ghost & Other Variants
          </h2>

          <div className="bg-gray-50 p-8 rounded-xl space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-brand-black">
                Ghost Buttons:
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost" color="primary">
                  Ghost Primary
                </Button>
                <Button
                  variant="ghost"
                  color="primary"
                  iconLeft={<Check size={16} />}
                >
                  Ghost with Icon
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-brand-black">
                Link Buttons:
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="link" color="primary">
                  Link Style
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* === REAL WORLD EXAMPLES === */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-black">
            Real World Examples
          </h2>

          {/* Hero Section CTA */}
          <div className="bg-gradient-to-br from-brand-primary-50 to-white p-12 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h3 className="text-4xl font-bold text-brand-black">
                Find Your Perfect Tutor Today
              </h3>
              <p className="text-lg text-gray-700">
                Connect with qualified tutors for personalized learning
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="xl"
                  color="primary"
                  variant="filled"
                  iconRight={<ArrowRight size={20} />}
                >
                  Start Earning As A Tutor
                </Button>
                <Button size="xl" color="primary" variant="outline">
                  Hire A Tutor
                </Button>
              </div>
            </div>
          </div>

          {/* Search Bar Example */}
          <div className="bg-white border-2 border-gray-200 p-8 rounded-xl">
            <div className="flex gap-2 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for tutors in your area..."
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-primary-500 focus:outline-none text-brand-black"
              />
              <Button color="primary" iconLeft={<Search size={18} />} size="lg">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* === FOOTER EXAMPLE === */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-black">
            Footer Example
          </h2>

          <div className="bg-brand-footer-bg text-brand-footer-text p-12 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4 text-brand-primary-500">
                  Tutor Solution BD
                </h4>
                <p className="text-sm">
                  Connect with qualified tutors for personalized learning
                  experiences.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-brand-primary-500">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-brand-primary-500 transition-colors"
                    >
                      Find Tutors
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-brand-primary-500 transition-colors"
                    >
                      Become a Tutor
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-brand-primary-500">
                  Contact
                </h4>
                <p className="text-sm">
                  📧 contact@tutorsolutionbd.com
                  <br />
                  📱 +880 1234 567890
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === COLOR REFERENCE === */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-black">
            Color Reference Guide
          </h2>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-brand-black">
                  Primary Brand Color:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    • Main:{" "}
                    <code className="bg-white px-2 py-1 rounded">#00b3b3</code>
                  </li>
                  <li>
                    • Hover:{" "}
                    <code className="bg-white px-2 py-1 rounded">#009999</code>
                  </li>
                  <li>
                    • Active:{" "}
                    <code className="bg-white px-2 py-1 rounded">#007f7f</code>
                  </li>
                  <li>
                    • Light BG:{" "}
                    <code className="bg-white px-2 py-1 rounded">#e6f7f7</code>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-brand-black">Special Colors:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    • All Text:{" "}
                    <code className="bg-white px-2 py-1 rounded">#000000</code>{" "}
                    (Black)
                  </li>
                  <li>
                    • Footer BG:{" "}
                    <code className="bg-white px-2 py-1 rounded">#003333</code>
                  </li>
                  <li>
                    • Footer Text:{" "}
                    <code className="bg-white px-2 py-1 rounded">#cceeee</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Color System Test | Tutor Solution BD",
  description: "Test page for brand colors and button components",
};
