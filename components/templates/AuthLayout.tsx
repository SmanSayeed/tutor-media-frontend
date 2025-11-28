import Link from "next/link";
import { Logo } from "@/components/atoms/Logo";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50">
      <header className="p-6">
        <Logo />
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        {children}
      </main>
      <footer className="p-6 text-center text-sm text-slate-500">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          ← Back to Home
        </Link>
      </footer>
    </div>
  );
}

