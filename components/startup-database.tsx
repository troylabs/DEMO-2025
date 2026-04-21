"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

interface Founder {
  name: string;
  linkedin: string;
}

interface Startup {
  id: number;
  name: string;
  logo: string;
  vertical: string;
  hiring: boolean;
  link: string;
  founders: Founder[];
}

const L = "/startups-database-logos";

const startups: Startup[] = [
  { id: 1, name: "Betterball", logo: `${L}/betterball.avif`, vertical: "Consumer/Entertainment, CPG", hiring: false, link: "https://betterball.com/", founders: [{ name: "Louis Herndon", linkedin: "https://www.linkedin.com/in/louis-herndon-813092286/" }, { name: "Alexander Bui", linkedin: "https://www.linkedin.com/in/alexander-bui-3a378368/" }] },
  { id: 2, name: "but cute", logo: `${L}/butcute.png`, vertical: "Consumer/Entertainment, CPG", hiring: false, link: "https://butcute.com/", founders: [{ name: "Mikey Schumacher", linkedin: "https://www.linkedin.com/in/mikeyschu/" }] },
  { id: 3, name: "Clean AI Labs, Inc.", logo: `${L}/cleanAI.png`, vertical: "Tech, SaaS", hiring: false, link: "https://tryclean.ai", founders: [{ name: "Pavan Kumar N.Y.", linkedin: "https://www.linkedin.com/in/pavankumarny/" }, { name: "Pratham Patel", linkedin: "https://www.linkedin.com/in/prathampatel2618/" }, { name: "Tejas Gupta", linkedin: "https://www.linkedin.com/in/tejasguptax7/" }, { name: "Clarissa Saputra", linkedin: "https://www.linkedin.com/in/clarisssaans/" }] },
  { id: 4, name: "Cruma", logo: `${L}/cruma.jpeg`, vertical: "Tech, SaaS", hiring: true, link: "https://www.cruma.ai/", founders: [{ name: "Weston Williams", linkedin: "https://www.linkedin.com/in/weston-williams05/" }, { name: "Sean Rana", linkedin: "https://www.linkedin.com/in/seanrana/" }, { name: "Junsoo Kim", linkedin: "https://www.linkedin.com/in/junsookim05/" }] },
  { id: 5, name: "Drinkover", logo: `${L}/drinkover.PNG`, vertical: "Consumer/Entertainment, CPG", hiring: false, link: "https://buydrinkover.com", founders: [{ name: "Chris Sheng", linkedin: "https://www.linkedin.com/in/chris-sheng" }, { name: "Kyle Sheng", linkedin: "https://www.linkedin.com/in/kyle-sheng/" }] },
  { id: 6, name: "Editory", logo: `${L}/editory.png`, vertical: "Tech, SaaS", hiring: true, link: "https://editory.news/", founders: [{ name: "David Rodin", linkedin: "https://www.linkedin.com/in/davidrodin/" }, { name: "Zubin Hydrie", linkedin: "https://www.linkedin.com/in/zubinhydrie/" }] },
  { id: 7, name: "Electi AI", logo: `${L}/electiAI.png`, vertical: "Tech, AI/ML", hiring: true, link: "https://www.tryelecti.com/", founders: [{ name: "Mukhtar Orazbay", linkedin: "https://www.linkedin.com/in/mukhtarorazbay/" }, { name: "Erken Kichibayev", linkedin: "https://www.linkedin.com/in/erken-kichibaev/" }] },
  { id: 8, name: "Evaclog", logo: `${L}/evaclog.png`, vertical: "Tech, SaaS", hiring: true, link: "https://evaclog-app.vercel.app/", founders: [{ name: "Anika Nambisan", linkedin: "https://www.linkedin.com/in/anika-nambisan/" }, { name: "David Canlas", linkedin: "https://www.linkedin.com/in/davidcanlas/" }] },
  { id: 9, name: "Formulaite", logo: `${L}/formulaite.png`, vertical: "Healthcare, Biotech & Pharma", hiring: false, link: "https://formulaite.ai", founders: [{ name: "Alon Mutter", linkedin: "https://www.linkedin.com/in/alon-mutter-4367a12b3" }, { name: "Milind Upadhyay", linkedin: "https://www.linkedin.com/in/milind-upadhyay" }] },
  { id: 10, name: "Girls Into VC", logo: "", vertical: "Sponsor", hiring: false, link: "https://www.girlsintovc.com/", founders: [] },
  { id: 11, name: "Healthlet", logo: `${L}/healthlet.png`, vertical: "Healthcare, Digital Health", hiring: false, link: "", founders: [{ name: "Aaryan Midha", linkedin: "https://www.linkedin.com/in/aaryan-midha/" }, { name: "Mugil Shanmugam", linkedin: "" }] },
  { id: 12, name: "Homebase by EmberCorps", logo: `${L}/ember.png`, vertical: "Industrials/Infrastructure, Aerospace & Defense", hiring: true, link: "https://ember-corps.com/", founders: [{ name: "Mitchell Kirby", linkedin: "https://www.linkedin.com/in/mitchell-kirby/" }, { name: "Alex Bartolomei", linkedin: "https://www.linkedin.com/in/alexbartolomei/" }] },
  { id: 13, name: "Honest", logo: `${L}/honestnutrition.png`, vertical: "Consumer/Entertainment, Food", hiring: true, link: "https://www.honenutrition.com", founders: [{ name: "Bennett Carbone", linkedin: "https://www.linkedin.com/in/bennett-carbone-145257122/" }] },
  { id: 14, name: "Knode", logo: `${L}/knode`, vertical: "Tech, SaaS", hiring: false, link: "https://knodemaps.framer.website", founders: [{ name: "Lindsey Demyun", linkedin: "https://www.linkedin.com/in/lindseydemyun/" }, { name: "Henry Groome", linkedin: "https://www.linkedin.com/in/henrygroome/" }] },
  { id: 15, name: "Lifeline AI", logo: `${L}/lifelineAI.png`, vertical: "Tech, AI/ML", hiring: false, link: "https://lifeline.to", founders: [{ name: "Darnell Adler", linkedin: "https://www.linkedin.com/in/darnell-adler" }] },
  { id: 16, name: "Mark", logo: `${L}/mark.png`, vertical: "Tech, AI/ML", hiring: false, link: "https://mark.engineering/", founders: [{ name: "Eason Tang", linkedin: "https://www.linkedin.com/in/easontang23/" }] },
  { id: 17, name: "Nalana", logo: `${L}/nalana.png`, vertical: "Tech, AI/ML", hiring: true, link: "https://nalana.io", founders: [{ name: "Clarence Keith", linkedin: "https://www.linkedin.com/in/clarencekeith/" }, { name: "Iris Liu", linkedin: "https://www.linkedin.com/in/boyun-liu-46a12a382/" }, { name: "Xinyan Xie", linkedin: "https://www.linkedin.com/in/xinyan-x-aa5246327/" }, { name: "Aditya Dawale", linkedin: "https://www.linkedin.com/in/aditya-arunkumar-dawale/" }, { name: "Enge Cheng", linkedin: "https://www.linkedin.com/in/enge-cheng-2709273a5/" }] },
  { id: 18, name: "Nara", logo: `${L}/nara.png`, vertical: "Healthcare, Healthcare Administrative Services", hiring: false, link: "https://withnara.com/", founders: [{ name: "Grishma Shukla", linkedin: "https://linkedin.com/in/grish-shukla" }, { name: "Rodin Shokravi", linkedin: "https://linkedin.com/in/rodinsh" }, { name: "Philip Hannon", linkedin: "https://linkedin.com/in/phannon3" }] },
  { id: 19, name: "Natora", logo: `${L}/natora.png`, vertical: "Tech, SaaS", hiring: true, link: "https://www.natora.dev/", founders: [{ name: "Riley Milligan", linkedin: "https://www.linkedin.com/in/rileymilligan/" }] },
  { id: 20, name: "NeuroChron", logo: "", vertical: "Healthcare, Digital Health", hiring: false, link: "https://neurochron.vercel.app/", founders: [{ name: "Reem Khan", linkedin: "https://www.linkedin.com/in/reemkhan1/" }, { name: "Gerson Estrada", linkedin: "https://www.linkedin.com/in/gerson-estrada/" }, { name: "Ishaani Pradeep", linkedin: "https://www.linkedin.com/in/ishaani-pradeep/" }, { name: "Nicholas Kim", linkedin: "https://www.linkedin.com/in/nic-kim/" }, { name: "Nicole Popenko", linkedin: "https://www.linkedin.com/in/nicole-irina-popenko-b51a4322a/" }] },
  { id: 21, name: "Omni Reflex", logo: `${L}/omnireflex.png`, vertical: "Tech, AI/ML", hiring: true, link: "https://www.unimo.chat", founders: [{ name: "Yaocheng Zhuang", linkedin: "https://www.linkedin.com/in/yaochengzhuang/" }, { name: "Hao Zheng", linkedin: "https://www.linkedin.com/in/hao-zheng-8593a4256/" }, { name: "Kayla Zhang", linkedin: "https://www.linkedin.com/in/ruihan-zhang-73118a159/" }, { name: "Zirong Guan", linkedin: "https://linkedin.com/in/michelleguanux/" }] },
  { id: 22, name: "ORBES", logo: `${L}/orbes.png`, vertical: "Industrials/Infrastructure, Aerospace & Defense", hiring: false, link: "https://orbes.space/", founders: [{ name: "Anna Shaposhnik", linkedin: "https://www.linkedin.com/in/annaglyph/" }] },
  { id: 23, name: "P1 Skincare", logo: `${L}/p1skincare`, vertical: "Consumer/Entertainment, CPG", hiring: false, link: "https://p1skincare.com/", founders: [{ name: "Riya Daga", linkedin: "https://www.linkedin.com/in/riya-daga-734a94211/" }] },
  { id: 24, name: "PandoSurgical", logo: `${L}/pando surgical.png`, vertical: "Healthcare, Medical Devices", hiring: false, link: "https://pando-surgical.web.app/", founders: [{ name: "Aiden Pan", linkedin: "https://www.linkedin.com/in/aidenpan/" }, { name: "Noah Pearson", linkedin: "https://www.linkedin.com/in/noah-r-pearson/" }, { name: "Toshi Nagai", linkedin: "https://www.linkedin.com/in/toshio-nagai2029/" }, { name: "Derek Hua", linkedin: "https://www.linkedin.com/in/derekhuausc/" }] },
  { id: 25, name: "Parkzy", logo: `${L}/parkzy.png`, vertical: "Tech, Internet", hiring: false, link: "https://useparkzy.com/about", founders: [{ name: "Nila Makhfi", linkedin: "https://www.linkedin.com/in/nilamakhfi/" }, { name: "Vala Makhfi", linkedin: "https://www.linkedin.com/in/valamakhfi/" }, { name: "Milad Farazian", linkedin: "https://www.linkedin.com/in/miladfarazian/" }] },
  { id: 26, name: "Perfit", logo: `${L}/perfit.png`, vertical: "Consumer/Entertainment, Retail", hiring: false, link: "https://perfit.app", founders: [{ name: "Anantika Mannby", linkedin: "https://www.linkedin.com/in/anantika/" }, { name: "Fred Mannby", linkedin: "https://www.linkedin.com/in/mannby/" }] },
  { id: 27, name: "Resonant", logo: `${L}/resonant.png`, vertical: "Tech, SaaS", hiring: true, link: "https://useresonant.com/", founders: [{ name: "Kelvin Ye", linkedin: "https://www.linkedin.com/in/kelvin-ye/" }] },
  { id: 28, name: "Revisent", logo: `${L}/revisent.png`, vertical: "Tech, SaaS", hiring: false, link: "https://revisent.com", founders: [{ name: "Christopher Lee", linkedin: "https://linkedin.com/in/chrisxlee13/" }, { name: "Nayan Sarma", linkedin: "https://www.linkedin.com/in/nayan-sarma-658380227/" }] },
  { id: 29, name: "Satori Inference", logo: "", vertical: "Industrials/Infrastructure, Manufacturing", hiring: false, link: "https://www.satori-inference.com/", founders: [{ name: "Arnav Shah", linkedin: "https://www.linkedin.com/in/arnav-ashah/" }, { name: "Ethan Palosh", linkedin: "https://www.linkedin.com/in/ethanpalosh/" }] },
  { id: 30, name: "Seagull Technologies", logo: `${L}/seagulltechnologies.png`, vertical: "Finance & Business Services, Data Analytics", hiring: false, link: "https://www.seagulltech.us/", founders: [{ name: "Alexander Garcia", linkedin: "https://www.linkedin.com/in/alexander-garcia-72030b292/" }] },
  { id: 31, name: "Sense AI", logo: `${L}/senseAI.png`, vertical: "Tech, SaaS", hiring: false, link: "", founders: [{ name: "Val Whitten", linkedin: "https://www.linkedin.com/in/valeriewhitten" }, { name: "Manu Berrio", linkedin: "https://www.linkedin.com/in/manuela-berrio/" }] },
  { id: 32, name: "ShopWIP Inc.", logo: `${L}/wip.png`, vertical: "Consumer/Entertainment, Retail", hiring: true, link: "https://shopwip.com/", founders: [{ name: "Nelson Lou", linkedin: "https://www.linkedin.com/in/nelson-lou" }, { name: "Andrew Shi", linkedin: "https://www.linkedin.com/in/andrew-shi-duke/" }, { name: "Billy Huang", linkedin: "https://www.linkedin.com/in/billy-huang-7505262b563253525239/" }] },
  { id: 33, name: "SOLACE", logo: `${L}/solace.png`, vertical: "Consumer/Entertainment, CPG", hiring: false, link: "https://takesolace.now", founders: [{ name: "Ark Lu", linkedin: "https://www.linkedin.com/in/arklu/" }] },
  { id: 34, name: "Spotlight CardShow", logo: `${L}/spotlightcardshow`, vertical: "Consumer/Entertainment, Entertainment", hiring: false, link: "https://spotlightcardshow.com/", founders: [{ name: "Johnny Kwong", linkedin: "https://www.linkedin.com/in/johnny-kwong-a35876264" }, { name: "Johnson Ma", linkedin: "https://www.linkedin.com/in/johnson-g-ma/" }] },
  { id: 35, name: "Summit", logo: `${L}/summit.png`, vertical: "Tech, SaaS", hiring: false, link: "https://www.summit-geo.net/", founders: [{ name: "Lucas Rival", linkedin: "https://www.linkedin.com/in/lucasrival/" }, { name: "Jo Choi", linkedin: "https://www.linkedin.com/in/joseph-choi-051b8a288/" }, { name: "Ka'ren Mkrtchyan", linkedin: "https://www.linkedin.com/in/karenmkr/" }] },
  { id: 36, name: "TechLA Fellows", logo: "", vertical: "Sponsor", hiring: true, link: "https://techlafellows.com/", founders: [] },
  { id: 37, name: "Tectiv AI", logo: `${L}/tectiv.svg`, vertical: "Tech, AI/ML", hiring: false, link: "https://tectivai.com/", founders: [{ name: "Richard Kitso Paulson", linkedin: "https://www.linkedin.com/in/kitso-paulson-5402122a5" }] },
  { id: 38, name: "UIZO", logo: `${L}/uizo.png`, vertical: "Tech, Internet", hiring: false, link: "https://uizo.ai", founders: [{ name: "Adrian Vasquez", linkedin: "https://www.linkedin.com/in/adrianjvasquez/" }, { name: "Bentley Hung", linkedin: "https://www.linkedin.com/in/bentleyhung/" }, { name: "Vagis Kumar Sripathy", linkedin: "https://www.linkedin.com/in/vagiskumarsripathy/" }] },
  { id: 39, name: "URBTS", logo: `${L}/URBTS.png`, vertical: "Finance & Business Services, Enterprise Software", hiring: true, link: "https://www.urbts.com/", founders: [{ name: "Anuj Shah", linkedin: "https://www.linkedin.com/in/anujtalks12/" }] },
  { id: 40, name: "Viola", logo: `${L}/viola.png`, vertical: "Consumer/Entertainment, Music", hiring: false, link: "https://www.theviola.co/", founders: [{ name: "Ryan Chan", linkedin: "http://linkedin.com/in/ryan-chan-hk" }, { name: "Marcus Rahman", linkedin: "http://linkedin.com/in/rahmanmarcus" }, { name: "KyungTae Kim", linkedin: "http://linkedin.com/in/kktkim" }] },
  { id: 41, name: "Yondu", logo: `${L}/yondu.png`, vertical: "Tech, IT", hiring: true, link: "https://www.yondu.ai", founders: [{ name: "Michael Chen", linkedin: "https://www.linkedin.com/in/themichaelchen/" }, { name: "Tahmid Jamal", linkedin: "https://www.linkedin.com/in/74hm1d/" }] },
  { id: 42, name: "Your Honor AI", logo: `${L}/yourhonorAI.png`, vertical: "Tech, AI/ML", hiring: false, link: "https://yourhonor.ai/", founders: [{ name: "Benjamin Reed", linkedin: "https://www.linkedin.com/in/benreed4/" }, { name: "Jack Shapiro", linkedin: "https://www.linkedin.com/in/jackshapiro2004/" }, { name: "Krzysztof Jarocha", linkedin: "https://www.linkedin.com/in/chris-jarocha/" }] },
];

