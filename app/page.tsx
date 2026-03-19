import Image from "next/image";
import { StartupDatabase } from "@/components/startup-database";
import { SponsorUsButton, StartupApplicationButton } from "@/components/cta-buttons";
import { LogoCarousel } from "@/components/logo-carousel";

// Company logos for carousels
const speakerLogos = [
  "/demo-legacy/company-logos/1024px-TinderLogo-2017 9.png",
  "/demo-legacy/company-logos/1024px-TinderLogo-2017 8.png",
  "/demo-legacy/company-logos/1024px-TinderLogo-2017 7.png",
  "/demo-legacy/company-logos/1024px-TinderLogo-2017 6.png",
  "/demo-legacy/company-logos/image 47.png",
  "/demo-legacy/company-logos/image 46.png",
];

const startupLogos = [
  "/demo-legacy/company-logos/9ac82f410c713f822540b85fdd5af85e4407b730.png",
  "/demo-legacy/company-logos/468e4901a88422c018d3a0cfeab25f713b8c336e.png",
  "/demo-legacy/company-logos/3e25aed533824dc9f30976e44ddbec8460481f0e.png",
  "/demo-legacy/company-logos/7dcf83f28ebbb5ececdb9afc3fc2207afe60f896.png",
  "/demo-legacy/company-logos/altro 2.png",
  "/demo-legacy/company-logos/b76fb84b-logo-original 2.png",
  "/demo-legacy/company-logos/e0f4e4fb2c36abe379f204eebdf3aac2a3fd0373.png",
  "/demo-legacy/company-logos/eb9a7d9cf228f732bb20f76b8ae1ef55452a793c.png",
];

const investorLogos = [
  "/demo-legacy/company-logos/79b2b474e10f45302db30d0ef47f8cb6e11ee5e0.png",
  "/demo-legacy/company-logos/de0f31fc6841f74cfcab432052a5a31c16eaca3f.png",
  "/demo-legacy/company-logos/061a8bc12dd7c8a5ea181acb0b7bca63998812b4.png",
  "/demo-legacy/company-logos/d03055610eda3a8737e7a7589fe494625d7c2ce3.png",
  "/demo-legacy/company-logos/20cdffa4583fcbf2eb9228f886c479a9dd73e28d.png",
  "/demo-legacy/company-logos/1e2e35977af1947f0bd3a192b84a29d6a58deeec.png",
  "/demo-legacy/company-logos/c1922abc98cc1f0b255a4a765d9ca80df453d9f7.png",
];

