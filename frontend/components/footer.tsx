import Link from 'next/link';
import { Mail, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground text-sm">
                S
              </div>
              <span className="font-bold text-primary">SpamSMSAnalyzer</span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Protecting users from SMS threats with AI-powered detection.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {['Analyzer', 'Features', 'Pricing', 'Security'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Security', 'Cookies'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-foreground/60 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} SpamSMSAnalyzer. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