const verticals = ["All Verticals", ...[...new Set(startups.map((s) => s.vertical))].sort()];

export function StartupDatabase() {
  const [verticalFilter, setVerticalFilter] = useState("All Verticals");
  const [hiringFilter, setHiringFilter] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const matchesVertical = verticalFilter === "All Verticals" || startup.vertical === verticalFilter;
      const matchesHiring = !hiringFilter || startup.hiring;
      return matchesVertical && matchesHiring;
    });
  }, [verticalFilter, hiringFilter]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-2xl border-2 border-[#1A4265] bg-[#131315] backdrop-blur-sm overflow-hidden shadow-[inset_0_0_60px_rgba(26,66,101,0.4)] pb-2">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 pt-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold text-white">Startup Database</h3>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-gray-500">
              {filteredStartups.length}/{startups.length}
            </span>

            {/* Vertical Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#2797FF] to-[#274AFF] px-4 py-2 text-sm font-semibold text-[#DEE0E3] cursor-pointer focus:outline-none hover:opacity-90 transition-opacity">
                {verticalFilter}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1A1A1A] border-gray-700 max-h-64 overflow-y-auto">
                <DropdownMenuRadioGroup value={verticalFilter} onValueChange={setVerticalFilter}>
                  {verticals.map((v) => (
                    <DropdownMenuRadioItem
                      key={v}
                      value={v}
                      className="text-gray-300 focus:bg-gray-800 focus:text-white cursor-pointer"
                    >
                      {v}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hiring Filter */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="hiring-filter"
                checked={hiringFilter}
                onCheckedChange={(checked) => setHiringFilter(checked === true)}
                className="border-gray-500 data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-[#2797FF] data-[state=checked]:to-[#274AFF] data-[state=checked]:border-transparent"
              />
              <label
                htmlFor="hiring-filter"
                className="text-sm font-semibold text-[#DEE0E3] cursor-pointer"
              >
                Hiring
              </label>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Vertical</th>
                <th className="px-6 py-4 font-medium">Hiring</th>
                <th className="px-6 py-4 font-medium">Founders</th>
              </tr>
            </thead>
            <tbody>
              {filteredStartups.map((startup) => (
                <tr
                  key={startup.id}
                  className="transition-colors hover:bg-gray-800/30 cursor-pointer"
                  onClick={() => setExpanded(expanded === startup.id ? null : startup.id)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {startup.logo && (
                        <Image
                          src={startup.logo}
                          alt={startup.name}
                          width={32}
                          height={32}
                          className="h-8 w-8 flex-shrink-0 rounded-lg object-contain"
                        />
                      )}
                      {startup.link ? (
                        <a
                          href={startup.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-blue-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {startup.name}
                        </a>
                      ) : (
                        <span className="text-white font-medium">{startup.name}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{startup.vertical}</td>
                  <td className="px-6 py-4">
                    {startup.hiring ? (
                      <span className="text-green-400 text-sm">Yes</span>
                    ) : (
                      <span className="text-gray-500 text-sm">No</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {startup.founders.map((f) => (
                        <a
                          key={f.name}
                          href={f.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs text-blue-400 hover:bg-blue-500/20 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {f.name}
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStartups.length === 0 && (
          <div className="flex items-center justify-center py-12 text-gray-500">
            No startups match your filters
          </div>
        )}
      </div>
    </div>
  );
}
