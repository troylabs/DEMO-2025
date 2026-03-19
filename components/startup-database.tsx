"use client";

import { useState, useMemo } from "react";
import { StartupApplicationButton } from "@/components/cta-buttons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

interface Startup {
  id: number;
  name: string;
  logo: string;
  stage: string;
  industry: string;
  hiring: boolean;
}

const startups: Startup[] = [
  { id: 1, name: "TechFlow AI", logo: "/startups/placeholder.svg", stage: "Seed", industry: "AI/ML", hiring: true },
  { id: 2, name: "GreenEnergy", logo: "/startups/placeholder.svg", stage: "Series A", industry: "CleanTech", hiring: false },
  { id: 3, name: "HealthSync", logo: "/startups/placeholder.svg", stage: "Pre-Seed", industry: "HealthTech", hiring: true },
  { id: 4, name: "FinTrack", logo: "/startups/placeholder.svg", stage: "Seed", industry: "FinTech", hiring: true },
  { id: 5, name: "EduLearn", logo: "/startups/placeholder.svg", stage: "Series A", industry: "EdTech", hiring: false },
  { id: 6, name: "DataVault", logo: "/startups/placeholder.svg", stage: "Pre-Seed", industry: "Enterprise", hiring: true },
  { id: 7, name: "CloudNine", logo: "/startups/placeholder.svg", stage: "Seed", industry: "SaaS", hiring: false },
];

const stages = ["All Stages", ...[...new Set(startups.map((s) => s.stage))].sort()];
const industries = ["All Industries", ...[...new Set(startups.map((s) => s.industry))].sort()];

export function StartupDatabase() {
  const [stageFilter, setStageFilter] = useState("All Stages");
  const [industryFilter, setIndustryFilter] = useState("All Industries");
  const [hiringFilter, setHiringFilter] = useState(false);

  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const matchesStage = stageFilter === "All Stages" || startup.stage === stageFilter;
      const matchesIndustry = industryFilter === "All Industries" || startup.industry === industryFilter;
      const matchesHiring = !hiringFilter || startup.hiring;
      return matchesStage && matchesIndustry && matchesHiring;
    });
  }, [stageFilter, industryFilter, hiringFilter]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Card container */}
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

            {/* Stage Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#2797FF] to-[#274AFF] px-4 py-2 text-sm font-semibold text-[#DEE0E3] cursor-pointer focus:outline-none hover:opacity-90 transition-opacity">
                {stageFilter}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1A1A1A] border-gray-700">
                <DropdownMenuRadioGroup value={stageFilter} onValueChange={setStageFilter}>
                  {stages.map((stage) => (
                    <DropdownMenuRadioItem
                      key={stage}
                      value={stage}
                      className="text-gray-300 focus:bg-gray-800 focus:text-white cursor-pointer"
                    >
                      {stage}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Industry Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#2797FF] to-[#274AFF] px-4 py-2 text-sm font-semibold text-[#DEE0E3] cursor-pointer focus:outline-none hover:opacity-90 transition-opacity">
                {industryFilter}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1A1A1A] border-gray-700 max-h-64 overflow-y-auto">
                <DropdownMenuRadioGroup value={industryFilter} onValueChange={setIndustryFilter}>
                  {industries.map((industry) => (
                    <DropdownMenuRadioItem
                      key={industry}
                      value={industry}
                      className="text-gray-300 focus:bg-gray-800 focus:text-white cursor-pointer"
                    >
                      {industry}
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
                <th className="px-6 py-4 font-medium">Stage</th>
                <th className="px-6 py-4 font-medium">Industry</th>
                <th className="px-6 py-4 font-medium">Hiring</th>
              </tr>
            </thead>
            <tbody>
              {filteredStartups.map((startup) => (
                <tr
                  key={startup.id}
                  className="transition-colors hover:bg-gray-800/30"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-xs font-bold text-white">
                        {startup.name.charAt(0)}
                      </div>
                      <span className="text-white font-medium">{startup.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        startup.stage === "Pre-Seed"
                          ? "bg-purple-500/20 text-purple-400"
                          : startup.stage === "Seed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {startup.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{startup.industry}</td>
                  <td className="px-6 py-4">
                    {startup.hiring ? (
                      <span className="text-green-400">Yes</span>
                    ) : (
                      <span className="text-gray-500">No</span>
                    )}
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

      {/* CTA Button */}
      <div className="mt-8 flex justify-center">
        <StartupApplicationButton />
      </div>
    </div>
  );
}
