import { Sparkles } from "lucide-react";

interface AnnouncementBarProps {
  message?: string;
}

export default function AnnouncementBar({ message }: AnnouncementBarProps) {
  return (
    <div className="w-full bg-[#0a0a0a] border-b border-white/5 py-3 px-4 flex items-center justify-center gap-3">
      {/* Left Sparkle */}
      <Sparkles className="text-[#a88d6d] w-3 h-3 fill-[#a88d6d]" />

      <p className="text-[12px] md:text-sm font-medium tracking-wide text-slate-400 text-center">
        {message ? (
          <span>{message}</span>
        ) : (
          <>
            Free shipping for all orders of <span className="text-white font-bold">$1,300</span>
          </>
        )}
      </p>

      <Sparkles className="text-[#a88d6d] w-3 h-3 fill-[#a88d6d]" />
    </div>
  );
}