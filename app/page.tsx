import Image from "next/image";
import { StartupDatabase } from "@/components/startup-database";
import { SponsorUsButton, StartupApplicationButton, DemoRSVPButton, EventRSVPButton } from "@/components/cta-buttons";
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

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 text-sm text-gray-300">
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
            <EventRSVPButton link="https://doorlist.app/e/HBEZvDK?s=FCxxLpRWj1" cta="Framer Designathon" />
            <DemoRSVPButton />
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

      {/* DEMO Agenda Section */}
      <section className="relative z-10 w-full py-20">
        <div className="relative mx-auto max-w-4xl px-8">
          <p className="mb-2 text-sm text-blue-400">April 22, 2026</p>
          <h2 className="mb-2 text-5xl font-bold text-white md:text-6xl">
            <span className="gradient-text">DEMO Agenda</span>
          </h2>
          <p className="mb-12 text-lg text-gray-400">
            A day full of speakers, pitches, and exhibitions
          </p>

          {/* Timeline */}
          <div className="space-y-8">
            {/* Doors Open */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Doors Open</h3>
                  <span className="text-sm text-blue-400">10:30 AM</span>
                </div>
                <p className="text-sm text-gray-400">Doors for the Opening Ceremony will open at 10:30 AM.</p>
              </div>
            </div>

            {/* Opening Ceremony */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Opening Ceremony</h3>
                  <span className="text-sm text-blue-400">10:45 AM - 11:00 AM</span>
                </div>
                <p className="text-sm text-gray-400">The Opening Ceremony will feature an introduction by TroyLabs, speeches from sponsors, and welcome remarks.</p>
              </div>
            </div>

            {/* Framer Workshop Introduction */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Framer Workshop Introduction</h3>
                  <span className="text-sm text-blue-400">11:15 AM - 11:45 AM</span>
                </div>
                <p className="text-sm text-gray-400">Kick off the Framer Designathon with an introductory workshop.</p>
              </div>
            </div>

            {/* Keynote 1 */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Keynote Speaker</h3>
                  <span className="text-sm text-blue-400">12:00 PM - 1:00 PM</span>
                </div>
                <p className="text-sm text-gray-400">Amy Liu, Founder &amp; CEO of Tower 28 Beauty</p>
                <div className="mt-2 flex items-center gap-3">
                  <Image
                    src="/headshots/Amy Liu Headshot 1.jpeg"
                    alt="Amy Liu"
                    width={40}
                    height={40}
                    className="rounded-full object-cover h-10 w-10"
                  />
                  <div>
                    <p className="text-sm font-semibold text-blue-400">Amy Liu</p>
                    <p className="text-xs text-gray-500">Founder &amp; CEO of Tower 28 Beauty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lunch */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Lunch</h3>
                  <span className="text-sm text-blue-400">1:00 PM - 2:00 PM</span>
                </div>
                <p className="text-sm text-gray-400">Catered by Lucille&apos;s Barbecue</p>
              </div>
            </div>

            {/* Framer Workshop Sprint */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Framer Workshop Sprint</h3>
                  <span className="text-sm text-blue-400">1:00 PM - 2:00 PM</span>
                </div>
                <p className="text-sm text-gray-400">Teams compete in the Framer Designathon sprint.</p>
              </div>
            </div>

            {/* Keynote 2 */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Keynote Speaker</h3>
                  <span className="text-sm text-blue-400">2:00 PM - 3:00 PM</span>
                </div>
                <p className="text-sm text-gray-400">Evan Spiegel, Co-Founder &amp; CEO of Snap Inc.</p>
                <div className="mt-2 flex items-center gap-3">
                  <Image
                    src="/headshots/Evan Spiegel.jpeg"
                    alt="Evan Spiegel"
                    width={40}
                    height={40}
                    className="rounded-full object-cover h-10 w-10"
                  />
                  <div>
                    <p className="text-sm font-semibold text-blue-400">Evan Spiegel</p>
                    <p className="text-xs text-gray-500">Co-Founder &amp; CEO of Snap Inc.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Framer Workshop Judging */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Framer Workshop Judging &amp; Winner Announcement</h3>
                  <span className="text-sm text-blue-400">3:00 PM - 3:30 PM</span>
                </div>
              </div>
            </div>

            {/* Startup Exhibition */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Startup Exhibition</h3>
                  <span className="text-sm text-blue-400">3:00 PM - 5:00 PM</span>
                </div>
                <p className="text-sm text-gray-400">The Startup Exhibition is the main event, and will be open to all guests. Attendees can walk around the exhibition to look at the startups, network with founders, meet investors, and enjoy free food and merchandise.</p>
              </div>
            </div>

            {/* Exclusive Founder Chat */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Exclusive Founder Chat</h3>
                  <span className="text-sm text-blue-400">5:00 PM - 5:30 PM</span>
                </div>
                <p className="text-sm text-gray-400">Jimmy Douglas, CEO of Plug</p>
              </div>
            </div>

            {/* Pitch Competition */}
            <div className="flex items-start gap-4">
              <span className="mt-1 text-blue-400">✦</span>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-white">Pitch Competition</h3>
                  <span className="text-sm text-blue-400">5:30 PM - 7:00 PM</span>
                </div>
                <p className="text-sm text-gray-400">Selected startups pitch to a panel of expert judges for cash prizes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <section className="relative z-10 w-full py-20">
        <div className="relative mx-auto max-w-5xl px-8">
          <p className="mb-2 text-sm text-gray-400">Inspiring Founder Stories</p>
          <h2 className="mb-2 text-4xl font-bold text-white md:text-5xl">
            Keynote Speakers
          </h2>
          <p className="mb-12 text-gray-400">Tower 28 Beauty, Snap Inc. &amp; Plug</p>

          {/* Amy Liu */}
          <div className="mb-16 flex flex-col gap-8 md:flex-row">
            <div className="flex-shrink-0">
              <Image
                src="/headshots/Amy Liu Headshot 1.jpeg"
                alt="Amy Liu"
                width={200}
                height={250}
                className="rounded-lg object-cover h-[250px] w-[200px]"
              />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-2xl font-bold text-blue-400">Amy Liu</h3>
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Founder &amp; CEO of Tower 28 Beauty
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-400">
                Amy Liu is the Founder and CEO of Tower 28, the best-selling beauty brand designed for sensitive skin, and made for all. A longtime eczema sufferer, Amy spent over 20 years as a beauty executive before launching Tower 28 in 2019. Tower 28&apos;s award-winning SOS skincare line is the first to earn seals of approval from the National Psoriasis Foundation, National Rosacea Society, and National Eczema Association&mdash;a testament to its commitment to skin-safe, effective formulations.
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                Amy is a true leader in the industry, founding Clean Beauty Summer School in 2020 to support minority-owned brands and creators. Her influence has earned her prestigious accolades, including the USC Entrepreneur of the Year Award, the CEW Visionary Award, and the EY Entrepreneur of the Year 2024 Greater Los Angeles Award. She also serves on the National Eczema Association&apos;s Board and is a member of YPO Los Angeles, further cementing her commitment to leadership and advocacy.
              </p>
            </div>
          </div>

          {/* Evan Spiegel */}
          <div className="mb-16 flex flex-col gap-8 md:flex-row">
            <div className="flex-shrink-0">
              <Image
                src="/headshots/Evan Spiegel.jpeg"
                alt="Evan Spiegel"
                width={200}
                height={250}
                className="rounded-lg object-cover h-[250px] w-[200px]"
              />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-2xl font-bold text-blue-400">Evan Spiegel</h3>
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Co-Founder &amp; CEO of Snap Inc.
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-400">
                Evan Spiegel is the co-founder and CEO of Snap Inc., the company behind Snapchat. He famously turned down a $3 billion acquisition offer from Facebook at 23 years old, and built a platform now used by over 800 million people worldwide. Under his leadership, Snap pioneered Stories, AR filters, and the ephemeral messaging format that reshaped how a generation communicates.
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                As one of the youngest CEOs to take a company public, Evan has consistently bet on creativity and culture over convention, building Snap into a global camera and communications company now valued at over $15 billion. At this keynote, he&apos;s sharing his vision for the future of augmented reality, entrepreneurship, and what it means to build something truly original.
              </p>
            </div>
          </div>

          {/* Jimmy Douglas */}
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-shrink-0">
              <Image
                src="/headshots/jimmy.jpeg"
                alt="Jimmy Douglas"
                width={200}
                height={250}
                className="rounded-lg object-cover h-[250px] w-[200px]"
              />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-2xl font-bold text-blue-400">Jimmy Douglas</h3>
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Founder &amp; CEO of Plug
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-400">
                Jimmy Douglas is a serial entrepreneur and the visionary behind Plug, a Santa Monica-based startup building the &ldquo;brain&rdquo; for EV valuations. After spending 5+ years in executive roles at Tesla, Jimmy realized that traditional car auctions were broken for EVs and set out to fix the infrastructure from the ground up.
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                Jimmy joins us at DEMO to share his journey from the front lines of Tesla to raising a $20M Series A and scaling a category-defining company.
              </p>
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
          <h2 className="gradient-text mb-12 text-5xl font-bold md:text-7xl">
            Exhibiting Startups
          </h2>

          <StartupDatabase />
        </div>
      </section>

      {/* Pitch Competition Section */}
      <section className="relative z-10 w-full py-20">
        <div className="relative mx-auto max-w-5xl px-8">
          <p className="mb-2 text-sm text-gray-400">Innovation in Action</p>
          <h2 className="mb-2 text-4xl font-bold md:text-5xl">
            <span className="gradient-text">Pitch Competition</span>
          </h2>
          <p className="mb-8 text-lg text-gray-400">Emerging Startups, Expert Judges</p>

          <p className="mb-12 max-w-2xl text-lg text-gray-300">
            Pitch Competitions for selected startups will last from 5:30 PM to 7:00 PM, and winners will receive tuition-deductible prizes as awarded by the Lloyd Greif Center for Entrepreneurial Studies.
          </p>

          {/* Prize amounts */}
          <div className="mb-16 flex items-start gap-16">
            <div>
              <p className="gradient-text text-7xl font-bold md:text-8xl">$7,500</p>
              <p className="text-sm text-gray-400">First Place Prize</p>
            </div>
            <div>
              <p className="gradient-text text-7xl font-bold md:text-8xl">$3,000</p>
              <p className="text-sm text-gray-400">Second Place Prize</p>
            </div>
          </div>

          {/* Judges */}
          <h3 className="mb-8 text-xl text-gray-300">Our Judges</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {/* Alex Canter */}
            <div className="flex flex-col items-start gap-3">
              <Image
                src="/headshots/alex.jpeg"
                alt="Alex Canter"
                width={64}
                height={64}
                className="rounded-full object-cover h-16 w-16"
              />
              <div>
                <p className="text-sm font-bold text-blue-400">Alex Canter</p>
                <p className="text-xs text-gray-400">CEO &amp; Co-Founder of Maggie&apos;s Refuel, 2x exited founder, and angel investor</p>
              </div>
            </div>

            {/* Timothy Li */}
            <div className="flex flex-col items-start gap-3">
              <Image
                src="/headshots/timothy li.jpeg"
                alt="Timothy Li"
                width={64}
                height={64}
                className="rounded-full object-cover h-16 w-16"
              />
              <div>
                <p className="text-sm font-bold text-blue-400">Timothy Li</p>
                <p className="text-xs text-gray-400">CEO &amp; Co-Founder of LendAPI</p>
              </div>
            </div>

            {/* Sean Kohli */}
            <div className="flex flex-col items-start gap-3">
              <Image
                src="/headshots/sean.jpeg"
                alt="Sean Kohli"
                width={64}
                height={64}
                className="rounded-full object-cover h-16 w-16"
              />
              <div>
                <p className="text-sm font-bold text-blue-400">Sean Kohli</p>
                <p className="text-xs text-gray-400">General Partner of Why You Should Join and Board of Team Vitality</p>
              </div>
            </div>

            {/* Carmen Palafox */}
            <div className="flex flex-col items-start gap-3">
              <Image
                src="/headshots/carmen.jpeg"
                alt="Carmen Palafox"
                width={64}
                height={64}
                className="rounded-full object-cover h-16 w-16"
              />
              <div>
                <p className="text-sm font-bold text-blue-400">Carmen Palafox</p>
                <p className="text-xs text-gray-400">Founding Partner of 2045 Ventures, Partner of MiLA Capital &amp; How Women Invest, and USC Marshall Adjunct Professor</p>
              </div>
            </div>

            {/* Abdo John Hajj */}
            <div className="flex flex-col items-start gap-3">
              <Image
                src="/headshots/abdo.jpeg"
                alt="Abdo John Hajj"
                width={64}
                height={64}
                className="rounded-full object-cover h-16 w-16"
              />
              <div>
                <p className="text-sm font-bold text-blue-400">Abdo John Hajj</p>
                <p className="text-xs text-gray-400">Co-Founder &amp; Managing Partner of Type One Ventures</p>
              </div>
            </div>
          </div>
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

          {/* Sponsor Logos - Tier 1: USC Marshall, USG, Blackstone */}
          <Image
            src="/footer/Frame 2163.svg"
            alt="Sponsor logos - USC Marshall, USG, Blackstone LaunchPad"
            width={700}
            height={100}
            className="mb-10 max-w-full"
          />

          {/* Sponsor Logos - Tier 2: Microsoft for Startups, super{set} */}
          <div className="mb-10 flex items-center justify-center gap-16">
            <Image
              src="/footer/USC Startups Opportunity 1.png"
              alt="Microsoft for Startups"
              width={300}
              height={44}
              className="h-11 w-auto object-contain"
            />
            <Image
              src="/footer/IMG_0735 1.png"
              alt="super{set}"
              width={220}
              height={44}
              className="h-11 w-auto object-contain"
            />
          </div>

          {/* Sponsor Logos - Tier 3: Framer, Ditto, RILLA, VioletX, doorlist */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-12">
            <Image
              src="/footer/Framer Wordmark (White Transparent) 1.png"
              alt="Framer"
              width={150}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="/footer/IMG_9384 1.png"
              alt="Ditto"
              width={130}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="/footer/Rilla TroyLabs Black Logo 1.png"
              alt="RILLA"
              width={150}
              height={36}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="/footer/VioletX 1.png"
              alt="VioletX"
              width={110}
              height={26}
              className="h-9 object-contain"
            />
            <Image
              src="/footer/dl_longlogo_stacked_white 1.png"
              alt="doorlist"
              width={45}
              height={42}
              className="h-9"
            />
          </div>

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
