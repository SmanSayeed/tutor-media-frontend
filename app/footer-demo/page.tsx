import { MainLayout } from "@/components/templates/MainLayout";

export default function FooterDemoPage() {
  return (
    <MainLayout>
      <div className="min-h-[60vh] bg-gray-50 flex items-center justify-center">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Header + Footer Layout Demo
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Navbar (Header) with Banner, Language Toggle, Theme Switcher
          </p>
          <p className="text-lg text-gray-600">
            Footer with 4 columns: Logo/Social, Useful Links, Contacts, Company
            Info
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
