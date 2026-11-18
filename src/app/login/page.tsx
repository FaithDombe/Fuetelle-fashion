import Link from "next/link";
import { ArrowLeft, Sparkles, MapPin } from "lucide-react";

export default function LoginPage() {
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
          Member Sign In
        </h1>

        <p className="text-xs sm:text-sm text-[#66645F] leading-relaxed mb-6">
          Client, designer, and master tailor authentication for our Lagos, Abuja,
          and global diaspora portals will be open upon public launch.
        </p>

        <div className="inline-flex items-center space-x-1.5 text-xs text-[#236B4A] mb-8 bg-[#236B4A]/10 px-3 py-1 font-medium">
          <MapPin className="w-3.5 h-3.5" />
          <span>Lagos &bull; Abuja &bull; Diaspora Guild</span>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#66645F] transition-colors"
        >
          <ArrowLeft className="mr-2 w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
