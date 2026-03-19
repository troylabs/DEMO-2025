import { Button } from "@/components/ui/button";

export function SponsorUsButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://drive.google.com/file/d/1JvNr2iwuHCQzTq_EkrKNJC1mpNcGlO0M/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="default"
        className={`px-5 py-5 border-[#1A4265] border-2 text-[#DEE0E3] font-bold text-lg hover:border-[#F1F1F1AA] bg-[#0A0A0A] ${className}`}
      >
        Sponsor Us
      </Button>
    </a>
  );
}

export function StartupApplicationButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://form.typeform.com/to/xmqWPpON"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        className={`px-5 py-5 bg-gradient-to-b from-[#2797FF] to-[#274AFF] text-[#DEE0E3] font-bold text-lg hover:opacity-90 ${className}`}
      >
        Startup Application
      </Button>
    </a>
  );
}
