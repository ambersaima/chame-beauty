import { Sparkles, Truck } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#e8b9b9] px-4 py-2 text-[#493437]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 text-[9px] sm:text-[10px]">
        <span className="hidden items-center gap-2 sm:flex"><Sparkles size={12} /> A LITTLE LOVE FOR YOUR SKIN</span>
        <span className="flex flex-1 items-center justify-center gap-2 font-bold tracking-[.13em] sm:flex-none"><Truck size={13} /> 
        FREE SHIPPING ON ORDERS ABOVE ₹999</span>
        <span className="hidden sm:block">YOUR EVERYDAY GLOW STARTS HERE</span>
      </div>
    </div>
  );
}