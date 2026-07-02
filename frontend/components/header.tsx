"use client";

import Link from 'next/link';
import { useAuth, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useAuth();

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground">
              S
            </div>
            <Link href="/" className="text-xl font-bold text-white">
              SpamSMSAnalyzer
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-white hover:text-gray-300 transition-colors">Features</Link>
            <Link href="/pricing" className="text-sm text-white hover:text-gray-300 transition-colors">Pricing</Link>
            <Link href="/how-it-works" className="text-sm text-white hover:text-gray-300 transition-colors">How It Works</Link>
            <Link href="#about" className="text-sm text-white hover:text-gray-300 transition-colors">About</Link>
            <Link href="/blog" className="text-sm text-white hover:text-gray-300 transition-colors">Blog</Link>
            <Link href="#analyzer" className="text-sm text-white hover:text-gray-300 transition-colors">Analyzer</Link>
            <Link href="/contact" className="text-sm text-white hover:text-gray-300 transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 rounded-md bg-white text-black border border-gray-400 hover:border-white transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 rounded-md bg-black text-white border border-gray-400 hover:border-white transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            ) : (
              <UserButton />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}