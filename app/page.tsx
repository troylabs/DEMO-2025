import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#080808]">
      {/* Background Decorations */}

      {/* Ambient blur effect */}
      <Image
        src="/hero-section/Vector.svg"
        alt=""
        width={1512}
        height={837}
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        priority
      />

      {/* Wave lines - Left side */}
      <Image
        src="/hero-section/Frame.svg"
        alt=""
        width={617}
        height={432}
        className="pointer-events-none absolute right-0 top-[45%]"
      />
      <Image
        src="/hero-section/Frame1.svg"
        alt=""
        width={617}
        height={432}
        className="pointer-events-none absolute left-0 top-[15%]"
      />

      {/* Wave lines - Right side */}
      <Image
        src="/hero-section/Frame2.svg"
        alt=""
        width={624}
        height={396}
        className="pointer-events-none absolute right-0 top-[30%]"
      />
      <Image
        src="/hero-section/Frame3.svg"
        alt=""
        width={624}
        height={396}
        className="pointer-events-none absolute left-0 top-[10%]"
      />
      <Image
        src="/hero-section/Frame4.svg"
        alt=""
        width={624}
        height={396}
        className="pointer-events-none absolute right-[25%] top-[35%]"
      />

      {/* Planet/Sphere at bottom */}
      <Image
        src="/hero-section/Ellipse 6.svg"
        alt=""
        width={1512}
        height={586}
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%]"
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 py-6 md:px-8">
        <a href="#" className="flex w-[30px] items-center">
          <Image
            src="/hero-section/DEMOLogo.svg"
            alt="DEMO 2026 Logo"
            width={30}
            height={48}
            priority
          />
        </a>

        <div className="flex items-center gap-8 text-sm text-gray-300">
          <a href="#" className="transition-colors hover:text-white">
            Sponsor Us
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Startup Application
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Exhibiting Startups
          </a>
        </div>

        {/* Ghost element to balance the nav */}
        <div className="w-[37px]" aria-hidden="true" />
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-4 text-center">
        {/* Event Info */}
        <p className="mb-4 text-lg text-gray-200 md:text-xl">
          April 22nd &bull; 11AM - 8PM &bull; USC TCC Ballroom
        </p>

        {/* Main Title */}
        <h1 className="gradient-text mb-6 text-7xl font-bold tracking-tight md:text-8xl lg:text-9xl">
          DEMO 2026
        </h1>

        {/* Subtitle */}
        <p className="mb-2 text-lg text-gray-200 md:text-xl lg:text-2xl">
          USC&apos;s Largest Student Organized Entrepreneurship Conference
        </p>

        {/* Sponsor Line */}
        <p className="mb-10 text-sm text-gray-500 md:text-base">
          Sponsored by the USC Lloyd Greif Center for Entrepreneurial Studies
        </p>

        {/* CTA Buttons */}
        <div className="mb-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="flex h-12 items-center justify-center rounded-md border border-gray-400 px-8 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Sponsor Us
          </a>
          <a
            href="#"
            className="flex h-12 items-center justify-center rounded-md bg-[#3B88CC] px-8 text-sm font-medium text-white transition-colors hover:bg-[#4A9BE0]"
          >
            Startup Application
          </a>
        </div>

        {/* Contact Link */}
        <a
          href="mailto:troylabs@usc.edu"
          className="text-sm text-gray-500 underline transition-colors hover:text-gray-300"
        >
          Contact Us
        </a>
      </main>
    </div>
  );
}
