"use client";

import Link from 'next/link';
import { useAuth, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useAuth();

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur .supports-\[backdrop-filter\]\:bg-background\/60 {
    @supports (backdrop-filter: var(--tw)) {
        background-color: color-mix(in oklab, var(--background) 60%, transparent);
    }
}">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground">
              S
            </div>
            <Link href="/" className="text-xl font-bold text-primary">
              SpamSMSAnalyzer
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Features</Link>
            <Link href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">About</Link>
            <Link href="#analyzer" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Analyzer</Link>
          </nav>
          <div className="flex items-center gap-4">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 rounded bg-white text-black">Sign In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 rounded bg-blue-500 text-white">Sign Up</button>
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