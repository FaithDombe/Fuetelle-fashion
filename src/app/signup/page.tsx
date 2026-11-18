import Link from "next/link";
import { ArrowLeft, Sparkles, MapPin } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#0B0B0C] flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="max-w-md w-full bg-[#F0EDE7]/50 border border-[#E5E2DC] p-10 shadow-sm">
        <div className="inline-flex items-center space-x-2 text-[#C5A880] mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-medium">
            FUETELLE NIGERIA ATELIER
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#0B0B0C] font-normal mb-4">
          Private Access & Registration
        </h1>

        <p className="text-xs sm:text-sm text-[#66645F] leading-relaxed mb-6">
          Onboarding for Nigerian clients, verified fashion houses, and master
          tailor guilds across Lagos, Abuja, and nationwide is currently in private preview.
        </p>

        <div className="inline-flex items-center space-x-1.5 text-xs text-[#236B4A] mb-8 bg-[#236B4A]/10 px-3 py-1 font-medium">
          <MapPin className="w-3.5 h-3.5" />
          <span>Lagos &bull; Abuja &bull; Port Harcourt &bull; Diaspora</span>
        </div>

        <div className="flex flex-col space-y-3">
          <Link
            href="/studio"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#66645F] transition-colors"
          >
            <span>Try AI Design Studio Free &rarr;</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-[#E5E2DC] text-[#0B0B0C] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#F0EDE7] transition-colors"
          >
            <ArrowLeft className="mr-2 w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