export default function Home() {
  return (
    <div className="relative bg-[#080808]">
      {/* Global Background Layer - decorative elements that span entire page */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Hero area decorations */}
        <Image
          src="/hero-section/Vector.svg"
          alt=""
          width={1512}
          height={837}
          className="absolute left-1/2 top-0 -translate-x-1/2"
        />
        <Image
          src="/hero-section/Frame.svg"
          alt=""
          width={617}
          height={432}
          className="absolute right-0 top-[400px]"
        />
        <Image
          src="/hero-section/Frame1.svg"
          alt=""
          width={617}
          height={432}
          className="absolute left-0 top-[150px]"
        />
        <Image
          src="/hero-section/Frame2.svg"
          alt=""
          width={624}
          height={396}
          className="absolute right-0 top-[180px]"
        />
        <Image
          src="/hero-section/Frame3.svg"
          alt=""
          width={624}
          height={396}
          className="absolute left-0 top-[100px]"
        />
        <Image
          src="/hero-section/Frame4.svg"
          alt=""
          width={624}
          height={396}
          className="absolute right-[25%] top-[320px]"
        />
        <Image
          src="/hero-section/Ellipse 6.svg"
          alt=""
          width={1512}
          height={586}
          className="absolute left-1/2 top-[300px] -translate-x-1/2"
        />

        {/* What is DEMO area - blur effect */}
        <Image
          src="/what-is-demo/AboutBlur.svg"
          alt=""
          width={854}
          height={876}
          className="absolute left-0 top-[900px]"
        />

        {/* Legacy/Startups area decorations - spread across multiple sections */}
        <Image
          src="/demo-legacy/Ellipse 6.svg"
          alt=""
          width={212}
          height={586}
          className="absolute right-0 top-[1800px]"
        />
        <Image
          src="/demo-legacy/Vector 22.svg"
          alt=""
          width={1000}
          height={1000}
          className="absolute left-[30%] top-[1700px]"
        />
        <Image
          src="/demo-legacy/Vector 23.svg"
          alt=""
          width={1000}
          height={1000}
          className="absolute left-0 top-[2200px]"
        />
        <Image
          src="/demo-legacy/Vector 24.svg"
          alt=""
          width={1000}
          height={1000}
          className="absolute left-0 top-[1900px]"
        />
        <Image
          src="/demo-legacy/Vector 25.svg"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-[1800px]"
        />

        {/* Exhibiting/Why DEMO area decorations */}
        <Image
          src="/demo-legacy/Vector 22.svg"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-[10%] top-[2800px]"
        />
        <Image
          src="/demo-legacy/Vector 23.svg"
          alt=""
          width={1000}
          height={1000}
          className="absolute left-0 top-[3200px]"
        />
        <Image
          src="/demo-legacy/Ellipse 6.svg"
          alt=""
          width={212}
          height={586}
          className="absolute right-0 top-[3000px]"
        />

        {/* Why DEMO/Sponsor area */}
        <Image
          src="/why-demo/Ellipse 6.svg"
          alt=""
          width={800}
          height={1200}
          className="absolute left-[27%] top-[3300px]"
        />
        <Image
          src="/demo-legacy/Vector 24.svg"
          alt=""
          width={1000}
          height={1000}
          className="absolute left-0 top-[4200px]"
        />
        <Image
          src="/demo-legacy/Vector 25.svg"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-[4600px]"
        />
      </div>
      {/* Hero Section */}
      <section className="relative z-10 h-screen w-full overflow-hidden">
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
            <a
              href="https://drive.google.com/file/d/1JvNr2iwuHCQzTq_EkrKNJC1mpNcGlO0M/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Sponsor Us
            </a>
            <a
              href="https://form.typeform.com/to/xmqWPpON"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Startup Application
            </a>
            <a href="#exhibiting-startups" className="transition-colors hover:text-white">
              Exhibiting Startups
            </a>
          </div>

          {/* Ghost element to balance the nav */}
          <div className="w-[37px]" aria-hidden="true" />
        </nav>

        {/* Hero Content */}
        <main className="relative z-10 flex h-[calc(100vh-100px)] flex-col items-center justify-center px-4 text-center">
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
          <p className="mb-6 text-sm text-gray-500 md:text-base">
            Sponsored by the USC Lloyd Greif Center for Entrepreneurial Studies
          </p>

          {/* CTA Buttons */}
          <div className="mb-2 flex flex-col gap-2 sm:flex-row">
            <SponsorUsButton />
            <StartupApplicationButton />
          </div>

          {/* Contact Link */}
          <a
            href="mailto:troylabs@usc.edu?subject=Hey%20TL!%20Curious%20about%20DEMO"
            className="text-sm text-gray-500 underline transition-colors hover:text-gray-300"
          >
            Contact Us
          </a>
        </main>
      </section>

      {/* What is DEMO Section */}
      <section className="relative z-10 min-h-screen w-full">
        {/* Full-width photo collage background */}
        <div className="absolute inset-0">
          <Image
            src="/what-is-demo/Frame 2165.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Gradient overlay: dark on left → transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col justify-center px-8 py-20 md:px-16">
          {/* Subtitle */}
          <p className="mb-2 text-sm text-gray-400">What is DEMO?</p>

          {/* Title - full width */}
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            <span className="gradient-text">TroyLabs presents DEMO 2026</span>
          </h2>

          {/* Bold subtitle */}
          <h3 className="mb-6 text-xl font-bold text-white md:text-xl">
            Empowering USC&apos;s Next Generation of Entrepreneurs
          </h3>

          {/* Description paragraphs - constrained width */}
          <div className="max-w-2xl pr-24">
            <p className="mb-4 text-gray-300 text-lg">
              DEMO is the largest student-run entrepreneurial conference in Southern
              California, annually bringing together startups, investors, and students
              for a day-long event.
            </p>
            <p className="mb-10 text-gray-300 text-lg">
              Striving to be the platform for SoCal student founders to get help with
              building, scaling and raising, we host a startup exhibition, pitch
              competition, and workshops aimed to empower student builders move
              from idea to launch.
            </p>
          </div>

          {/* Stats section - full width */}
          <p className="mb-6 text-center text-sm text-gray-400">
            Every year, DEMO brings in:
          </p>

          <div className="flex w-full items-center justify-center gap-12 md:gap-20 lg:gap-28">
            {/* 50 startups */}
            <div className="text-center">
              <p className="gradient-text text-6xl font-bold md:text-7xl lg:text-8xl">50</p>
              <p className="text-sm text-gray-400">startups</p>
            </div>

            <span className="text-3xl gradient-text">✦</span>

            {/* 100+ investors */}
            <div className="text-center">
              <p className="gradient-text text-6xl font-bold md:text-7xl lg:text-8xl">100+</p>
              <p className="text-sm text-gray-400">investors</p>
            </div>

            <span className="text-3xl gradient-text">✦</span>

            {/* 1000+ attendees */}
            <div className="text-center">
              <p className="gradient-text text-6xl font-bold md:text-7xl lg:text-8xl">1000+</p>
              <p className="text-sm text-gray-400">attendees</p>
            </div>
          </div>
        </div>

      </section>

      {/* DEMO Legacy Section */}
      <section className="relative z-10 w-full py-20">
        <div className="relative flex flex-col items-center px-8 text-center">
          {/* Title */}
          <h2 className="mb-8 text-5xl font-bold text-white md:text-7xl">
            DEMO LEGACY
          </h2>

          {/* $28M+ Raised - green gradient */}
          <p className="gradient-text mb-2 text-4xl font-bold md:text-6xl">
            $28M+ Raised
          </p>

          <p className="mb-4 text-gray-400">By TroyLabs Startups</p>

          {/* Stats row */}
          <div className="mb-16 flex flex-wrap justify-center gap-12 md:gap-20">
            <div className="text-center">
              <p className="gradient-text text-5xl font-bold md:text-6xl">350</p>
              <p className="text-sm text-gray-400">Top Trojan Startups</p>
            </div>
            <div className="text-center">
              <p className="gradient-text text-5xl font-bold md:text-6xl">6000+</p>
              <p className="text-sm text-gray-400">Unique Attendees</p>
            </div>
            <div className="text-center">
              <p className="gradient-text text-5xl font-bold md:text-6xl">500</p>
              <p className="text-sm text-gray-400">Investors</p>
            </div>
          </div>

          {/* Past Speakers */}
          <p className="mb-4 text-lg text-white">Past Speakers</p>
          <div className="mb-6">
            <LogoCarousel height={20} logos={speakerLogos} direction="right" speed={25} />
          </div>

          {/* Past Startups */}
          <p className="mb-4 text-lg text-white">Past Startups</p>
          <div className="mb-6">
            <LogoCarousel height={10} logos={startupLogos} direction="right" speed={25} />
          </div>

          {/* Past Investors */}
          <p className="mb-4 text-lg text-gray-300">Past Investors</p>
          <div>
            <LogoCarousel height={10} logos={investorLogos} direction="right" speed={25} />
          </div>
        </div>

      </section>

      {/* Exhibiting Startups Section */}
      <section id="exhibiting-startups" className="relative z-10 w-full py-20">
        <div className="relative flex flex-col items-center px-8">
          {/* Title */}
          <h2 className="gradient-text mb-12 text-5xl font-bold md:text-7xl">
            Exhibiting Startups
          </h2>

          {/* Startup Database Component */}
          <StartupDatabase />
        </div>

      </section>

      {/* Why DEMO Section */}
      <section className="relative z-10 w-full py-20">
        <div className="relative flex flex-col items-center px-8">
          {/* Title */}
          <h2 className="gradient-text mb-16 text-5xl font-bold md:text-7xl">
            Why DEMO?
          </h2>

          {/* Three cards */}
          <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {/* Startups Card */}
            <div className="rounded-lg border-2 border-[#1A4265] bg-[#131315]/80 p-8 text-center shadow-[inset_0_0_60px_rgba(26,66,101,0.4)]">
              <h3 className="mb-4 text-4xl font-bold text-white">Startups</h3>
              <p className="text-gray-400 leading-relaxed">
                DEMO provides startups with meaningful exposure to 1,000+ attendees, including active investors, talented student operators, and fellow founders. Showcase your product, compete in our pitch competition, and build relationships that accelerate growth. No matter your stage, DEMO connects you to the people who help startups move forward.
              </p>
            </div>

            {/* Investors Card */}
            <div className="rounded-lg border-2 border-[#1A4265] bg-[#131315]/80 p-8 text-center shadow-[inset_0_0_60px_rgba(26,66,101,0.4)]">
              <h3 className="mb-4 text-4xl font-bold text-white">Investors</h3>
              <p className="text-gray-400 leading-relaxed">
                Investors get direct access to Southern California&apos;s most promising student-founded startups. Meet high-potential founders, discover emerging talent early, and engage with the next generation of builders before they hit the broader market. DEMO is a concentrated pipeline of innovation, deal flow, and long-term founder relationships.
              </p>
            </div>

            {/* Attendees Card */}
            <div className="rounded-lg border-2 border-[#1A4265] bg-[#131315]/80 p-8 text-center shadow-[inset_0_0_60px_rgba(26,66,101,0.4)]">
              <h3 className="mb-4 text-4xl font-bold text-white">Attendees</h3>
              <p className="text-gray-400 leading-relaxed">
                Attendees gain direct access to emerging startups, venture capitalists, and industry leaders, while participating in panels, workshops, and networking designed to accelerate their careers. Whether you&apos;re looking to launch, join, or invest in a startup, DEMO is where SoCal&apos;s next generation of builders connects.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Footer Section */}
      <footer className="relative z-10 w-full pt-20">
        <div className="relative flex flex-col items-center px-8 text-center">
          {/* Thank You Title */}
          <h2 className="gradient-text mb-6 text-5xl font-bold md:text-7xl">
            A Huge Thank You!
          </h2>

          {/* Subtitle */}
          <p className="mb-12 max-w-3xl text-lg text-gray-300">
            Thank you for the support of our sponsors to provide opportunities at DEMO 2026!
          </p>

          {/* Sponsor Logos */}
          <Image
            src="/footer/Frame 2163.svg"
            alt="Sponsor logos - USC Marshall, Blackstone LaunchPad, USG"
            width={700}
            height={100}
            className="mb-16 max-w-full"
          />

          {/* ADA Accommodation */}
          <div className="mb-20 max-w-4xl">
            <h3 className="text-2xl font-semibold text-blue-400">
              ADA Accommodation at the USC Trojan Grand Ballroom and TCC 227
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 px-8">
              This program is open to all eligible individuals. TroyLabs operates all of its programs and activities consistent with the University&apos;s Notice of Non-Discrimination. Eligibility is not determined based on race, sex, ethnicity, sexual orientation, or any other prohibited factor. Individuals with disabilities who need accommodations to attend this event may contact troylabs@usc.edu. It is requested that individuals requiring accommodations or auxiliary aids such as sign language interpreters and alternative format materials notify us at least 7 days prior to the event. Every reasonable effort will be made to provide reasonable accommodations in an effective and timely manner.
            </p>
          </div>

          {/* Work With Us */}
          <h3 className="gradient-text mb-6 text-4xl font-bold md:text-5xl">
            Work With Us
          </h3>

          {/* CTA Buttons */}
          <div className="mb-4 flex flex-col gap-3 sm:flex-row">
            <SponsorUsButton />
            <StartupApplicationButton />
          </div>

          {/* Contact Link */}
          <a
            href="mailto:troylabs@usc.edu?subject=Hey%20TL!%20Curious%20about%20DEMO"
            className="mb-16 text-sm text-gray-500 underline transition-colors hover:text-gray-300"
          >
            Contact Us
          </a>
        </div>

        {/* LA Skyline */}
        <Image
          src="/footer/Group 1966.svg"
          alt="Los Angeles skyline illustration"
          width={1512}
          height={400}
          className="w-full"
        />
      </footer>
    </div>
  );
}
